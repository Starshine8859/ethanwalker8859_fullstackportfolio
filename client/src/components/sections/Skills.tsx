import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect } from "react";
import { motion } from "framer-motion";
import BlockchainCube from "../3d/BlockchainCube";
import ErrorBoundary from "../ui/ErrorBoundary";
import { portfolioData } from "../../data/portfolioData";
import { isWebGLSupported } from "../../utils/webglUtils";

export default function Skills() {
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    setWebglSupported(isWebGLSupported());
  }, []);

  const Skills3D = () => {
    if (!webglSupported) {
      return (
        <div className="relative h-64 mb-16 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 rounded-lg border border-purple-400/30">
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="text-4xl mb-4">⚡ 🧠 ⚙️ 🔗 💻 🚀 ⭐</div>
              <p className="text-purple-400 font-semibold">Skills Visualization</p>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="relative h-64 mb-16">
        <ErrorBoundary fallback={
          <div className="h-64 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 rounded-lg border border-purple-400/30 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-4">⚡ 🧠 ⚙️ 🔗 💻 🚀 ⭐</div>
              <p className="text-purple-400 font-semibold">Skills Visualization</p>
            </div>
          </div>
        }>
          <Canvas
            camera={{
              position: [0, 0, 10],
              fov: 60
            }}
            gl={{
              failIfMajorPerformanceCaveat: false
            }}
          >
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              
              {/* Skill cubes arranged in a formation */}
              <BlockchainCube position={[-6, 2, 0]} scale={0.8} color="#FFD700" />
              <BlockchainCube position={[-2, 3, -1]} scale={0.6} color="#00FFFF" />
              <BlockchainCube position={[2, 2, 1]} scale={0.7} color="#FF69B4" />
              <BlockchainCube position={[6, 1, -2]} scale={0.5} color="#32CD32" />
              <BlockchainCube position={[-4, -1, 2]} scale={0.9} color="#FF4500" />
              <BlockchainCube position={[0, 0, 0]} scale={1.2} color="#9370DB" />
              <BlockchainCube position={[4, -2, -1]} scale={0.6} color="#00CED1" />
            </Suspense>
          </Canvas>
        </ErrorBoundary>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Cutting-edge technologies for blockchain innovation
          </p>
        </motion.div>

        {/* 3D Skills Visualization */}
        <Skills3D />

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolioData.skills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-purple-400 transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-xl font-bold text-purple-400 mb-4">{category.category}</h3>
              <ul className="space-y-2">
                {category.items.map((skill, i) => (
                  <li key={i} className="text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-cyan-400 mb-8">Certifications</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {portfolioData.certifications.map((cert, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white font-semibold"
              >
                {cert}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
