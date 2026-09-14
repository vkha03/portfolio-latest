import type { IncomingMessage, ServerResponse } from 'node:http';

import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

function apiChatDevPlugin(): Plugin {
	return {
		name: 'api-chat-dev',
		configureServer(server) {
			server.middlewares.use(
				'/api/chat',
				async (req: IncomingMessage, res: ServerResponse) => {
					if (req.method !== 'POST') {
						res.statusCode = 405;
						res.setHeader('Content-Type', 'application/json');
						res.end(JSON.stringify({ error: 'Method not allowed' }));
						return;
					}

					const env = loadEnv('', process.cwd(), '');
					if (env.GOOGLE_GENERATIVE_AI_API_KEY) {
						process.env.GOOGLE_GENERATIVE_AI_API_KEY =
							env.GOOGLE_GENERATIVE_AI_API_KEY;
					}

					let rawBody = '';
					req.on('data', (chunk: Buffer | string) => {
						rawBody += chunk;
					});

					req.on('end', async () => {
						try {
							const parsed = JSON.parse(rawBody);
							(req as unknown as { body: unknown }).body = parsed;
							(
								res as unknown as {
									status: (code: number) => typeof res;
								}
							).status = (code: number) => {
								res.statusCode = code;
								return res;
							};
							(
								res as unknown as {
									json: (data: unknown) => typeof res;
								}
							).json = (data: unknown) => {
								res.setHeader('Content-Type', 'application/json');
								res.end(JSON.stringify(data));
								return res;
							};

							// @ts-expect-error import serverless handler in dev
							const chatModule = await import('./api/chat.js');
							await chatModule.default(req, res);
						} catch (err: unknown) {
							console.error('Dev chat error:', err);
							if (!res.headersSent) {
								res.statusCode = 500;
								res.setHeader('Content-Type', 'application/json');
								res.end(
									JSON.stringify({
										error:
											err instanceof Error
												? err.message
												: 'Internal server error',
									}),
								);
							}
						}
					});
				},
			);
		},
	};
}

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), apiChatDevPlugin()],
	server: {
		host: true,
		open: true,
	},
});
