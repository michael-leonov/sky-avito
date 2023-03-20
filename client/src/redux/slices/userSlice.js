import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  userLogin,
  userLogout,
  checkUser,
  uploadAvatarUser,
  updateUserInfo,
} from './userActions';

const userToken = localStorage.getItem('userToken') || null;

const refreshToken = localStorage.getItem('refreshToken') || null;

const initialState = {
  loading: false,
  userInfo: {},
  userToken,
  refreshToken,
  error: null,
  success: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, { payload }) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
    });

    builder.addCase(registerUser.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });

    builder.addCase(userLogin.pending, (state, { payload }) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(userLogin.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload.userInfo;
      state.userToken = payload.access_token;
      state.refreshToken = payload.refresh_token;
      state.error = null;
    });

    builder.addCase(userLogin.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload.data;
    });

    builder.addCase(userLogout, (state) => {
      state.loading = false;
      state.userInfo = {};
      state.userToken = null;
      state.refreshToken = null;
      state.error = null;
      state.success = false;
    });

    builder.addCase(checkUser.pending, (state, { payload }) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(checkUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload.userInfo;
      state.userToken = payload.access_token;
      state.refreshToken = payload.refresh_token;
    });

    builder.addCase(checkUser.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });

    builder.addCase(uploadAvatarUser.pending, (state, { payload }) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(uploadAvatarUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
    });

    builder.addCase(uploadAvatarUser.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });

    builder.addCase(updateUserInfo.pending, (state, { payload }) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(updateUserInfo.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
    });

    builder.addCase(updateUserInfo.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export default userSlice.reducer;
