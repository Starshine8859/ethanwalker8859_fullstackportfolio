import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Innovative blockchain solutions transforming industries
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700 hover:border-yellow-400 transition-all duration-300 hover:scale-105"
            >
              {/* Project Icon/Visual */}
              <div className="h-48 bg-gradient-to-br from-yellow-400/20 to-purple-600/20 flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-900">{project.icon}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-yellow-400 mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="space-y-2 mb-4">
                  {project.features.map((feature, i) => (
                    <div key={i} className="text-sm text-gray-400 flex items-center">
                      <span className="text-yellow-400 mr-2">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-700 text-yellow-400 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
                  >
                    Learn More →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
