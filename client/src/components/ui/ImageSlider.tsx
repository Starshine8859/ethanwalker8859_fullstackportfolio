import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageSliderProps {
  images: {
    images: string[];
    title: string;
    description: string;
    tags: string[];
    url?: string;
  }[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export default function ImageSlider({ 
  images, 
  autoPlay = true, 
  autoPlayInterval = 5000 
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay || images.length === 0) return;

    const interval = setInterval(() => {
      const currentProject = images[currentIndex];
      if (!currentProject || !currentProject.images) return;
      
      if (currentImageIndex < currentProject.images.length - 1) {
        setCurrentImageIndex(prev => prev + 1);
      } else {
        setCurrentImageIndex(0);
        setCurrentIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, images.length, currentIndex, currentImageIndex]);

  const goToPrevious = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(prev => prev - 1);
    } else {
      const newProjectIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
      setCurrentIndex(newProjectIndex);
      setCurrentImageIndex(images[newProjectIndex].images.length - 1);
    }
  };

  const goToNext = () => {
    if (currentImageIndex < images[currentIndex].images.length - 1) {
      setCurrentImageIndex(prev => prev + 1);
    } else {
      setCurrentImageIndex(0);
      setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setCurrentImageIndex(0);
  };

  if (images.length === 0 || !images[currentIndex] || !images[currentIndex].images) return null;

  return (
    <div className="relative w-full max-w-4xl mx-auto mb-16">
      {/* Main slider container */}
      <div className="relative h-96 bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {/* Project preview content */}
            <div className="w-full h-full flex flex-col md:flex-row">
              {/* Left side - Project Images */}
              <div className="md:w-1/2 h-full bg-gradient-to-br from-yellow-400/20 to-purple-600/20 flex flex-col items-center justify-center p-4">
                <img 
                  src={images[currentIndex].images[currentImageIndex]} 
                  alt={`${images[currentIndex].title} - Image ${currentImageIndex + 1}`}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-lg mb-4"
                />
                {/* Image indicators for current project */}
                <div className="flex space-x-1">
                  {images[currentIndex].images.map((_, imgIndex) => (
                    <button
                      key={imgIndex}
                      onClick={() => setCurrentImageIndex(imgIndex)}
                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                        imgIndex === currentImageIndex
                          ? 'bg-yellow-400'
                          : 'bg-gray-500 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Right side - Content */}
              <div className="md:w-1/2 h-full p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-yellow-400 mb-4">
                  {images[currentIndex].title}
                </h3>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  {images[currentIndex].description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {images[currentIndex].tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-700 text-yellow-400 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  {images[currentIndex].url && (
                    <a
                      href={images[currentIndex].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-2 bg-gradient-to-r from-yellow-400 to-purple-600 text-gray-900 font-semibold rounded-lg hover:scale-105 transition-transform duration-300"
                    >
                      View Live Site →
                    </a>
                  )}
                  <button className="inline-flex items-center justify-center px-6 py-2 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 transition-colors duration-300 font-semibold rounded-lg">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700/80 text-white p-2 rounded-full transition-colors duration-300 z-10"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700/80 text-white p-2 rounded-full transition-colors duration-300 z-10"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentIndex
                ? 'bg-yellow-400'
                : 'bg-gray-600 hover:bg-gray-500'
            }`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-700 rounded-full h-1 mt-4">
        <motion.div
          className="bg-gradient-to-r from-yellow-400 to-purple-600 h-1 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
}