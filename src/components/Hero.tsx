import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Navigation from './Navigation';

const Hero: React.FC = () => {
  const { data } = useSelector((state: RootState) => state.portfolio);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const entranceData = data.entrance || {
    title: 'Merhaba, Ben Kaan Yılmaz',
    description: 'Full-Stack Geliştirici & Yazılım Mimarı. Karmaşık sorunlara zarif çözümler üretiyorum.'
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center active-section">
      <div className="text-center px-6">
        <h1 
          className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {entranceData.title.split(' ').map((word, index) => (
            <span key={index}>
              {word}
              {index === 2 && <span className="gradient-text"> Kaan Yılmaz</span>}
              {index < entranceData.title.split(' ').length - 1 && ' '}
            </span>
          ))}
        </h1>
        <p 
          className={`text-xl text-gray-400 mb-8 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {entranceData.description}
        </p>
        
        <Navigation />
      </div>
    </section>
  );
};

export default Hero;
