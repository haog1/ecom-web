import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { API } from 'utils/api';

interface FeaturedProductsListState {
  loading: boolean;
  data: any;
  error: string | null;
}

const initialState: FeaturedProductsListState = {
  loading: true,
  data: [],
  error: null,
};

export const getProductsListCreator = createAsyncThunk(
  'featuredProductsList/getProductsListCreator',
  async () => {
    const { data } = await axios.get(
      `${API.backendApiUrl}/api/productCollections`,
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
  [getProductsListCreator.pending.type]: (state: FeaturedProductsListState) => {
    // immer - looks like mutable but still follows immutable rules
    state.loading = true;
  },
  [getProductsListCreator.fulfilled.type]: (
    state: FeaturedProductsListState,
    action: PayloadAction<string | null>,
  ) => {
    state.loading = false;
    state.data = action.payload;
    state.error = null;
  },
  [getProductsListCreator.rejected.type]: (
    state: FeaturedProductsListState,
    action: PayloadAction<string | null>,
  ) => {
    state.error = action.payload;
    state.loading = false;
    state.data = [];
  },
};

export const FeaturedProductsListSlice = createSlice({
  name: 'featuredProductsList',
  initialState,
  reducers,
  extraReducers,
});
