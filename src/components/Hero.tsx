import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { heroBg } from '../images';

const Hero = () => {
  return (
    <div className="relative bg-white dark:bg-slate-950 pt-16 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Network Engineering Background" 
          className="w-full h-full object-cover opacity-10 dark:opacity-20" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white dark:from-slate-950/80 dark:via-slate-950/50 dark:to-slate-950"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-8 lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300 mb-4">
              <span className="flex h-2 w-2 rounded-full bg-primary-600 mr-2 animate-pulse"></span>
              Available for Collaboration
            </div>
            <h1>
              <span className="block text-sm font-semibold tracking-wide text-slate-500 dark:text-slate-400 uppercase sm:text-base lg:text-sm xl:text-base">
                Hi, I'm Pema Dorji Sherpa
              </span>
              <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl text-slate-900 dark:text-white">
                <span className="block">Software & Network</span>
                <span className="block text-primary-600">Engineer & Educator</span>
              </span>
            </h1>
            <p className="mt-3 text-base text-slate-500 dark:text-slate-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Building robust technical solutions while empowering the next generation of IT professionals. Bridging the gap between complex infrastructure and practical education.
            </p>
            
            <div className="mt-5 flex flex-wrap gap-2 text-sm font-medium text-slate-600 dark:text-slate-400">
              <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded">PHP & MySQL</span>
              <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded">Linux Admin</span>
              <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded">Networking</span>
              <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded">Zend Framework</span>
            </div>

            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#projects" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg transition-colors shadow-lg shadow-primary-500/20">
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 dark:border-slate-700 text-base font-medium rounded-md text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 md:py-4 md:text-lg transition-colors">
                  Contact Me
                </a>
              </div>
              
              <div className="mt-8 flex items-center gap-6 sm:justify-center lg:justify-start text-slate-400">
                <a href="#" className="hover:text-slate-600 dark:hover:text-slate-200 transition-colors"><Github className="h-6 w-6" /></a>
                <a href="#" className="hover:text-slate-600 dark:hover:text-slate-200 transition-colors"><Linkedin className="h-6 w-6" /></a>
                <a href="mailto:pemarekdendorjee@gmail.com" className="hover:text-slate-600 dark:hover:text-slate-200 transition-colors"><Mail className="h-6 w-6" /></a>
                <button className="flex items-center text-sm font-medium hover:text-primary-500 transition-colors">
                  <Download className="h-4 w-4 mr-1" /> Download Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;