# HỒ SƠ DỮ LIỆU PORTFOLIO - ĐỖ VĂN KHA (KHADEV)

> File này tổng hợp **toàn bộ dữ liệu cá nhân, triết lý, kỹ năng công nghệ và dự án** được trích xuất từ project `khadev`, chuẩn hóa sẵn sàng để cập nhật vào project `portfolio-latest` (đặc biệt là file `src/data/portfolio.ts`, `package.json`, và `index.html`).

---

## 1. Thông tin định danh & Cá nhân (Personal Info)

- **Tên hiển thị (Short Name)**: `VAN KHA` hoặc `KHA`
- **Họ và tên đầy đủ (Full Name)**: `Đỗ Văn Kha` (Do Van Kha)
- **Chức danh / Định vị (Role / Title)**: `Backend Developer / Software Engineer`
- **Lời chào (Greeting)**: `Hi, I am`
- **Slogan Hero**: `Building Robust Systems.`
- **Core Philosophy Tags**: `Architecture.` • `Optimization.` • `Integration.`
- **Trạng thái (Status)**: `Open to opportunities`
- **GitHub Repository**: `https://github.com/vkha03/portfolio-latest`

### Mapping cho `personal` trong `src/data/portfolio.ts`:

```typescript
export const personal = {
	name: 'VAN KHA',
	fullName: 'Đỗ Văn Kha',
	title: 'Backend Developer / Software Engineer',
	greeting: 'Hi, I am',
	repoUrl: 'https://github.com/vkha03/portfolio-latest',
	repoStarLabel: '⭐ Star this repo',
	showRepoStar: true,
};
```

---

## 2. Kênh liên hệ & Mạng xã hội (Social Links)

- **Email**: `dovankha0802@gmail.com`
  - Link: `mailto:dovankha0802@gmail.com`
- **GitHub**: `https://github.com/vkha03`
- **LinkedIn**: `https://www.linkedin.com/in/do-kha-ba1611312/`
- **Facebook**: `https://www.facebook.com/ovkha.2024`

### Mapping cho `socialLinks` trong `src/data/portfolio.ts`:

```typescript
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
```

---

## 3. Giới thiệu bản thân & Triết lý (About Me & Philosophy)

### Đoạn giới thiệu (Intro Paragraphs):

1. 👋 **Đoạn 1**: _"Hi, I'm Đỗ Văn Kha (Van Kha), a Backend Developer / Software Engineer focused on System Architecture & Optimization, with practical AI Integration."_
2. 🚀 **Đoạn 2**: _"I don't just write code; I engineer solutions. I focus on building sustainable systems with high clean code standards, system performance, and professional application containerization to ensure codebases remain maintainable and effortlessly scalable."_
3. 💡 **Đoạn 3**: _"Deeply passionate about robust backend architectures, distributed systems, and integrating AI/LLM pipelines (such as RAG and AI Agents) into production-ready backends."_

### Mapping cho `about.intro` trong `src/data/portfolio.ts`:

```typescript
export const about = {
	section: { title: 'About', subtitle: 'ME' },
	intro: [
		"👋 Hi, I'm Đỗ Văn Kha (Van Kha), a Backend Developer / Software Engineer.",
		"I focus on System Architecture & Optimization with practical AI Integration. I don't just write code; I engineer solutions.",
		'I prioritize code cleanliness, system performance, and professional application containerization (Docker) to build maintainable, highly scalable systems. Deeply passionate about distributed backends and AI pipeline integration.',
	],
	// ...
};
```

---

## 4. Kinh nghiệm & Dự án tiêu biểu (Timeline / Projects / Highlights)

### Dự án trọng điểm: **SmartQuery (2026)**

- **Vai trò**: System Architecture & Backend Engineer
- **Thời gian**: 2026
- **Định vị**: Intelligent Query Engine
- **Mô tả**: Nền tảng kết nối người dùng phi kỹ thuật với hệ thống database phức tạp bằng cách dịch ngôn ngữ tự nhiên thành truy vấn SQL chính xác.
- **Tech Stack**: `Node.js` • `MySQL` • `AI Agent Integration` • `Docker`
- **Điểm nhấn kỹ thuật (Key Technical Bullets)**:
  - Xây dựng pipeline xử lý Prompt & Context chuyên sâu cho AI Agents.
  - Quản lý kết nối bảo mật và ngăn chặn triệt để SQL Injection từ output sinh ra bởi AI.
  - Tối ưu hóa Schema Context giúp AI hiểu chính xác cấu trúc dữ liệu quan hệ phức tạp.

### Lộ trình & Năng lực phát triển (Growth Trajectory):

- **Backend Core & Architecture**: Nắm vững NestJS patterns, Microservices architecture, Message Queues (RabbitMQ/Kafka).
- **Distributed Systems & Performance**: Caching đa tầng với Redis, thiết kế kiến trúc phân tán, tối ưu hóa cơ sở dữ liệu và xây dựng CI/CD pipelines.
- **Cloud & AI Engineering**: Cloud-native (AWS/GCP), Event-driven systems, RAG & LangChain backend integration.

### Mapping cho `about.timeline` trong `src/data/portfolio.ts`:

```typescript
timeline: [
	{
		heading: 'Featured Projects',
		items: [
			{
				role: 'System Architecture & Backend',
				org: 'SmartQuery (AI Query Engine)',
				period: '2026',
				bullets: [
					'Built a robust Prompt & Context processing pipeline for AI Agents converting natural language into precise SQL queries.',
					'Managed secure database connections and prevented SQL Injection from AI-generated outputs.',
					'Optimized Schema Context to help LLM accurately understand complex database structures.',
				],
			},
		],
	},
	{
		heading: 'Focus & Trajectory',
		items: [
			{
				role: 'Backend Engineering & Architecture',
				org: 'System Optimization & Scalability',
				period: 'Continuous',
				bullets: [
					'Specializing in high-performance backends with Node.js, NestJS, Express, PostgreSQL, and Redis.',
					'Containerization and microservices deployment with Docker and cloud PaaS (Vercel, Railway).',
					'Implementing modern AI engineering pipelines including RAG and Agent integrations.',
				],
			},
		],
	},
];
```

---

## 5. Kỹ năng công nghệ chi tiết (Tech Stack & Icons)

Dữ liệu được gom nhóm chuẩn theo 4 nhóm chuyên môn từ `khadev`, kèm icon tương ứng trong thư viện `react-icons`:

### Nhóm 1: Backend & Architecture

- **Node.js**: `FaNodeJs` (`rgb(104, 160, 99)`)
- **NestJS**: `SiNestjs` (`rgb(224, 35, 78)`)
- **TypeScript**: `BiLogoTypescript` (`rgb(49, 120, 198)`)
- **JavaScript**: `SiJavascript` (`rgb(247, 223, 30)`)
- **Express**: `SiExpress` (`rgb(255, 255, 255)`)

### Nhóm 2: Databases & Caching

- **PostgreSQL**: `SiPostgresql` (`rgb(65, 105, 225)`)
- **MongoDB**: `DiMongodb` (`rgb(0, 237, 100)`)
- **Redis**: `SiRedis` (`rgb(220, 56, 45)`)
- **MySQL**: `SiMysql` (`rgb(0, 122, 158)`)

### Nhóm 3: DevOps, Cloud & AI

- **Docker**: `FaDocker` (`rgb(36, 150, 237)`)
- **Git / GitHub**: `FaGithub` (`rgba(255, 255, 255, 0.9)`)
- **Vercel**: `SiVercel` (`rgb(255, 255, 255)`)
- **Railway**: `SiRailway` (`rgb(255, 255, 255)`)
- **RAG / AI Agents**: `FaRobot` (`rgb(108, 60, 224)`)

### Nhóm 4: Frontend Support & Tools

- **React**: `FaReact` (`rgb(97, 219, 251)`)
- **Vite**: `SiVite` (`rgb(100, 108, 255)`)
- **Vitest**: `SiVitest` (`rgb(252, 199, 43)`)
- **Postman**: `SiPostman` (`rgb(255, 108, 55)`)
- **Swagger**: `SiSwagger` (`rgb(133, 234, 45)`)

### Mapping cho `techStack` trong `src/data/portfolio.ts`:

```typescript
export const techStack = {
	section: { title: 'Tech', subtitle: 'STACK' },
	groups: [
		{
			heading: 'Backend & Architecture',
			items: [
				{
					label: 'Node.js',
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
					label: 'Express',
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
			],
		},
		{
			heading: 'Frontend & Dev Tools',
			items: [
				{
					label: 'React',
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
```

---

## 6. Metadata dự án (Cập nhật cho package.json, index.html & README.md)

### Cho `index.html`:

- **Title**: `Đỗ Văn Kha — Backend Developer`
- **Meta Description**: `Đỗ Văn Kha — Backend Developer focused on System Architecture & Optimization. Building robust systems with AI integration.`

### Cho `package.json`:

- **Name**: `dovankha-portfolio` (hoặc `khadev-portfolio`)
- **Author**: `Đỗ Văn Kha <dovankha0802@gmail.com>`
- **Repository**: `https://github.com/vkha03/portfolio-latest`
- **Homepage**: `https://github.com/vkha03`
