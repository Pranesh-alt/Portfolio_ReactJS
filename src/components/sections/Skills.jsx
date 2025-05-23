import SectionHeading from '../ui/SectionHeading'
import SkillCard from '../ui/SkillCard'
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs } from 'react-icons/fa'
import { SiPython, SiFastapi, SiGo, SiExpress } from 'react-icons/si'
import { SiTypescript, SiTailwindcss } from 'react-icons/si'

const Skills = () => {
  const skills = [
    {
      title: 'Python',
      icon: <SiPython className="w-8 h-8 text-white" />,
      level: 85,
      color: 'bg-blue-500'
    },
    {
      title: 'JavaScript',
      icon: <FaJs className="w-8 h-8 text-white" />,
      level: 80,
      color: 'bg-yellow-500'
    },
    {
      title: 'FastAPI',
      icon: <SiFastapi className="w-8 h-8 text-white" />,
      level: 65,
      color: 'bg-green-500'
    },
    {
      title: 'HTML5',
      icon: <FaHtml5 className="w-8 h-8 text-white" />,
      level: 85,
      color: 'bg-orange-500'
    },
    {
      title: 'CSS3',
      icon: <FaCss3Alt className="w-8 h-8 text-white" />,
      level: 80,
      color: 'bg-blue-400'
    },
    {
      title: 'Go',
      icon: <SiGo className="w-8 h-8 text-white" />,
      level: 20,
      color: 'bg-cyan-500'
    },
    {
      title: 'Express JS',
      icon: <SiExpress className="w-8 h-8 text-white" />,
      level: 65,
      color: 'bg-purple-500'
    },
    {
      title: 'Node.js',
      icon: <FaNodeJs className="w-8 h-8 text-white" />,
      level: 60,
      color: 'bg-green-600'
    }
  ]

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          title="My Skills"
          subtitle="Technologies and tools I work with"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              title={skill.title}
              level={skill.level}
              color={skill.color}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills