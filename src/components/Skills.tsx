import React from 'react';
import { Code, Server, Wifi, PenTool, Database, Terminal } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Software Development',
      icon: <Code className="h-6 w-6 text-blue-500" />,
      skills: [
        { name: 'PHP', level: 90 },
        { name: 'MySQL', level: 85 },
        { name: 'Zend Framework', level: 80 },
        { name: 'JavaScript/React', level: 75 },
        { name: 'HTML5/CSS3', level: 95 }
      ]
    },
    {
      title: 'Networking & Hardware',
      icon: <Wifi className="h-6 w-6 text-green-500" />,
      skills: [
        { name: 'Network Administration', level: 90 },
        { name: 'Hardware Configuration', level: 95 },
        { name: 'Cisco Routing/Switching', level: 85 },
        { name: 'Troubleshooting', level: 95 }
      ]
    },
    {
      title: 'System Administration',
      icon: <Terminal className="h-6 w-6 text-purple-500" />,
      skills: [
        { name: 'Linux (Ubuntu/CentOS)', level: 85 },
        { name: 'Server Management', level: 80 },
        { name: 'Shell Scripting', level: 75 },
        { name: 'Security Protocols', level: 80 }
      ]
    },
    {
      title: 'Education & Tools',
      icon: <PenTool className="h-6 w-6 text-orange-500" />,
      skills: [
        { name: 'Curriculum Development', level: 90 },
        { name: 'Technical Training', level: 95 },
        { name: 'Open Source Tools', level: 90 },
        { name: 'Git/Version Control', level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            Technical Expertise
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500 dark:text-slate-400">
            A comprehensive matrix of my technical capabilities and educational competencies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg shadow-sm">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                      <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                      <div 
                        className="bg-primary-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;