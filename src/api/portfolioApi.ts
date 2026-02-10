import { ContactFormData, MainData } from '../types';
import api from './axios';

export const portfolioApi = {
  // Get all portfolio data
  getMainData: async (): Promise<MainData> => {
    const response = await api.get('/api/main');
    return response.data;
  },

  // Contact form submission
  submitContact: async (data: ContactFormData) => {
    const response = await api.post('/api/contact/send', data);
    return response.data;
  },

};
