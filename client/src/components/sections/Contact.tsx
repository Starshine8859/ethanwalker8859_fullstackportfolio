import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolioData";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
            Let's Build the Future
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Ready to revolutionize your business with blockchain technology? 
            Let's collaborate on your next decentralized solution.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto mb-12"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-green-400 mb-4 text-center">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center">
                <span className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mr-3">
                  📧
                </span>
                <span className="text-gray-300">{portfolioData.contact.email}</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mr-3">
                  📍
                </span>
                <span className="text-gray-300">{portfolioData.contact.location}</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={`mailto:${portfolioData.contact.email}`}
            className="px-8 py-3 bg-gradient-to-r from-green-500 to-cyan-600 rounded-lg font-semibold hover:scale-105 transition-transform duration-300"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3 border-2 border-green-400 rounded-lg font-semibold hover:bg-green-400 hover:text-gray-900 transition-colors duration-300"
          >
            View Projects
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gray-700"
        >
          <p className="text-gray-500 text-sm">
            © 2024 Ethan Walker. Building decentralized solutions for tomorrow.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
