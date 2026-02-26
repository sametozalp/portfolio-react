import React, { useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Entrance from './components/Entrance';
import Footer from './components/Footer';
import Particles from './components/Particles';
import ProjectDetail from './components/ProjectDetail';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Toast from './components/Toast';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    message: '',
    type: 'success' as 'success' | 'error' | 'info'
  });

  useIntersectionObserver();

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    setToast({ show: true, message, type });
  };

  const hideToast = () => {
    setToast(prev => ({ ...prev, show: false, message: '' }));
  };

  return (
    <div className="min-h-screen relative">
      <Particles />
      
      <main>
        <Entrance />
        <About />
        <Resume />
        {/* <Projects />
        <Contact /> */}
      <Projects onProjectClick={handleProjectClick} />
        <Contact showToast={showToast} />
      </main>
      
      <Footer />
      <ProjectDetail 
        isOpen={isModalOpen}
        project={selectedProject}
        onClose={handleCloseModal}
      />
      <Toast 
        show={toast.show}
        message={toast.message}
        type={toast.type}
        onClose={hideToast}
      />
    </div>
  );
};

export default App;
