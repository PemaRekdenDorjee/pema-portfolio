import { rmsWeb, pfsenseNetwork, projectEdu, portfolioWeb, esakorWeb } from '../images';

export interface Project {
  id: number;
  title: string;
  category: 'webapp' | 'network' | 'education';
  image: string;
  tech: string[];
  description: string;
  links: {
    demo: string;
    github: string;
  };
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'School Management System',
    category: 'webapp',
    image: rmsWeb,
    tech: ['NextJS', 'MySQL', 'Tailwind CSS'],
    description: 'A comprehensive management portal for student records, attendance tracking, and grade reporting designed for Bhutanese schools.',
    links: { demo: '#', github: 'https://github.com/PemaRekdenDorjee/rms' }
  },
  {
    id: 2,
    title: 'Enterprise Firewall Setup',
    category: 'network',
    image: pfsenseNetwork,
    tech: ['pfsense', 'VPN'],
    description: 'Designed and implemented a secure firewall and VPN server for a TVET students, enhancing security and throughput.',
    links: { demo: '#', github: '#' }
  },
  {
    id: 3,
    title: 'Interactive Learning Platform',
    category: 'education',
    image: projectEdu,
    tech: [],
    description: 'An open-source tool for conducting real-time quizzes and sharing resources during IT training sessions.',
    links: { demo: '#', github: '#' }
  },
  {
    id: 4,
    title: 'Personal Portfolio Website',
    category: 'webapp',
    image: portfolioWeb,
    tech: ['React JS', 'Vite', 'Tailwind CSS'],
    description: 'This is my personal portfolio website, built to showcase my projects, skills, and experience. If you like this website, feel free to copy my code and use it, and don’t forget to star it!',
    links: { demo: 'https://pema-portfolio-orpin.vercel.app', github: 'https://github.com/PemaRekdenDorjee/pema-portfolio' }
},
{
    id: 5,
    title: 'eSakor Portal',
    category: 'webapp',
    image: esakorWeb,
    tech: ['PHP', 'Zend Framework 2', 'CSS', 'JavaScript'],
    description: 'The eSakor Portal is Bhutan\'s unified platform for end-to-end land services. It consolidates Land Transactions (Rural & Urban), Mortgage Registration, and Grievance Redressal into a single system. The platform ensures data integrity by connecting to all legacy NLCS databases (NSC/NCRP Thram, Kappa Scan, Sathram) and features a live Web GIS Map for spatial clarity. It automatically enforces the 25-Acre Land Ceiling policy and integrates with the Census database for accurate citizen data.',
    links: { demo: 'https://rural.nlcs.gov.bt/auth/landing', github: '#' }
}
];