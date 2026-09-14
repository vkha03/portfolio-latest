import { SectionTitle } from '../components/section-title.component';
import { projects } from '../data/portfolio';

export const Projects = () => {
	return (
		<section
			className='projects-section container'
			id='projects'
		>
			<div>
				<SectionTitle
					title='Case'
					subTitle='STUDY'
				/>
			</div>
			<div className='projects-list'>
				{projects.map((project, idx) => (
					<div
						className='project-card'
						key={idx}
					>
						{/* Screenshot with browser frame */}
						<div className='project-visual'>
							<div className='browser-frame'>
								<div className='browser-dots'>
									<span className='dot red' />
									<span className='dot yellow' />
									<span className='dot green' />
								</div>
								<div className='browser-bar'>
									{project.title.toLowerCase()}.app
								</div>
							</div>
							<div className='project-image-wrapper'>
								<img
									src={project.image}
									alt={project.title}
									loading='lazy'
								/>
							</div>
						</div>

						{/* Project Info */}
						<div className='project-info'>
							<h3 className='project-title'>{project.title}</h3>
							<p className='project-desc'>{project.description}</p>

							<ul className='project-highlights'>
								{project.highlights.map((h, i) => (
									<li key={i}>{h}</li>
								))}
							</ul>

							<div className='project-tech'>
								{project.techStack.map((tech) => (
									<span
										className='tech-tag'
										key={tech}
									>
										{tech}
									</span>
								))}
							</div>

							<div className='project-links'>
								{project.repoUrl && (
									<a
										href={project.repoUrl}
										target='_blank'
										rel='noopener noreferrer'
										className='project-link'
									>
										↗ Repository
									</a>
								)}
								{project.liveUrl && (
									<a
										href={project.liveUrl}
										target='_blank'
										rel='noopener noreferrer'
										className='project-link live'
									>
										◉ Live Demo
									</a>
								)}
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
