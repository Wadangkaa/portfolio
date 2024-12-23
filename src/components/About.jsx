const About = () => {
	const experiences = [
		{
			company: 'Service Eye',
			position: 'Full Stack Developer & Team Lead',
			period: 'Feb, 2024 - Present',
			description: [
				'Leading a team of 5 developers and managing enterprise-level projects',
				// "Implementing CI/CD pipelines and automated testing, reducing deployment time by 60%",
				'Architecting and developing multi-tenant ERP system with CRM, Inventory, HR, Marketing and Reporting modules using Laravel 10 & Vue 3',
				'Built complex reporting system with dynamic filters, data visualization, and export functionality',
				'Mentoring junior developers and establishing coding standards',
				'Implemented role-based access control and multi-tenant architecture for enterprise clients',
			],
		},
		{
			company: 'EEE Innovation Ghar',
			position: 'Backend Developer',
			period: 'Jun, 2023 - Nov, 2023',
			description: [
				'Integrated payment gateways (Esewa, Khalti) and SMS services with 99.9% uptime and error handling',
				'Built Business X e-commerce platform',
				'Developed comprehensive REST API for Hello Sawari - a logistics platform enabling package delivery, vehicle rentals and moving services',
				'Reduced API response times by 40% through query optimization and caching strategies',
				'Provided technical mentorship and conducted thorough code reviews to ensure code quality',
			],
		},
	]

	const skills = [
		{
			name: 'Frontend',
			items: ['React', 'Vue.js', 'Tailwind CSS', 'Shadcn/UI', 'JavaScript'],
		},
		{ name: 'Backend', items: ['Laravel', 'Node.js', 'PHP', 'RESTful APIs'] },
		{ name: 'Database', items: ['MySQL'] },
		{ name: 'Tools', items: [
			'Git',
			'GitHub',
			'VS Code',
			'Postman',
			'Trello'
		] },
	]

	return (
		<section
			id='about'
			className='py-32 bg-gradient-to-br from-black/50 to-slate-900/50 backdrop-blur-sm text-white'>
			<div className='relative container mx-auto px-4'>
				{/* Background Elements */}
				<div className='absolute inset-0 overflow-hidden'>
					<div className='absolute -inset-[10px] opacity-30'>
						<div className='absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl'></div>
					</div>
				</div>

				<div className='relative max-w-6xl mx-auto'>
					<h2 className='text-4xl font-bold mb-6 text-center pt-8'>
						About <span className='text-blue-400'>Me</span>
					</h2>
					<p className='text-slate-300 text-center mb-20 max-w-3xl mx-auto'>
						A passionate Full Stack Developer with experience in building modern
						web applications and a strong focus on user experience and scalable
						architecture.
					</p>

					{/* Experience Section */}
					<div className='mb-20'>
						<h3 className='text-2xl font-semibold mb-8 text-center'>
							Experience
						</h3>
						<div className='space-y-8'>
							{experiences.map((exp, index) => (
								<div
									key={index}
									className='animate-card group relative p-6 md:p-8 bg-white/5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 border border-white/5'>
									<div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.1),transparent_50%)]'></div>
									<div className='relative'>
										<div className='flex flex-wrap justify-between items-start mb-6'>
											<div>
												<h4 className='text-xl font-semibold text-blue-400'>
													{exp.company}
												</h4>
												<p className='text-slate-300'>{exp.position}</p>
											</div>
											<span className='text-slate-400 bg-white/5 px-3 py-1 rounded-full text-sm mt-2 md:mt-0'>
												{exp.period}
											</span>
										</div>
										<ul className='space-y-2'>
											{exp.description.map((item, i) => (
												<li
													key={i}
													className='flex items-start'>
													<span className='text-blue-400 mr-2'>▹</span>
													<span className='text-slate-300'>{item}</span>
												</li>
											))}
										</ul>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* CV Download */}
					<div className="text-center mb-20">
						<a
							href="/cv.md"
							download="David_Chamling_Rai_CV.md"
							className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500/20 rounded-xl backdrop-blur-sm hover:bg-blue-500/30 transition-all duration-300"
						>
							<i className="fas fa-download"></i>
							Download Full Resume
						</a>
					</div>

					{/* Skills Section */}
					<div>
						<h3 className='text-2xl font-semibold mb-8 text-center'>Skills</h3>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
							{skills.map((category, index) => (
								<div
									key={index}
									className='animate-card group relative p-6 bg-white/5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300'>
									<div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.1),transparent_50%)]'></div>
									<div className='relative'>
										<h4 className='text-lg font-semibold mb-4 text-blue-400'>
											{category.name}
										</h4>
										<div className='flex flex-wrap gap-2'>
											{category.items.map((skill, i) => (
												<span
													key={i}
													className='px-3 py-1 bg-white/10 rounded-full text-sm text-slate-300'>
													{skill}
												</span>
											))}
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

export default About
