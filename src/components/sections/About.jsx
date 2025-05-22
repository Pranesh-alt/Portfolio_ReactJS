import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import { FaDownload } from 'react-icons/fa'

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-dark-900">
      <div className="container-custom">
        <SectionHeading
          title="About Me"
          subtitle="Get to know more about me and my background"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-tr from-primary-500 to-secondary-500 opacity-20 blur-lg"></div>
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/comics-tv-8e695.appspot.com/o/Images%2FHome%20Page%2FWhatsApp%20Image%202025-05-22%20at%204.50.37%20PM.jpeg?alt=media&token=7cede0a2-0da4-4379-bc0e-b846226d9443"
                  alt="Your Name working"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">
              Hi, I'm <span className="text-primary-500">Pranesh</span>
            </h3>
            
            <p className="text-body text-dark-700 dark:text-dark-200 mb-4">
            I'm a passionate backend developer building reliable, scalable systems that power seamless digital experiences.
            My journey into backend development began in college, where I discovered a deep interest in solving complex problems through clean architecture, data modeling, and efficient server-side logic.
            </p>
            
          
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="text-lg font-bold text-dark-900 dark:text-white mb-3">Education</h4>
                <ul className="space-y-2">
                  <li className="flex">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 mr-2"></span>
                    <div>
                      <p className="font-medium text-dark-800 dark:text-dark-100">Diploma in Mechanical Engineering</p>
                      <p className="text-sm text-dark-500 dark:text-dark-300">PSG Polytechnic College, 2019-2022</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 mr-2"></span>
                    <div>
                      <p className="font-medium text-dark-800 dark:text-dark-100">Web Developing Certification</p>
                      <p className="text-sm text-dark-500 dark:text-dark-300">Freshworks Software Academy, 2024-2025</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-dark-900 dark:text-white mb-3">Interests</h4>
                <ul className="space-y-2">
                  <li className="flex">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 mr-2"></span>
                    <div>
                      <p className="font-medium text-dark-800 dark:text-dark-100">API Design</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 mr-2"></span>
                    <div>
                      <p className="font-medium text-dark-800 dark:text-dark-100">Database Optimization</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 mr-2"></span>
                    <div>
                      <p className="font-medium text-dark-800 dark:text-dark-100">Security & Authentication</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <Button 
              variant="primary" 
              icon={<FaDownload />}
              iconPosition="left"
            >
              Download Resume
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About