import { HiDownload } from 'react-icons/hi';

import { FloatingButton } from '../components/floating-button';
import { GlowLink } from '../components/glow-box-link';
import { TextHover } from '../components/text-hover.component';
import { navButtons, personal, socialLinks } from '../data/portfolio';

export const InfoSection = () => {
	const [aboutNav, techNav] = navButtons;

	return (
		<div className='hero-section'>
			{personal.showRepoStar && (
				<a
					href={personal.repoUrl}
					target='_blank'
					rel='noopener noreferrer'
					className='github-ribbon'
				>
					<div>{personal.repoStarLabel}</div>
					<span></span>
				</a>
			)}

			<FloatingButton
				label={aboutNav.label}
				className={aboutNav.className}
				href={aboutNav.href}
			/>

			<div className='hero-avatar-wrapper'>
				<div className='hero-avatar-glow'></div>
				<img
					src={personal.avatar}
					alt={personal.fullName}
					className='hero-avatar-img'
				/>
				<div
					className='hero-status-badge'
					title='Open to opportunities'
				>
					<span className='status-dot'></span>
					<span className='status-pulse'></span>
				</div>
			</div>

			<p className='hero-greeting'>{personal.greeting}</p>
			<TextHover
				text={personal.name}
				className='name'
			/>
			<p className='hero-title'>{personal.title}</p>

			<div className='hero-cta-group'>
				<a
					href={personal.cvUrl}
					download='Do_Van_Kha_CV.pdf'
					className='hero-btn-cv'
					title='Download Curriculum Vitae (PDF)'
				>
					<HiDownload className='btn-icon' />
					<span>Download CV</span>
				</a>
				<a
					href='#contact'
					className='hero-btn-contact'
				>
					<span>Get In Touch</span>
				</a>
			</div>

			<FloatingButton
				label={techNav.label}
				className={techNav.className}
				href={techNav.href}
			/>

			<div className='blur'></div>
			<div className='bottom-bar'>
				{socialLinks.map((link) => (
					<GlowLink
						key={link.label}
						href={link.href}
						color={link.glowColor}
						icon={<link.icon color={link.iconColor} />}
						aria-label={link.label.toLowerCase()}
					/>
				))}
			</div>
		</div>
	);
};
