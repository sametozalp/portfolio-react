import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setActiveSection } from '../store/slices/uiSlice';
import { Github, Linkedin, Twitter, Instagram, ChevronDown } from 'lucide-react';

const Navigation: React.FC = () => {
  const dispatch = useDispatch();
  const { activeSection } = useSelector((state: RootState) => state.ui);

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
      dispatch(setActiveSection(sectionId));
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
              className={`nav-link text-sm font-medium tracking-wide transition-colors ${
                activeSection === item.id ? 'active' : ''
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
          <a href="#" className="hover:text-blue-400 transition-colors">
            <Github size={20} />
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors">
            <Twitter size={20} />
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors">
            <Instagram size={20} />
          </a>
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
