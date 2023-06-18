import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import dataReducer from './apiInfo/dataSlice';

const rootReducer = combineReducers({
  data: dataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
