import { motion } from "framer-motion";
import ImageSlider from "../ui/ImageSlider";
import { portfolioData } from "../../data/portfolioData";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-20">
      {/* Project Preview Slider */}
      <div className="relative z-10 w-full px-4 mb-16">
        <ImageSlider images={portfolioData.projectPreviews} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-yellow-400 bg-clip-text text-transparent">
            ETHAN WALKER
          </h1>
          <h2 className="text-2xl md:text-4xl mb-8 text-gray-300">
            Full-Stack Blockchain Developer
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            7+ years of experience building decentralized applications, smart contracts, 
            and blockchain-based solutions. Expertise in Ethereum, Solidity, and Web3 technologies.
          </p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#experience"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold hover:scale-105 transition-transform duration-300"
            >
              View Experience
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-colors duration-300"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}
