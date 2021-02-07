import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { API } from 'utils/api';

interface SingleProductDetailsState {
  loading: boolean;
  data: any;
  error: string | null;
}

const initialState: SingleProductDetailsState = {
  loading: true,
  data: [],
  error: null,
};

export const getProductDetailsCreator = createAsyncThunk(
  'singleProductDetails/getProductDetailsCreator',
  async (routerId: string, thunkAPI) => {
    const { data } = await axios.get(
      `${API.backendApiUrl}/api/touristRoutes/${routerId}`,
    );
    return data;
  },
);

/**
 * reducers in RTK is a combo of actions and reducers
 * No switch needed
 * Not pure fuctions anymore
 */
const reducers = {};

const extraReducers = {
  [getProductDetailsCreator.pending.type]: (
    state: SingleProductDetailsState,
  ) => {
    // immer - looks like mutable but still follows immutable rules
    state.loading = true;
  },
  [getProductDetailsCreator.fulfilled.type]: (
    state: SingleProductDetailsState,
    action: PayloadAction<string | null>,
  ) => {
    state.loading = false;
    state.data = action.payload;
    state.error = null;
  },
  [getProductDetailsCreator.rejected.type]: (
    state: SingleProductDetailsState,
    action: PayloadAction<string | null>,
  ) => {
    state.error = action.payload;
    state.loading = false;
    state.data = [];
  },
};

export const SingleProductDetailsSlice = createSlice({
  name: 'singleProductDetails',
  initialState,
  reducers,
  extraReducers,
});
