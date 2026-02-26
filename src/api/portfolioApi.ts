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
};

export default portfolioApi;
