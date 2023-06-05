/* eslint-disable camelcase */
/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

export const registerUser = createAsyncThunk(
  'user/register',
  async (
    { email, password, name, surname, phone, city },
    { rejectWithValue }
  ) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      await axios.post(
        `${baseUrl}/auth/register`,
        { email, password, name, surname, phone, city },
        config
      );
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const userLogin = createAsyncThunk(
  'user/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.post(
        `${baseUrl}/auth/login/`,
        { email, password },
        config
      );

      localStorage.setItem('userToken', data.access_token);
      localStorage.setItem('refreshToken', data.refresh_token);

      if (data) {
        try {
          const config = {
            headers: {
              'Content-Type': 'application/json',
              authorization: `Bearer ${data.access_token}`,
            },
          };
          const userInfo = await axios.get(`${baseUrl}/user`, config);

          data.userInfo = userInfo.data;
        } catch (error) {
          if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message);
          }
          return rejectWithValue(error.message);
        }
      }

      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.response);
    }
  }
);

export const userLogout = createAction('user/logout');

export const checkUser = createAsyncThunk(
  'user/auth',
  async ({ access_token, refresh_token }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const token = await axios.put(
        `${baseUrl}/auth/login`,
        { access_token, refresh_token },
        config
      );
      localStorage.setItem('userToken', token.data.access_token);
      localStorage.setItem('refreshToken', token.data.refresh_token);

      if (token.data) {
        try {
          const config = {
            headers: {
              'Content-Type': 'application/json',
              authorization: `Bearer ${token.data.access_token}`,
            },
          };
          const userInfo = await axios.get(`${baseUrl}/user`, config);

          token.data.userInfo = userInfo.data;
        } catch (error) {
          if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message);
          }
          return rejectWithValue(error.message);
        }
      }

      return token.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const uploadAvatarUser = createAsyncThunk(
  'user/uploadAvatar',
  async (file, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          authorization: `Bearer ${localStorage.getItem('userToken')}`,
        },
      };
      const { data } = await axios.post(
        `${baseUrl}/user/avatar`,
        { file },
        config
      );

      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const updateUserInfo = createAsyncThunk(
  'user/updateUserInfo',
  async ({ name, surname, phone, city }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${localStorage.getItem('userToken')}`,
        },
      };
      const { data } = await axios.patch(
        `${baseUrl}/user`,
        { name, surname, phone, city },
        config
      );

      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
  }
);
