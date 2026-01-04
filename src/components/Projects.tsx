import React, { useState } from 'react';
import { ExternalLink, Github, Layers } from 'lucide-react';
import { projectWeb, projectNetwork, projectEdu } from '../images';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'School Management System',
      category: 'webapp',
      image: projectWeb,
      tech: ['PHP', 'MySQL', 'Bootstrap'],
      description: 'A comprehensive management portal for student records, attendance tracking, and grade reporting designed for Bhutanese schools.',
      links: { demo: '#', github: '#' }
    },
    {
      id: 2,
      title: 'Enterprise Network Architecture',
      category: 'network',
      image: projectNetwork,
      tech: ['Cisco', 'VLAN', 'Firewall'],
      description: 'Designed and implemented a secure multi-layered network infrastructure for a corporate client, enhancing security and throughput.',
      links: { demo: '#', github: '#' }
    },
    {
      id: 3,
      title: 'Interactive Learning Platform',
      category: 'education',
      image: projectEdu,
      tech: ['React', 'Node.js', 'MongoDB'],
      description: 'An open-source tool for conducting real-time quizzes and sharing resources during IT training sessions.',
      links: { demo: '#', github: '#' }
    },
    {
      id: 4,
      title: 'Inventory Tracking System',
      category: 'webapp',
      image: projectWeb,
      tech: ['Zend Framework', 'jQuery', 'MySQL'],
      description: 'Custom inventory solution for retail tracking stock levels, sales reporting, and automated reordering alerts.',
      links: { demo: '#', github: '#' }
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'webapp', label: 'Web Apps' },
    { id: 'network', label: 'Networking' },
    { id: 'education', label: 'Educational Tools' }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500 dark:text-slate-400">
            Showcasing innovative tech solutions and open-source contributions.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === cat.id
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-slate-100 dark:border-slate-800 group">
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href={project.links.github} className="p-2 bg-white rounded-full hover:bg-slate-200 transition-colors" title="View Code">
                    <Github className="h-5 w-5 text-slate-900" />
                  </a>
                  <a href={project.links.demo} className="p-2 bg-white rounded-full hover:bg-slate-200 transition-colors" title="Live Demo">
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
                    <span key={tech} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium rounded">
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