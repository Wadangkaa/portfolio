import { useEffect } from 'react';
import { useScrollToSection } from '../hooks/useScrollToSection';

const Home = () => {
  const scrollToSection = useScrollToSection();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = document.getElementsByClassName('animate-card');
      for (const card of cards) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
		<div
			className='min-h-screen bg-gradient-to-br from-slate-900/50 to-black/50 backdrop-blur-sm text-white'
			id='home'>
			<div className='absolute inset-0 overflow-hidden'>
				<div className='absolute -inset-[10px] opacity-50'>
					<div className='absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl animate-tilt'></div>
				</div>
			</div>

			<div className='relative container mx-auto px-4 py-32'>
				<div className='max-w-4xl mx-auto text-center'>
					<div className='space-y-8'>
						<div className='space-y-4'>
							<h2 className='text-xl text-blue-400 font-medium'>
								<span className='inline-block animate-wave'>👋</span> Hello, I'm
							</h2>
							<h1 className='text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 leading-tight md:leading-normal pb-2'>
								<span className='leading-relaxed py-2 inline-block whitespace-nowrap'>
									David Chamling Rai
								</span>
							</h1>
							<h3 className='text-2xl text-slate-300'>Full Stack Developer</h3>
						</div>

						<p className='text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto'>
							Crafting digital experiences with modern web technologies.
							Specialized in building scalable applications with React, Vue.js,
							and Laravel.
						</p>

						<div className='flex flex-wrap gap-4 justify-center'>
							<button
								onClick={() => scrollToSection('projects')}
								className='animate-card group relative px-8 py-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300'>
								<div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.15),transparent_50%)]'></div>
								<span className='relative'>View My Work</span>
							</button>
							<button
								onClick={() => scrollToSection('contact')}
								className='animate-card group relative px-8 py-4 bg-blue-500/20 rounded-xl backdrop-blur-sm hover:bg-blue-500/30 transition-all duration-300'>
								<div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.15),transparent_50%)]'></div>
								<span className='relative'>Contact Me</span>
							</button>
						</div>

						<div className='flex gap-6 text-slate-300 justify-center'>
							<a
								href='https://github.com/wadangkaa'
								target='_blank'
								rel='noopener noreferrer'
								className='text-3xl hover:text-blue-400 transition-colors'>
								<i className='fab fa-github'></i>
							</a>
							<a
								href='https://www.linkedin.com/in/david-chamling-rai-019ab426a'
								target='_blank'
								rel='noopener noreferrer'
								className='text-3xl hover:text-blue-400 transition-colors'>
								<i className='fab fa-linkedin'></i>
							</a>
							<a
								href='mailto:davidrai441@gmail.com'
								className='text-3xl hover:text-blue-400 transition-colors'>
								<i className='fas fa-envelope'></i>
							</a>
						</div>
					</div>

					<div className='mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8'>
						<div className='animate-card group relative p-6 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300'>
							<div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.15),transparent_50%)]'></div>
							<div className='relative space-y-3'>
								<i className='fab fa-react text-4xl text-blue-400 transition-transform group-hover:scale-110 duration-300'></i>
								<h3 className='font-semibold'>React</h3>
								<p className='text-sm text-slate-300'>Modern UI Development</p>
							</div>
						</div>
						<div className='animate-card group relative p-6 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300'>
							<div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.15),transparent_50%)]'></div>
							<div className='relative space-y-3'>
								<i className='fab fa-vuejs text-4xl text-green-400 transition-transform group-hover:scale-110 duration-300'></i>
								<h3 className='font-semibold'>Vue.js</h3>
								<p className='text-sm text-slate-300'>Progressive Framework</p>
							</div>
						</div>
						<div className='animate-card group relative p-6 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300'>
							<div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.15),transparent_50%)]'></div>
							<div className='relative space-y-3'>
								<i className='fab fa-laravel text-4xl text-red-400 transition-transform group-hover:scale-110 duration-300'></i>
								<h3 className='font-semibold'>Laravel</h3>
								<p className='text-sm text-slate-300'>Backend Development</p>
							</div>
						</div>
						<div className='animate-card group relative p-6 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300'>
							<div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.15),transparent_50%)]'></div>
							<div className='relative space-y-3'>
								<i className='fas fa-database text-4xl text-yellow-400 transition-transform group-hover:scale-110 duration-300'></i>
								<h3 className='font-semibold'>Database</h3>
								<p className='text-sm text-slate-300'>Data Management</p>
							</div>
						</div>
					</div>
				</div>
				<div className='absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block'>
					<button
						onClick={() => scrollToSection('about')}
						className='text-slate-300 hover:text-blue-400 transition-colors'>
						<i className='fas fa-chevron-down text-2xl'></i>
					</button>
				</div>
			</div>
		</div>
	)
};

export default Home; 