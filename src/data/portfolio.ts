import type { IconType } from 'react-icons';
import { BiLogoTypescript } from 'react-icons/bi';
import { DiMongodb } from 'react-icons/di';
import {
	FaDocker,
	FaFacebookF,
	FaGithub,
	FaLinkedinIn,
	FaNodeJs,
	FaReact,
	FaRobot,
} from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';
import {
	SiExpress,
	SiJavascript,
	SiMysql,
	SiNestjs,
	SiPostman,
	SiPostgresql,
	SiRailway,
	SiRedis,
	SiSwagger,
	SiVercel,
	SiVite,
	SiVitest,
} from 'react-icons/si';

export type SocialLink = {
	label: string;
	href: string;
	icon: IconType;
	iconColor: string;
	glowColor: string;
};

export type NavButton = {
	label: string;
	href: string;
	className: string;
};

export type TimelineItem = {
	role: string;
	org: string;
	period: string;
	bullets: string[];
};

export type TimelineSection = {
	heading: string;
	items: TimelineItem[];
};

export type TechItem = {
	label: string;
	icon: IconType;
	iconColor: string;
	glowColor: string;
};

export type TechGroup = {
	heading: string;
	items: TechItem[];
};

export type ProjectItem = {
	title: string;
	description: string;
	image: string;
	techStack: string[];
	repoUrl?: string;
	liveUrl?: string;
	highlights: string[];
};

export const personal = {
	name: 'VAN KHA',
	fullName: 'Đỗ Văn Kha',
	title: 'Backend Developer / Software Engineer',
	greeting: 'Hi, I am',
	repoUrl: 'https://github.com/vkha03/portfolio-latest',
	repoStarLabel: '⭐ Star this repo',
	showRepoStar: true,
};

export const socialLinks: SocialLink[] = [
	{
		label: 'GitHub',
		href: 'https://github.com/vkha03',
		icon: FaGithub,
		iconColor: 'rgba(255, 255, 255, 0.9)',
		glowColor: 'rgba(255, 255, 255, 0.4)',
	},
	{
		label: 'LinkedIn',
		href: 'https://www.linkedin.com/in/do-kha-ba1611312/',
		icon: FaLinkedinIn,
		iconColor: 'rgb(0, 160, 220)',
		glowColor: 'rgba(0, 160, 220, 0.6)',
	},
	{
		label: 'Facebook',
		href: 'https://www.facebook.com/ovkha.2024',
		icon: FaFacebookF,
		iconColor: 'rgb(24, 119, 242)',
		glowColor: 'rgba(24, 119, 242, 0.6)',
	},
	{
		label: 'Email',
		href: 'mailto:dovankha0802@gmail.com',
		icon: IoMailOutline,
		iconColor: 'rgb(234, 67, 53)',
		glowColor: 'rgba(234, 67, 53, 0.7)',
	},
];

export const navButtons: NavButton[] = [
	{ label: 'About Me', href: '/#about-me', className: 'first' },
	{ label: 'Tech', href: '/#tech-stack', className: 'sec' },
];

export const about = {
	section: { title: 'About', subtitle: 'ME' },
	intro: [
		"👋 Hi, I'm Đỗ Văn Kha (Van Kha), a Backend Developer / Software Engineer.",
		"I am focused on building sustainable systems. I don't just write code; I engineer solutions with a strong emphasis on System Architecture & Optimization, and practical AI Integration.",
		'I prioritize code cleanliness, system performance, and professional application containerization to ensure codebases remain maintainable and easily scalable. Deeply passionate about robust backend architectures and AI pipeline integration.',
	],
	timeline: [
		{
			heading: 'Education',
			items: [
				{
					role: 'Software Engineering Student',
					org: 'Self-Directed & Practical Learning',
					period: 'Ongoing',
					bullets: [
						'Focused on backend systems design, distributed architectures, and database optimization through hands-on project development.',
						'Continuously deepening expertise in NestJS, Docker containerization, and cloud deployment (Vercel, Railway).',
					],
				},
			],
		},
		{
			heading: 'Experience',
			items: [
				{
					role: 'System Architecture & Backend',
					org: 'SmartQuery (AI Query Engine)',
					period: '2026',
					bullets: [
						'Built a robust Prompt & Context processing pipeline for AI Agents converting natural language into precise SQL queries.',
						'Managed secure database connections and prevented SQL Injection from AI-generated outputs.',
						'Optimized Schema Context to help LLMs accurately understand complex database structures.',
					],
				},
			],
		},
		{
			heading: 'Philosophy & Focus',
			items: [
				{
					role: 'Backend Engineering & Architecture',
					org: 'System Optimization & Scalability',
					period: 'Continuous',
					bullets: [
						'Architecting clean, scalable backend services with Node.js, NestJS, Express, and PostgreSQL.',
						'Designing caching layers with Redis and deploying containerized applications with Docker.',
						'Integrating AI pipelines (RAG, LLM Agents) to empower backend workflows.',
					],
				},
			],
		},
	] satisfies TimelineSection[],
};

