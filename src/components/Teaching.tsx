
import { Book, Users, Lightbulb, MonitorPlay } from 'lucide-react';
import { teachingImg } from '../images';

const Teaching = () => {
  return (
    <section id="teaching" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-semibold mb-6">
              <Book className="h-4 w-4" />
              Teaching Philosophy
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight sm:text-4xl mb-6">
              Empowering Future <br/>
              <span className="text-indigo-600">IT Professionals</span>
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <Users className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-slate-900 dark:text-white">TVET Program Leadership</h3>
                  <p className="mt-2 text-base text-slate-500 dark:text-slate-400">
                    Guiding students from Class IX to XII through rigorous technical vocational education, focusing on employability and industry readiness.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <MonitorPlay className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-slate-900 dark:text-white">Practical Skill Development</h3>
                  <p className="mt-2 text-base text-slate-500 dark:text-slate-400">
                    My classroom is a lab. We move beyond theory to configure real networks, debug actual code, and deploy live servers.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <Lightbulb className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-slate-900 dark:text-white">Industry Connection</h3>
                  <p className="mt-2 text-base text-slate-500 dark:text-slate-400">
                    Leveraging my experience as a Software & Network Engineer to teach current industry standards, not just textbook concepts.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
               <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-slate-600 dark:text-slate-300">
                 "The goal of education is not just to know, but to do. I strive to make every lesson immediately applicable to the tech landscape."
               </blockquote>
            </div>
          </div>

          <div className="order-1 lg:order-2 mb-12 lg:mb-0">
             <div className="relative rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-0 bg-indigo-600/20 mix-blend-multiply"></div>
                <img 
                  src={teachingImg} 
                  alt="Pema teaching in classroom" 
                  className="w-full h-full object-cover"
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teaching;