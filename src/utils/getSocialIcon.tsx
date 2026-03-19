import { Github, Instagram, Link, Linkedin, X } from 'lucide-react';
import { Social } from '../types';

export const getSocialIcon = (type: Social['platform']) => {
  switch (type) {
    case 'GITHUB':
      return <Github size={20} />;
    case 'LINKEDIN':
      return <Linkedin size={20} />;
    case 'X':
      return <X size={20} />;
    case 'INSTAGRAM':
      return <Instagram size={20} />;
    case 'MEDIUM':
      return <Link size={20} />;
    default:
      return null;
  }
};
