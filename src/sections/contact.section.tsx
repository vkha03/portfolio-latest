import { GlowLink } from '../components/glow-box-link';
import { SectionTitle } from '../components/section-title.component';
import { contact, socialLinks } from '../data/portfolio';

export const Contact = () => {
	return (
		<footer
			className='contact-section'
			id='contact'
		>
			<div className='contact-content'>
				<SectionTitle
					title={contact.section.title}
					subTitle={contact.section.subtitle}
				/>

				<div className='contact-body'>
					<h3 className='contact-headline'>{contact.headline}</h3>
					<p className='contact-desc'>{contact.description}</p>

					<a
						href={`mailto:${contact.email}`}
						className='contact-cta'
					>
						<span className='cta-glow' />
						<span className='cta-text'>✉ {contact.email}</span>
					</a>

					<div className='contact-socials'>
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

					<p className='contact-copyright'>{contact.copyright}</p>
				</div>
			</div>
		</footer>
	);
};
