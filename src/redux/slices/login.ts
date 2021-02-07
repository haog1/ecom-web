import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { API } from 'utils/api';

interface UserLoginState {
  loading: boolean;
  token: string | null;
  error: string | null;
}

const initialState: UserLoginState = {
  loading: false,
  token: null,
  error: null,
};

export const requestLogin = createAsyncThunk(
  'userAuth/requestLogin',
  async (
    params: {
      email: string;
      password: string;
    },
    thunkAPI,
  ) => {
    const { data } = await axios.post(`${API.backendApiUrl}/auth/login`, {
      email: params.email,
      password: params.password,
    });
    return data.token;
  },
);

/**
 * reducers in RTK is a combo of actions and reducers
 * No switch needed
 * Not pure fuctions anymore
 */
const reducers = {};

const extraReducers = {
  [requestLogin.pending.type]: (state: UserLoginState) => {
    // immer - looks like mutable but still follows immutable rules
    state.loading = true;
  },
  [requestLogin.fulfilled.type]: (
    state: UserLoginState,
    action: PayloadAction<string | null>,
  ) => {
    state.loading = false;
    state.token = action.payload;
    state.error = null;
  },
  [requestLogin.rejected.type]: (
    state: UserLoginState,
    action: PayloadAction<string | null>,
  ) => {
    state.error = action.payload;
    state.loading = false;
    state.token = null;
  },
};

export const UserLoginSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers,
  extraReducers,
});
