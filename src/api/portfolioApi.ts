import api from './axios';
import { MainData, ContactFormData } from '../types';

export const portfolioApi = {
  getMainData: async (): Promise<MainData> => {
    const response = await api.get('/portfolio');
    return response.data;
  },

  submitContact: async (formData: ContactFormData) => {
    const response = await api.post('/contact', formData);
    return response.data;
  },
};

export default portfolioApi;
