import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project, projectsData } from '../lib/projects';

interface Category {
  id: 'all' | 'webapp' | 'network' | 'education';
  label: string;
}

const categories: Category[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'webapp', label: 'Web Apps' },
  { id: 'network', label: 'Networking' },
  { id: 'education', label: 'Educational Tools' }
];

const Projects = () => {
  const [filter, setFilter] = useState<Category['id']>('all');

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500 dark:text-slate-400">
            Showcasing innovative tech solutions and open-source contributions.
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category.id
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-slate-100 dark:border-slate-800 group"
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a 
                    href={project.links.github} 
                    className="p-2 bg-white rounded-full hover:bg-slate-200 transition-colors" 
                    title="View Code"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5 text-slate-900" />
                  </a>
                  <a 
                    href={project.links.demo} 
                    className="p-2 bg-white rounded-full hover:bg-slate-200 transition-colors" 
                    title="Live Demo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-5 w-5 text-slate-900" />
                  </a>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium rounded"
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
    </section>
  );
};

export default Projects;