import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Modal from './components/Modal';
import Particles from './components/Particles';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Toast from './components/Toast';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
import { fetchPortfolioData } from './store/slices/portfolioSlice';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    dispatch(fetchPortfolioData() as any);
  }, [dispatch]);

  useIntersectionObserver();

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
  };

  return (
    <div className="min-h-screen relative">
      <Particles />
      
      <main>
        <Hero />
        <About />
        <Resume />
        {/* <Projects />
        <Contact /> */}
      <Projects onProjectClick={handleProjectClick} />
        <Contact />
      </main>
      
      <Footer />
      <Modal />
      <Toast />
    </div>
  );
};

export default App;
