import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const About: React.FC = () => {
  const { data } = useSelector((state: RootState) => state.portfolio);

  const aboutData = data.about;

  const skills = data.skills;

  const stats = [
    { number: '5+', label: 'Yıllık Deneyim' },
    { number: '25+', label: 'Proje Sayısı' },
    { number: '12', label: 'Ödül & Sertifika' }
  ];

  return (
    <section id="about" className="py-32">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-2xl overflow-hidden border-2 border-blue-500/30">
              <img 
                src={aboutData?.profileImageUrl} 
                alt="Profil Fotoğrafı" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 glass p-6 rounded-xl hidden md:block">
              <p className="text-3xl font-bold gradient-text">{stats[0].number}</p>
              <p className="text-xs text-gray-400 uppercase">{stats[0].label}</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-sm uppercase tracking-widest text-blue-400 mb-2">Hakkımda</h2>
            <h3 className="text-4xl font-bold mb-6">{aboutData?.title}</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              {aboutData?.description}
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.slice(1).map((stat, index) => (
                <div key={index} className="glass p-4 rounded-lg">
                  <p className="text-2xl font-bold">{stat.number}</p>
                  <p className="text-gray-500 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <h4 className="font-semibold mb-4 text-gray-300">Teknik Skiller</h4>
              <div className="flex flex-wrap gap-2">
                {skills?.map((skill, index) => (
                  <span 
                    key={index} 
                    className="skill-tag px-4 py-1 rounded-full text-xs"
                  >
                  {typeof skill === 'string' ? skill : skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
