import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  project: any;
  onClose: () => void;
}

const ProjectDetail: React.FC<ModalProps> = ({ isOpen, project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isOpen || !project?.images || project.images.length <= 1) {
      setIsAutoPlay(false);
      return;
    }

    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [isOpen, project, isAutoPlay]);

  if (!isOpen || !project) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handlePrevious = () => {
    setIsAutoPlay(false);
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIsAutoPlay(false);
    setCurrentImageIndex((prevIndex) => 
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlay(false);
    setCurrentImageIndex(index);
  };

  const hasMultipleImages = project.images && project.images.length > 1;

  return (
    <div 
      className="fixed inset-0 z-[110] flex items-center justify-center p-6"
      onClick={handleBackdropClick}
    >
      <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" />
      <div className="relative glass max-w-2xl w-full p-10 rounded-3xl animate-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 hover:text-red-400 transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="space-y-6">
          <h3 className="text-4xl font-bold gradient-text">{project.title}</h3>
          
          {project.images && project.images.length > 0 && (
            <div className="relative">
              <div className="relative h-64 rounded-xl overflow-hidden">
                <img 
                  src={project.images[currentImageIndex]} 
                  alt={`${project.title} - Resim ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                
                {hasMultipleImages && (
                  <>
                    {/* Sol Ok */}
                    <button
                      onClick={handlePrevious}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    
                    {/* Sağ Ok */}
                    <button
                      onClick={handleNext}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                    >
                      <ChevronRight size={20} />
                    </button>
                    
                    {/* Resim Sayacı */}
                    <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
                      {currentImageIndex + 1} / {project.images.length}
                    </div>
                    
                    {/* Otomatik Oynatma Durum Göstergesi */}
                    {isAutoPlay && (
                      <div className="absolute top-2 left-2 bg-green-500/80 text-white px-2 py-1 rounded-full text-xs flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></div>
                        Otomatik
                      </div>
                    )}
                  </>
                )}
              </div>
              
              {/* Dot Navigation */}
              {hasMultipleImages && (
                <div className="flex justify-center space-x-2 mt-3">
                  {project.images.map((_: any, index: number) => (
                    <button
                      key={index}
                      onClick={() => handleDotClick(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex 
                          ? 'bg-blue-500 w-6' 
                          : 'bg-gray-500 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
          
          <p className="text-gray-300 text-lg leading-relaxed">
            {project.description}
          </p>
          
          {project.techStack && project.techStack.length > 0 && (
            <div>
              <h4 className="text-xl font-semibold mb-3">Teknolojiler</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech: string, index: number) => (
                  <span 
                    key={index}
                    className="skill-tag px-4 py-1 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {project.features && project.features.length > 0 && (
            <div>
              <h4 className="text-xl font-semibold mb-3">Özellikler</h4>
              <ul className="list-disc list-inside text-gray-400 space-y-1">
                {project.features.map((feature: string, index: number) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="flex space-x-4 pt-4">
            {project.liveDemoUrl && (
              <a 
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all"
              >
                Demo Gör
              </a>
            )}
            {project.sourceCodeUrl && (
              <a 
                href={project.sourceCodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 px-8 py-3 rounded-xl font-bold hover:bg-white/5 transition-all"
              >
                Kaynak Kod
              </a>
            )}
            <button 
              onClick={onClose}
              className="border border-white/20 px-8 py-3 rounded-xl font-bold hover:bg-white/5 transition-all"
            >
              Kapat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
