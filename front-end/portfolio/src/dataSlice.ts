import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchAPIData } from './api';
interface DataState {
    data: {
      Name: string;
      Summary: string;
    } | null;
    loading: boolean;
    error: string | null;
  }
  const initialState: DataState = {
    data: null,
    loading: false,
    error: null,
  };
const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAPIData.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchAPIData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = ''; // Reset error to an empty string when data is successfully fetched
      })
      .addCase(fetchAPIData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || ''; // Assign error message or an empty string to state.error
      });
  },
});

export default dataSlice.reducer;
