import { useEffect, useState } from 'react';
import portfolioApi from '../api/portfolioApi';
import { Entrance as EntranceType } from '../types';
import Navigation from './Navigation';

function Entrance() {
  const [isVisible, setIsVisible] = useState(false);
  const [entranceData, setEntranceData] = useState<EntranceType | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

    useEffect(() => {
    portfolioApi.getEntrance().then((data) => {
      setEntranceData(data);
    });
  }, []);

  // const entranceData = {
  //   title: "Merhaba, ben",
  //   fullName: "Samet Özalp",
  //   description: "Full Stack Developer | React & Node.js Uzmanı"
  // };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center active-section">
      <div className="text-center px-6">
        <h1 
          className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
       {entranceData?.title}{" "}
        <span className="gradient-text">
          {entranceData?.fullName}
        </span>

        </h1>
        <p 
          className={`text-xl text-gray-400 mb-8 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {entranceData?.description}
        </p>
        
        <Navigation />
      </div>
    </section>
  );
};

export default Entrance;