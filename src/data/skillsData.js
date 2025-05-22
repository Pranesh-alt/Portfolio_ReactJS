import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaFigma, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss } from 'react-icons/si';

const skillsData = [
  {
    title: 'React',
    icon: <FaReact className="w-8 h-8 text-white" />,
    level: 95,
    color: 'bg-blue-500'
  },
  {
    title: 'JavaScript',
    icon: <FaJs className="w-8 h-8 text-white" />,
    level: 90,
    color: 'bg-yellow-500'
  },
  {
    title: 'TypeScript',
    icon: <SiTypescript className="w-8 h-8 text-white" />,
    level: 85,
    color: 'bg-blue-600'
  },
  {
    title: 'HTML5',
    icon: <FaHtml5 className="w-8 h-8 text-white" />,
    level: 95,
    color: 'bg-orange-500'
  },
  {
    title: 'CSS3',
    icon: <FaCss3Alt className="w-8 h-8 text-white" />,
    level: 90,
    color: 'bg-blue-400'
  },
  {
    title: 'TailwindCSS',
    icon: <SiTailwindcss className="w-8 h-8 text-white" />,
    level: 92,
    color: 'bg-cyan-500'
  },
  {
    title: 'Figma',
    icon: <FaFigma className="w-8 h-8 text-white" />,
    level: 85,
    color: 'bg-purple-500'
  },
  {
    title: 'Node.js',
    icon: <FaNodeJs className="w-8 h-8 text-white" />,
    level: 80,
    color: 'bg-green-600'
  }
];

export default skillsData;