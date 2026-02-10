import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  activeSection: string;
  isModalOpen: boolean;
  selectedProject: any;
  toast: {
    show: boolean;
    message: string;
    type: 'success' | 'error' | 'info';
  };
}

const initialState: UIState = {
  activeSection: 'home',
  isModalOpen: false,
  selectedProject: null,
  toast: {
    show: false,
    message: '',
    type: 'success',
  },
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setActiveSection: (state, action: PayloadAction<string>) => {
      state.activeSection = action.payload;
    },
    openModal: (state, action: PayloadAction<any>) => {
      state.isModalOpen = true;
      state.selectedProject = action.payload;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.selectedProject = null;
    },
    showToast: (state, action: PayloadAction<{ message: string; type?: 'success' | 'error' | 'info' }>) => {
      state.toast = {
        show: true,
        message: action.payload.message,
        type: action.payload.type || 'success',
      };
    },
    hideToast: (state) => {
      state.toast.show = false;
      state.toast.message = '';
    },
  },
});

export const { setActiveSection, openModal, closeModal, showToast, hideToast } = uiSlice.actions;
export default uiSlice.reducer;
