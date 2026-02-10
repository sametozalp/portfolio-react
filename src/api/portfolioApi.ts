import api from './axios';
import { MainData, ContactFormData } from '../types';

export const portfolioApi = {
  // Get all portfolio data
  getMainData: async (): Promise<MainData> => {
    const response = await api.get('/api/main');
    return response.data;
  },

  // Contact form submission
  submitContact: async (data: ContactFormData) => {
    const response = await api.post('/api/contact/add', data);
    return response.data;
  },

  // Social media operations
  updateSocial: async (id: number, socialMedia: string, url: string) => {
    const response = await api.put(`/api/social/update/${id}`, {
      socialMedia,
      url
    });
    return response.data;
  },

  // Skill operations
  updateSkill: async (id: number, name: string) => {
    const response = await api.put(`/api/skill/update/${id}`, { name });
    return response.data;
  },

  // Project operations
  updateProject: async (id: number, projectData: any) => {
    const response = await api.put(`/api/project/update/${id}`, projectData);
    return response.data;
  },

  // Experience operations
  updateExperience: async (id: number, experienceData: any) => {
    const response = await api.put(`/api/experience/update/${id}`, experienceData);
    return response.data;
  },

  // About operations
  updateAbout: async (id: number, aboutData: any) => {
    const response = await api.put(`/api/about/update/${id}`, aboutData);
    return response.data;
  },

  // Education operations
  updateEducation: async (id: number, educationData: any) => {
    const response = await api.put(`/api/education/update/${id}`, educationData);
    return response.data;
  },

  // Contact operations
  updateContact: async (id: number, contactData: any) => {
    const response = await api.put(`/api/contact/update/${id}`, contactData);
    return response.data;
  },

  // Copyright operations
  updateCopyright: async (id: number, copyrightData: any) => {
    const response = await api.put(`/api/copyright/update/${id}`, copyrightData);
    return response.data;
  },

  // Entrance operations
  updateEntrance: async (id: number, entranceData: any) => {
    const response = await api.put(`/api/entrance/update/${id}`, entranceData);
    return response.data;
  }
};
