import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Building the future of decentralized technology
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line - centered and on top */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-400 to-purple-600 z-10"></div>

          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-12 md:w-1/2 ${
                index % 2 === 0 
                  ? 'md:mr-auto md:pr-8 md:text-right' // Even: left side
                  : 'md:ml-auto md:pl-8 md:text-left'  // Odd: right side
              }`}
            >
              {/* Timeline dot - positioned relative to timeline center */}
              <div className={`absolute w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center z-20 ${
                index % 2 === 0 
                  ? 'left-0 md:right-0 md:left-auto transform md:translate-x-1/2' // Even: right edge of left box
                  : 'left-0 md:left-0 transform md:-translate-x-1/2'  // Odd: left edge of right box
              }`}>
                <div className="w-4 h-4 bg-gray-900 rounded-full"></div>
              </div>

              <div className="ml-12 md:ml-0 bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-cyan-400 transition-colors duration-300">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-2">{exp.title}</h3>
                  <h4 className="text-xl text-purple-400 mb-2">{exp.company}</h4>
                  <p className="text-sm text-gray-400">{exp.period} • {exp.location}</p>
                </div>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-300 flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>

                {exp.technologies && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-700 text-cyan-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
