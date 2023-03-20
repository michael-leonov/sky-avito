import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import { advApi } from './services/advs';

export const store = configureStore({
  reducer: {
    user: userReducer,
    [advApi.reducerPath]: advApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(advApi.middleware),
});
