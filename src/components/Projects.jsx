import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const Projects = () => {
  const revealRef = useRevealOnScroll();

  const projects = [
    {
      title: "Project One",
      description: "A full-stack web application built with React and Laravel, featuring real-time updates and advanced user authentication.",
      image: "/project1.jpg",
      tech: ["React", "Laravel", "MySQL", "WebSocket"],
      liveLink: "https://project1.com",
      githubLink: "https://github.com/your-username/project1",
      featured: true
    },
    {
      title: "Project Two",
      description: "Vue.js-based dashboard with real-time data visualization and analytics, integrated with multiple data sources.",
      image: "/project2.jpg",
      tech: ["Vue.js", "Node.js", "Socket.io", "Chart.js"],
      liveLink: "https://project2.com",
      githubLink: "https://github.com/your-username/project2",
      featured: true
    },
    // Add more projects
  ];

  return (
    <section id="projects" className="py-32 bg-gradient-to-br from-slate-900/50 to-black/50 backdrop-blur-sm text-white">
      <div ref={revealRef} className="reveal">
        <div className="relative container mx-auto px-4">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -inset-[10px] opacity-30">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl"></div>
            </div>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-center pt-8">
              Featured <span className="text-purple-400">Projects</span>
            </h2>
            <p className="text-slate-300 text-center mb-20 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience
              in full-stack development.
            </p>

            <div className="space-y-20 md:space-y-32">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className={`flex flex-col ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-8 items-center`}
                >
                  {/* Project Image */}
                  <div className="w-full lg:w-3/5">
                    <div className="animate-card group relative rounded-xl overflow-hidden">
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.1),transparent_50%)]"></div>
                      <div className="relative aspect-[16/9] bg-white/5 backdrop-blur-sm overflow-hidden">
                        {project.image ? (
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20"></div>
                        )}
                        {/* Overlay with buttons */}
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 flex-wrap p-4">
                          <a 
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
                          >
                            Live Demo
                          </a>
                          <a 
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
                          >
                            View Code
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="w-full lg:w-2/5">
                    <h3 className="text-2xl font-bold mb-4 text-purple-400">{project.title}</h3>
                    <p className="text-slate-300 mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-white/10 rounded-full text-sm text-slate-300"
                        >
                          {tech}
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
  );
};

export default Projects; 