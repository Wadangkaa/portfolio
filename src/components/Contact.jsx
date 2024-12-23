import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
		<section
			id='contact'
			className='py-32 bg-gradient-to-br from-slate-900/50 to-black/50 backdrop-blur-sm text-white'>
			<div className='relative container mx-auto px-4'>
				<div className='absolute inset-0 overflow-hidden'>
					<div className='absolute -inset-[10px] opacity-30'>
						<div className='absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl'></div>
					</div>
				</div>

				<div className='relative max-w-6xl mx-auto'>
					<h2 className='text-4xl font-bold mb-4 text-center'>
						Get In <span className='text-blue-400'>Touch</span>
					</h2>
					<p className='text-slate-300 text-center mb-16 max-w-2xl mx-auto'>
						Feel free to reach out if you're looking for a developer, have a
						question, or just want to connect.
					</p>

					<div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
						<div className='animate-card group relative p-8 bg-white/5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300'>
							<div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.1),transparent_50%)]'></div>
							<div className='relative'>
								<h3 className='text-xl font-semibold mb-6 text-blue-400'>
									Contact Information
								</h3>
								<div className='space-y-4'>
									<div className='flex items-center'>
										<i className='fas fa-envelope text-blue-400 w-8'></i>
										<a
											href='mailto:DavidRai441@example.com'
											className='text-slate-300 hover:text-blue-400 transition-colors'>
											davidrai@gmail.com
										</a>
									</div>
									<div className='flex items-center'>
										<i className='fas fa-phone text-blue-400 w-8'></i>
										<a
											href='tel:+1234567890'
											className='text-slate-300 hover:text-blue-400 transition-colors'>
											+977 9823665699
										</a>
									</div>
								</div>

								<div className='mt-8'>
									<h3 className='text-xl font-semibold mb-6 text-blue-400'>
										Social Links
									</h3>
									<div className='flex space-x-6'>
										<a
											href='https://www.linkedin.com/in/david-chamling-rai-019ab426a'
											className='text-slate-300 hover:text-blue-400 transition-colors'>
											<i className='fab fa-linkedin text-2xl'></i>
										</a>
										<a
											href='https://github.com/wadangkaa'
											className='text-slate-300 hover:text-blue-400 transition-colors'>
											<i className='fab fa-github text-2xl'></i>
										</a>
										{/* <a
											href='#'
											className='text-slate-300 hover:text-blue-400 transition-colors'>
											<i className='fab fa-twitter text-2xl'></i>
										</a> */}
									</div>
								</div>
							</div>
						</div>

						<form
							onSubmit={handleSubmit}
							className='animate-card group relative p-8 bg-white/5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300'>
							<div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.1),transparent_50%)]'></div>
							<div className='relative space-y-6'>
								<div>
									<label
										htmlFor='name'
										className='block text-slate-300 mb-2'>
										Name
									</label>
									<input
										type='text'
										id='name'
										name='name'
										className='w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-slate-400'
										required
									/>
								</div>
								<div>
									<label
										htmlFor='email'
										className='block text-slate-300 mb-2'>
										Email
									</label>
									<input
										type='email'
										id='email'
										name='email'
										className='w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-slate-400'
										required
									/>
								</div>
								<div>
									<label
										htmlFor='message'
										className='block text-slate-300 mb-2'>
										Message
									</label>
									<textarea
										id='message'
										name='message'
										className='w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-slate-400'
										rows='5'
										required></textarea>
								</div>
								<button
									type='submit'
									className='w-full bg-blue-500/20 hover:bg-blue-500/30 text-white py-3 rounded-lg transition-colors'>
									Send Message
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
};

export default Contact; 