import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAPIData = createAsyncThunk('api/fetchData', async () => {
  const response = await axios.get('http://localhost:8080/information'); // Replace with your API endpoint URL
  return response.data;
});

export const fetchEducationData = createAsyncThunk('api/fetchEducationData', async () => {
  const response = await axios.get('http://localhost:8080/education'); // Replace with your API endpoint URL
  return response.data;
});


export const fetchExperienceData = createAsyncThunk('api/fetchExperienceData', async () => {
  const response = await axios.get('http://localhost:8080/experience'); // Replace with your API endpoint URL
  return response.data;
});

export const fetchProjectData = createAsyncThunk('api/fetchProjectData', async () => {
  const response = await axios.get('http://localhost:8080/projects'); // Replace with your API endpoint URL
  return response.data;
} );

export const fetchSkillData = createAsyncThunk('api/fetchSkillData', async () => {
  const response = await axios.get('http://localhost:8080/skills'); // Replace with your API endpoint URL
  return response.data;
} );
