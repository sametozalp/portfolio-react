import { X } from 'lucide-react';
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  project: any;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, project, onClose }) => {
  if (!isOpen || !project) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

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
            <img 
              src={project.images[0]} 
              alt={project.title}
              className="w-full h-64 object-cover rounded-xl"
            />
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

export default Modal;
