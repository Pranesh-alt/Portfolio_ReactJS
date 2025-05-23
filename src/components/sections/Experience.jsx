import SectionHeading from '../ui/SectionHeading'
import ExperienceCard from '../ui/ExperienceCard'

const Experience = () => {
  const experiences = [
    {
      position: 'Quality Assurance Engineer',
      company: 'Texmo Blank',
      period: '2023 - 2024',
      description: [

        "Utilized advanced measuring equipment such as FARO gauges and CMMs",

        "Implemented lean manufacturing tools to improve efficiency"
      ]
    },
    {
      position: 'Web Developer Intern',
      company: 'Scalekit',
      period: '2025 - Present',
      description: [
        
      ]
    }
  ]

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          title="Work Experience"
  
        />
        
        <div className="max-w-4xl mx-auto mt-12">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              position={experience.position}
              company={experience.company}
              period={experience.period}
              description={experience.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience