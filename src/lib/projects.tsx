import { projectWeb, projectNetwork, projectEdu } from '../images';

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