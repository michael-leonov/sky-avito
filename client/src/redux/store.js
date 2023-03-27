import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import { advApi } from './services/advs';
import filterReducer from './slices/filterAdvReducer';

export const store = configureStore({
  reducer: {
    user: userReducer,
    [advApi.reducerPath]: advApi.reducer,
    filter: filterReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(advApi.middleware),
});
