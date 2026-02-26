import { ContactFormData } from '../types';
import api from './axios';

export const portfolioApi = {
  submitContact: async (formData: ContactFormData) => {
    const response = await api.post('/contact', formData);
    return response.data;
  },

  getEntrance: async () => {
    const response = await api.get('/entrance');
    return response.data;
  },

  getAbout: async () => {
    const response = await api.get('/about');
    return response.data;
  },

  getContact: async () => {
    const response = await api.get('/contact');
    return response.data;
  },

  getSocials: async () => {
    const response = await api.get('/social');
    return response.data;
  },

  getExperiences: async () => {
    const response = await api.get('/experience');
    return response.data;
  },

  getEducations: async () => {
    const response = await api.get('/education');
    return response.data;
  },

  getProjects: async () => {
    const response = await api.get('/project');
    return response.data;
  }
};

export default portfolioApi;
