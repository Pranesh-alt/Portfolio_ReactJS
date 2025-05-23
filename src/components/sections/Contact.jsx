import { useState } from 'react'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import { motion } from 'framer-motion'
import { FaPaperPlane, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus({
      submitted: false,
      submitting: true,
      info: { error: false, msg: null }
    })

    try {
      // In a real app, we would send this data to a server or service like EmailJS
      // For demo purposes, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: 'Message sent successfully!' }
      })
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: false, msg: null }
        })
      }, 5000)
      
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: 'Something went wrong. Please try again.' }
      })
    }
  }

  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-dark-900">
      <div className="container-custom">
        <SectionHeading
          title="Get In Touch"

        />
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">
              Contact Information
            </h3>
            
    
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center mr-4">
                  <FaEnvelope className="text-primary-500" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-dark-900 dark:text-white">Email</h4>
                  <a 
                    href="mailto:your.email@example.com"
                    className="text-dark-700 dark:text-dark-200 hover:text-primary-500 dark:hover:text-primary-500 transition-colors duration-300"
                  >
                    praneshtaker@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center mr-4">
                  <FaPhone className="text-primary-500" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-dark-900 dark:text-white">Phone</h4>
                  <a 
                    href="tel:+11234567890"
                    className="text-dark-700 dark:text-dark-200 hover:text-primary-500 dark:hover:text-primary-500 transition-colors duration-300"
                  >
                    6374942812
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center mr-4">
                  <FaMapMarkerAlt className="text-primary-500" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-dark-900 dark:text-white">Location</h4>
                  <p className="text-dark-700 dark:text-dark-200">
                    Palani
                  </p>
                </div>
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
            <form onSubmit={handleSubmit} className="bg-white dark:bg-dark-700 rounded-xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-dark-700 dark:text-dark-200 mb-2 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-500 bg-white dark:bg-dark-800 text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-dark-700 dark:text-dark-200 mb-2 font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-500 bg-white dark:bg-dark-800 text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-dark-700 dark:text-dark-200 mb-2 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-500 bg-white dark:bg-dark-800 text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-dark-700 dark:text-dark-200 mb-2 font-medium">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-500 bg-white dark:bg-dark-800 text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                ></textarea>
              </div>
              
              <div>
                <Button
                  type="submit"
                  variant="primary"
                  icon={<FaPaperPlane />}
                  iconPosition="right"
                  fullWidth={true}
                  isLoading={status.submitting}
                  disabled={status.submitting}
                >
                  {status.submitting ? 'Sending...' : 'Send Message'}
                </Button>
                
                {status.info.msg && (
                  <div 
                    className={`mt-4 p-3 rounded-lg ${
                      status.info.error 
                        ? 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400'
                        : 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400'
                    }`}
                  >
                    {status.info.msg}
                  </div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact