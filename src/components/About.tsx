
import { profileImg } from '../images';
import { Award, BookOpen, Cpu, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative mb-12 lg:mb-0">
            <div className="aspect-w-3 aspect-h-4 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-900/10 dark:ring-white/10">
              <img 
                src={profileImg} 
                alt="Pema Dorji Sherpa" 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Experience</p>
                  <p className="text-lg font-bold text-slate-900 dark:text-white">6+ Years</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight sm:text-4xl">
              Bridging Technology & <span className="text-primary-600">Education</span>
            </h2>
            <div className="mt-6 prose prose-slate dark:prose-invert">
              <p className="text-lg text-slate-600 dark:text-slate-300">
                I am a Software & Network Engineer based in Bhutan with a dual passion for building robust technical infrastructure and empowering the next generation of IT professionals.
              </p>
              <p className="mt-4 text-slate-600 dark:text-slate-300">
                My journey began with a Diploma in Computer Science from Jigme Namgyel Engineering College, which laid the foundation for my diverse career. Whether I'm configuring complex network systems, developing web applications, or teaching practical IT skills to students, my goal remains the same: <strong>to create impact through technology.</strong>
              </p>
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-slate-900 dark:text-white font-semibold">
                    <BookOpen className="h-5 w-5 text-primary-500" />
                    Teaching Philosophy
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    "Empowering students with practical IT skills that bridge theory and real-world application."
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-slate-900 dark:text-white font-semibold">
                    <Cpu className="h-5 w-5 text-primary-500" />
                    Technical Focus
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Full-stack development, Network Administration, and Open Source technologies.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                <MapPin className="h-4 w-4" />
                Based in Rangjung / Trashigang, Bhutan
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;