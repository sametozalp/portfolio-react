import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Footer: React.FC = () => {
  const { data } = useSelector((state: RootState) => state.portfolio);

  const copyrightData = data.copyright || {
    description: '© 2024 Kaan Yılmaz. Minimalist & Modern Web Deneyimi.',
    year: 2024
  };

  return (
    <footer className="py-12 text-center text-gray-600 text-sm border-t border-white/5">
      <p>{copyrightData.description}</p>
    </footer>
  );
};

export default Footer;
