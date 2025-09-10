import { useEffect, useState } from "react";
import "@fontsource/inter";

// Import components
import Hero from "./components/sections/Hero";
import Experience from "./components/sections/Experience";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Navigation from "./components/ui/Navigation";
import ScrollIndicator from "./components/ui/ScrollIndicator";
import BackToTop from "./components/ui/BackToTop";
import StarField from "./components/3d/StarField";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return (
      <div className="w-full h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="relative w-full min-h-screen text-white overflow-x-hidden">
      {/* Animated Star Field Background */}
      <StarField />

      {/* Navigation */}
      <Navigation />

      {/* Scroll Indicator */}
      <ScrollIndicator />

      {/* Back to Top Button */}
      <BackToTop />

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
