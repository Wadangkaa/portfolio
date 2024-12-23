import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

const Projects = () => {
	const revealRef = useRevealOnScroll()

	const projects = [
		{
			title: 'Service Eye ERP',
			description:
				'A comprehensive multi-tenant ERP system with integrated modules for CRM, Inventory Management, HR, Digital Marketing, and Advanced Reporting. Built with Laravel 10 and Vue 3 Composition API.',
			image: '/service-eye.jpg',
			tech: ['Laravel 10', 'Vue 3', 'MySQL', 'RESTful API', 'Charts.js'],
			featured: true,
			type: 'Professional',
			contribution: [
				'Architected and developed core ERP modules including CRM, Inventory, HR, and Reporting',
				'Implemented dynamic reporting system with customizable filters and data visualization',
				'Built digital marketing module with campaign tracking and analytics',
				'Designed and implemented multi-tenant architecture for enterprise clients',
				'Integrated third-party services and APIs for enhanced functionality',
			],
		},
		{
			title: 'Business X E-commerce',
			description:
				'A full-featured e-commerce platform with advanced user authentication, product management, and secure payment processing.',
			image: '/business-x.jpg',
			tech: ['Laravel', 'MySQL', 'Payment Gateway', 'API Integration'],
			featured: true,
			type: 'Professional',
			contribution: [
				'Built robust backend infrastructure',
				'Implemented secure payment processing',
				'Developed inventory management system',
			],
		},
		{
			title: 'Personal Portfolio',
			description:
				'A modern, responsive portfolio website showcasing my work and skills. Built with React, Tailwind CSS, and Shadcn/UI components, featuring smooth animations and interactive elements.',
			image: '/portfolio.jpg',
			tech: ['React', 'Tailwind CSS', 'Shadcn/UI', 'JavaScript'],
			liveLink: 'https://your-portfolio.com',
			githubLink: 'https://github.com/wadangkaa/portfolio',
			featured: true,
			type: 'Personal',
		},
	]

	return (
		<section
			id='projects'
			className='py-32 bg-gradient-to-br from-slate-900/50 to-black/50 backdrop-blur-sm text-white'>
			<div
				ref={revealRef}
				className='reveal'>
				<div className='relative container mx-auto px-4'>
					{/* Background Elements */}
					<div className='absolute inset-0 overflow-hidden'>
						<div className='absolute -inset-[10px] opacity-30'>
							<div className='absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl'></div>
						</div>
					</div>

					<div className='relative max-w-6xl mx-auto'>
						<h2 className='text-4xl font-bold mb-6 text-center pt-8'>
							Featured <span className='text-purple-400'>Projects</span>
						</h2>
						<p className='text-slate-300 text-center mb-20 max-w-3xl mx-auto'>
							Here are some of my recent projects that showcase my skills and
							experience in full-stack development.
						</p>

						<div className='space-y-20 md:space-y-32'>
							{projects.map((project, index) => (
								<div
									key={index}
									className={`flex flex-col ${
										index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
									} gap-8 items-center`}>
									{/* Project Image */}
									<div className='w-full lg:w-3/5'>
										<div className='animate-card group relative rounded-xl overflow-hidden'>
											<div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.1),transparent_50%)]'></div>
											<div className='relative aspect-[16/9] bg-white/5 backdrop-blur-sm overflow-hidden'>
												{project.image ? (
													<img
														src={project.image}
														alt={project.title}
														className='w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500'
													/>
												) : (
													<div className='absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20'></div>
												)}
												{/* Overlay with buttons */}
												<div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 flex-wrap p-4'>
													<a
														href={project.liveLink}
														target='_blank'
														rel='noopener noreferrer'
														className='px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors'>
														Visit
													</a>
													{project.type === 'Personal' && (
														<a
															href={project.githubLink}
															target='_blank'
															rel='noopener noreferrer'
															className='px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors'>
															View Code
														</a>
													)}
												</div>
											</div>
										</div>
									</div>

									{/* Project Info */}
									<div className='w-full lg:w-2/5'>
										<div className='flex items-center gap-3 mb-4'>
											<h3 className='text-2xl font-bold text-purple-400'>
												{project.title}
											</h3>
											<span
												className={`px-3 py-1 rounded-full text-sm ${
													project.type === 'Professional'
														? 'bg-blue-500/20 text-blue-300'
														: 'bg-purple-500/20 text-purple-300'
												}`}>
												{project.type}
											</span>
										</div>
										<p className='text-slate-300 mb-6'>{project.description}</p>

										{/* Show contribution points for professional projects */}
										{project.contribution && (
											<div className='mb-6'>
												<h4 className='text-sm font-semibold text-purple-400 mb-2'>
													Key Contributions:
												</h4>
												<ul className='space-y-2'>
													{project.contribution.map((point, i) => (
														<li
															key={i}
															className='flex items-start text-sm'>
															<span className='text-purple-400 mr-2'>▹</span>
															<span className='text-slate-300'>{point}</span>
														</li>
													))}
												</ul>
											</div>
										)}

										<div className='flex flex-wrap gap-2 mb-6'>
											{project.tech.map((tech, i) => (
												<span
													key={i}
													className='px-3 py-1 bg-white/10 rounded-full text-sm text-slate-300'>
													{tech}
												</span>
											))}
										</div>

										<div className='flex gap-4'>
											{project.liveLink && (
												<a
													href={project.liveLink}
													target='_blank'
													rel='noopener noreferrer'
													className='text-slate-300 hover:text-purple-400 transition-colors'>
													<i className='fas fa-external-link-alt mr-2'></i>
													Visit
												</a>
											)}
											{project.type === 'Personal' && project.githubLink && (
												<a
													href={project.githubLink}
													target='_blank'
													rel='noopener noreferrer'
													className='text-slate-300 hover:text-purple-400 transition-colors'>
													<i className='fab fa-github mr-2'></i>
													View Code
												</a>
											)}
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Projects