export const projects: ProjectItem[] = [
	{
		title: 'SmartQuery',
		description:
			'An AI-Powered Interface that bridges non-technical users and complex databases by converting natural language into precise SQL queries.',
		image: '/smartquery.png',
		techStack: ['Node.js', 'MySQL', 'AI Agents', 'Docker'],
		repoUrl: 'https://github.com/vkha03/SmartQuery',
		highlights: [
			'Robust Prompt & Context processing pipeline for AI Agents',
			'SQL Injection prevention from AI-generated outputs',
			'Schema Context optimization for complex DB structures',
		],
	},
];

export const contact = {
	section: { title: 'Get In', subtitle: 'TOUCH' },
	headline: "Let's Build Something Great",
	description:
		'I am always open to opportunities involving real-world backend architecture, system optimization, and AI integration. Feel free to reach out.',
	email: 'dovankha0802@gmail.com',
	copyright: `© ${new Date().getFullYear()} Đỗ Văn Kha. Crafted with precision.`,
};

export const techStack = {
	section: { title: 'Tech', subtitle: 'SET' },
	groups: [
		{
			heading: 'Backend & Architecture',
			items: [
				{
					label: 'Node JS',
					icon: FaNodeJs,
					iconColor: 'rgb(104, 160, 99)',
					glowColor: 'rgb(104, 160, 99)',
				},
				{
					label: 'NestJS',
					icon: SiNestjs,
					iconColor: 'rgb(224, 35, 78)',
					glowColor: 'rgba(224, 35, 78, 0.6)',
				},
				{
					label: 'TypeScript',
					icon: BiLogoTypescript,
					iconColor: 'rgb(49, 120, 198)',
					glowColor: 'rgba(49, 120, 198, 0.6)',
				},
				{
					label: 'JavaScript',
					icon: SiJavascript,
					iconColor: 'rgb(247, 223, 30)',
					glowColor: 'rgba(247, 223, 30, 0.6)',
				},
				{
					label: 'Express JS',
					icon: SiExpress,
					iconColor: 'rgb(255, 255, 255)',
					glowColor: 'rgba(255, 255, 255, 0.4)',
				},
			],
		},
		{
			heading: 'Databases & Caching',
			items: [
				{
					label: 'PostgreSQL',
					icon: SiPostgresql,
					iconColor: 'rgb(65, 105, 225)',
					glowColor: 'rgba(65, 105, 225, 0.6)',
				},
				{
					label: 'Redis',
					icon: SiRedis,
					iconColor: 'rgb(220, 56, 45)',
					glowColor: 'rgba(220, 56, 45, 0.6)',
				},
				{
					label: 'MongoDB',
					icon: DiMongodb,
					iconColor: 'rgb(0, 237, 100)',
					glowColor: 'rgba(0, 237, 100, 0.7)',
				},
				{
					label: 'MySQL',
					icon: SiMysql,
					iconColor: 'rgb(0, 122, 158)',
					glowColor: 'rgba(0, 122, 158, 0.75)',
				},
			],
		},
		{
			heading: 'DevOps, Cloud & AI',
			items: [
				{
					label: 'Docker',
					icon: FaDocker,
					iconColor: 'rgb(36, 150, 237)',
					glowColor: 'rgba(36, 150, 237, 0.6)',
				},
				{
					label: 'Git / GitHub',
					icon: FaGithub,
					iconColor: 'rgba(255, 255, 255, 0.9)',
					glowColor: 'rgba(255, 255, 255, 0.4)',
				},
				{
					label: 'Vercel',
					icon: SiVercel,
					iconColor: 'rgb(255, 255, 255)',
					glowColor: 'rgba(255, 255, 255, 0.4)',
				},
				{
					label: 'Railway',
					icon: SiRailway,
					iconColor: 'rgb(255, 255, 255)',
					glowColor: 'rgba(255, 255, 255, 0.4)',
				},
				{
					label: 'AI Pipelines',
					icon: FaRobot,
					iconColor: 'rgb(108, 60, 224)',
					glowColor: 'rgba(108, 60, 224, 0.6)',
				},
			],
		},
		{
			heading: 'Frontend & Dev Tools',
			items: [
				{
					label: 'React JS',
					icon: FaReact,
					iconColor: 'rgb(97, 219, 251)',
					glowColor: 'rgba(97, 219, 251, 0.6)',
				},
				{
					label: 'Vite',
					icon: SiVite,
					iconColor: 'rgb(100, 108, 255)',
					glowColor: 'rgba(100, 108, 255, 0.6)',
				},
				{
					label: 'Vitest',
					icon: SiVitest,
					iconColor: 'rgb(252, 199, 43)',
					glowColor: 'rgba(252, 199, 43, 0.6)',
				},
				{
					label: 'Swagger',
					icon: SiSwagger,
					iconColor: 'rgb(133, 234, 45)',
					glowColor: 'rgba(133, 234, 45, 0.6)',
				},
				{
					label: 'Postman',
					icon: SiPostman,
					iconColor: 'rgb(255, 108, 55)',
					glowColor: 'rgba(255, 108, 55, 0.6)',
				},
			],
		},
	] satisfies TechGroup[],
};
