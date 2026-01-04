
import { Briefcase, Calendar, GraduationCap } from 'lucide-react';

const Experience = () => {
  const timeline = [
    {
      id: 1,
      role: 'Assistant Instructor',
      company: 'Ministry of Education',
      date: 'Jul 2024 - Present',
      description: 'Delivering technical education in TVET programs (Class IX-XII), developing curriculum, and facilitating practical IT training labs.',
      icon: <Briefcase className="h-5 w-5 text-white" />,
      type: 'work'
    },
    {
      id: 2,
      role: 'IT Manager',
      company: 'BG Sales and Services',
      date: 'Jan 2024 - Jun 2024',
      description: 'Managed IT infrastructure, oversaw network security, and implemented system upgrades to improve operational efficiency.',
      icon: <Briefcase className="h-5 w-5 text-white" />,
      type: 'work'
    },
    {
      id: 3,
      role: 'Software & Network Engineer',
      company: 'Freelance',
      date: 'May 2021 - Jun 2022',
      description: 'Provided custom network solutions, web development services, and hardware troubleshooting for diverse local clients.',
      icon: <Briefcase className="h-5 w-5 text-white" />,
      type: 'work'
    },
    {
      id: 4,
      role: 'Application Developer',
      company: 'Athang Private Limited',
      date: 'Jan 2018 - Jun 2020',
      description: 'Developed web applications using PHP and MySQL. Collaborated on open-source tools and client-specific software solutions.',
      icon: <Briefcase className="h-5 w-5 text-white" />,
      type: 'work'
    },
    {
      id: 5,
      role: 'Diploma in Computer Science',
      company: 'Jigme Namgyel Engineering College',
      date: '2015 - 2017',
      description: 'Foundation in computer science, networking principles, and software engineering methodologies.',
      icon: <GraduationCap className="h-5 w-5 text-white" />,
      type: 'edu'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            Professional Journey
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500 dark:text-slate-400">
            A timeline of my growth in the tech industry and education sector.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={item.id} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-start md:items-center`}>
                
                {/* Icon wrapper */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className={`w-8 h-8 rounded-full border-4 border-white dark:border-slate-950 shadow flex items-center justify-center ${item.type === 'edu' ? 'bg-indigo-500' : 'bg-primary-600'}`}>
                    {item.icon}
                  </div>
                </div>

                {/* Content spacer for mobile layout to push content right of line */}
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center justify-between mb-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                        {item.type === 'edu' ? 'Education' : 'Experience'}
                      </span>
                      <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                        <Calendar className="h-3 w-3 mr-1" />
                        {item.date}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{item.role}</h3>
                    <div className="text-primary-600 font-medium mb-2">{item.company}</div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Empty half for desktop layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;