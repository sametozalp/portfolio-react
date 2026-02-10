import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { MainData, ContactFormData } from '../../types';
import { portfolioApi } from '../../api/portfolioApi';

interface PortfolioState {
  data: MainData;
  loading: boolean;
  error: string | null;
  contactSubmitting: boolean;
  contactSuccess: boolean;
}

const initialState: PortfolioState = {
  data: {},
  loading: false,
  error: null,
  contactSubmitting: false,
  contactSuccess: false,
};

// Async thunks
export const fetchPortfolioData = createAsyncThunk(
  'portfolio/fetchData',
  async (_, { rejectWithValue }) => {
    try {
      const data = await portfolioApi.getMainData();
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch portfolio data');
    }
  }
);

export const submitContactForm = createAsyncThunk(
  'portfolio/submitContact',
  async (formData: ContactFormData, { rejectWithValue }) => {
    try {
      const response = await portfolioApi.submitContact(formData);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to submit contact form');
    }
  }
);

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    clearContactSuccess: (state) => {
      state.contactSuccess = false;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch portfolio data
      .addCase(fetchPortfolioData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPortfolioData.fulfilled, (state, action: PayloadAction<MainData>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPortfolioData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Submit contact form
      .addCase(submitContactForm.pending, (state) => {
        state.contactSubmitting = true;
        state.error = null;
      })
      .addCase(submitContactForm.fulfilled, (state) => {
        state.contactSubmitting = false;
        state.contactSuccess = true;
      })
      .addCase(submitContactForm.rejected, (state, action) => {
        state.contactSubmitting = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearContactSuccess, clearError } = portfolioSlice.actions;
export default portfolioSlice.reducer;
