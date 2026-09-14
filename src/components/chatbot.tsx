import { useCallback, useEffect, useRef, useState } from 'react';

type Message = {
	id: string;
	role: 'user' | 'assistant';
	content: string;
};

const WELCOME_MESSAGE: Message = {
	id: 'welcome',
	role: 'assistant',
	content:
		"Hi! I'm **kAI** 👋 — Van Kha's personal AI assistant.\n\nAsk me anything about his skills, projects, or what he's building next!",
};

let msgCounter = 0;
const genId = () => `msg-${Date.now()}-${msgCounter++}`;

const formatMessage = (text: string) => {
	if (!text) return '';

	return text.split('\n').map((line, i) => {
		// Bold
		const processed = line.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
		// Inline code
		const withCode = processed.replace(
			/`(.+?)`/g,
			'<code class="kai-inline-code">$1</code>',
		);
		// List items
		if (line.match(/^[-*] /)) {
			return (
				<li
					key={i}
					className='kai-li'
					dangerouslySetInnerHTML={{ __html: withCode.slice(2) }}
				/>
			);
		}
		if (line.trim() === '') return <br key={i} />;
		return (
			<p
				key={i}
				className='kai-p'
				dangerouslySetInnerHTML={{ __html: withCode }}
			/>
		);
	});
};

export const ChatBot = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [messages, setMessages] = useState<Message[]>([]);
	const [input, setInput] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const messagesEndRef = useRef<HTMLDivElement>(null);
	const abortRef = useRef<AbortController | null>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	// Auto-scroll to bottom
	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
	}, [messages, isLoading]);

	// Focus input when chat opens
	useEffect(() => {
		if (isOpen) inputRef.current?.focus();
	}, [isOpen]);

	const sendMessage = useCallback(
		async (text: string) => {
			const trimmed = text.trim();
			if (!trimmed || isLoading) return;

			setInput('');
			setError(null);

			const userMsg: Message = {
				id: genId(),
				role: 'user',
				content: trimmed,
			};
			const updatedMessages = [...messages, userMsg];
			setMessages(updatedMessages);
			setIsLoading(true);

			// Abort previous request if any
			if (abortRef.current) abortRef.current.abort();
			const controller = new AbortController();
			abortRef.current = controller;

			try {
				const apiMessages = updatedMessages.map((m) => ({
					role: m.role,
					content: m.content,
				}));

				const res = await fetch('/api/chat', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ messages: apiMessages }),
					signal: controller.signal,
				});

				if (!res.ok) throw new Error(`API error: ${res.status}`);

				const reader = res.body?.getReader();
				if (!reader) throw new Error('No reader');

				const decoder = new TextDecoder();
				const assistantId = genId();
				let fullText = '';

				setMessages((prev) => [
					...prev,
					{ id: assistantId, role: 'assistant', content: '' },
				]);

				while (true) {
					const { done, value } = await reader.read();
					if (done) break;

					fullText += decoder.decode(value, { stream: true });
					setMessages((prev) =>
						prev.map((m) =>
							m.id === assistantId ? { ...m, content: fullText } : m,
						),
					);
				}
			} catch (err) {
				if (err instanceof Error && err.name !== 'AbortError') {
					setError('Something went wrong. Please try again later.');
				}
			} finally {
				setIsLoading(false);
				abortRef.current = null;
			}
		},
		[messages, isLoading],
	);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		sendMessage(input);
	};

	const clearChat = () => {
		setMessages([]);
		setError(null);
	};

	const displayMessages =
		messages.length === 0 ? [WELCOME_MESSAGE] : [WELCOME_MESSAGE, ...messages];

	return (
		<>
			{/* Floating Action Button */}
			{!isOpen && (
				<button
					className='kai-fab'
					onClick={() => setIsOpen(true)}
					aria-label='Open AI assistant'
				>
					<span className='kai-fab-icon'>✦</span>
					<span className='kai-fab-pulse' />
				</button>
			)}

			{/* Chat Panel */}
			{isOpen && (
				<div className='kai-panel'>
					{/* Header */}
					<div className='kai-header'>
						<div className='kai-header-info'>
							<div className='kai-avatar'>
								<span>✦</span>
							</div>
							<div>
								<div className='kai-name'>kAI</div>
								<div className='kai-status'>Van Kha&apos;s AI Assistant</div>
							</div>
						</div>
						<div className='kai-header-actions'>
							<button
								className='kai-btn-icon'
								onClick={clearChat}
								title='Clear chat'
							>
								⟲
							</button>
							<button
								className='kai-btn-icon'
								onClick={() => setIsOpen(false)}
								title='Close'
							>
								✕
							</button>
						</div>
					</div>

					{/* Messages */}
					<div className='kai-messages'>
						{displayMessages.map((msg) => (
							<div
								key={msg.id}
								className={`kai-msg ${msg.role === 'user' ? 'kai-msg-user' : 'kai-msg-ai'}`}
							>
								{msg.role === 'assistant' && (
									<div className='kai-msg-avatar'>✦</div>
								)}
								<div
									className={`kai-msg-bubble ${msg.role === 'user' ? 'kai-bubble-user' : 'kai-bubble-ai'}`}
								>
									<div className='kai-msg-content'>
										{formatMessage(msg.content)}
									</div>
								</div>
							</div>
						))}

						{isLoading && messages[messages.length - 1]?.role === 'user' && (
							<div className='kai-msg kai-msg-ai'>
								<div className='kai-msg-avatar'>✦</div>
								<div className='kai-msg-bubble kai-bubble-ai'>
									<div className='kai-typing'>
										<span />
										<span />
										<span />
									</div>
								</div>
							</div>
						)}

						{error && (
							<div className='kai-msg kai-msg-ai'>
								<div className='kai-msg-avatar kai-avatar-error'>!</div>
								<div className='kai-msg-bubble kai-bubble-ai kai-bubble-error'>
									<div className='kai-msg-content'>
										<p className='kai-p'>{error}</p>
									</div>
								</div>
							</div>
						)}

						<div ref={messagesEndRef} />
					</div>

					{/* Input */}
					<form
						className='kai-input-bar'
						onSubmit={handleSubmit}
					>
						<input
							ref={inputRef}
							type='text'
							className='kai-input'
							value={input}
							onChange={(e) => setInput(e.target.value)}
							placeholder='Ask about Van Kha...'
							disabled={isLoading}
						/>
						<button
							type='submit'
							className='kai-send'
							disabled={isLoading || !input.trim()}
						>
							↑
						</button>
					</form>
				</div>
			)}
		</>
	);
};
