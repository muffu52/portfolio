import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchAPIData, fetchEducationData, fetchExperienceData, fetchProjectData, fetchSkillData } from '../api';

interface EducationItem {
  Institution: string;
  Degree: string;
  StartDate: string;
  EndDate: string;
  Location: string;
  Description: string;
}

interface ExperienceItem {
  Title: string;
  Company: string;
  StartDate: string;
  EndDate: string;
  Location: string;
  Description: string;
  Link: string;
}

interface ProjectItem {
  Name: string;
  StartDate: string;
  EndDate: string;
  Description: string;
  Link: string;
  Image: string;
}

interface SkillItem {
  Name: string;
  Level: number;
}

interface DataState {
    data: {
      Name: string;
      Summary: string;
    } | null;
    education: EducationItem[] | null;
    experience: ExperienceItem[] | null;
    projects: ProjectItem[] | null;
    skills: SkillItem[] | null;
    loading: boolean;
    error: string | null;
  }

  const initialState: DataState = {
    data: null,
    education: null,
    experience: null,
    projects: null,
    skills: null,
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
      })
      .addCase(fetchEducationData.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchEducationData.fulfilled, (state, action) => {
        state.loading = false;
        state.education = action.payload;
        state.error = '';
      })
      .addCase(fetchEducationData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || '';
      })
      .addCase(fetchExperienceData.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchExperienceData.fulfilled, (state, action) => {
        state.loading = false;
        state.experience = action.payload;
        state.error = '';
      })
      .addCase(fetchExperienceData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || '';
      })
      .addCase(fetchProjectData.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchProjectData.fulfilled, (state, action) => {
        state.loading = false;
        state.projects = action.payload;
        state.error = '';
      })
      .addCase(fetchProjectData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || '';
      })
      .addCase(fetchSkillData.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchSkillData.fulfilled, (state, action) => {
        state.loading = false;
        state.skills = action.payload;
        state.error = '';
      })
      .addCase(fetchSkillData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || '';
      });
  },
});
export default dataSlice.reducer;
