import { ChevronDown, Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useEffect, useState } from 'react';
import portfolioApi from '../api/portfolioApi';
import { Social as SocialModel } from '../types';

function Navigation() {
  const [activeSection, setActiveSection] = useState('home');
  const [socials, setSocials] = useState<SocialModel[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'resume', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    portfolioApi.getSocials().then((data) => {
      setSocials(data);
    });
  }, []);

  const navItems = [
    { id: 'home', label: 'Giriş' },
    { id: 'about', label: 'Hakkımda' },
    { id: 'resume', label: 'Özgeçmiş' },
    { id: 'projects', label: 'Projeler' },
    { id: 'contact', label: 'İletişim' },
  ];

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const getSocialIcon = (type: string) => {
    switch (type) {
      case 'GITHUB':
        return <Github size={20} />;
      case 'LINKEDIN':
        return <Linkedin size={20} />;
      case 'X':
        return <Twitter size={20} />;
      case 'INSTAGRAM':
        return <Instagram size={20} />;
      default:
        return null;
    }
  };

  return (
    <>
      {/* Centered Navigation */}
      <div className="nav-container">
        <nav className="glass px-8 py-3 rounded-full flex items-center space-x-8 shadow-2xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`nav-link text-sm font-medium tracking-wide transition-colors ${activeSection === item.id ? 'active' : ''
                }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Hero Social Links */}
      {activeSection === 'home' && (
        <div className="flex justify-center space-x-6 mb-12">

          {
            socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target='_blank'
                className="hover:text-blue-400 transition-all transform hover:scale-110"
              >
                {getSocialIcon(social.type)}
              </a>
            ))
          }
        </div>
      )}

      {/* Scroll Down Indicator */}
      {activeSection === 'home' && (
        <div className="flex justify-center animate-bounce">
          <button
            onClick={() => handleNavClick('about')}
            className="text-blue-400"
          >
            <ChevronDown size={24} />
          </button>
        </div>
      )}
    </>
  );
};

export default Navigation;
