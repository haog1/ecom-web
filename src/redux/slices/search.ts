import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { API } from 'utils/api';

interface ProductSearchState {
  loading: boolean;
  data: any;
  error: string | null;
  pagination: any;
}

const initialState: ProductSearchState = {
  loading: true,
  data: [],
  error: null,
  pagination: null,
};

export const searchProduct = createAsyncThunk(
  'productSearch/searchProduct',
  async (
    params: {
      keywords: string;
      nextPage: number | string;
      pageSize: number | string;
    },
    thunkAPI,
  ) => {
    let requestUrl = `${API.backendApiUrl}/api/touristRoutes/?pageNumber=${params.nextPage}&pageSize=${params.pageSize}`;
    if (params.keywords) {
      requestUrl += '&keyword=' + params.keywords;
    }
    const response = await axios.get(requestUrl);
    return {
      data: response.data,
      pagination: JSON.parse(response.headers['x-pagination']),
    };
  },
);

const reducers = {};

const extraReducers = {
  [searchProduct.pending.type]: (state: ProductSearchState) => {
    state.loading = true;
  },
  [searchProduct.fulfilled.type]: (
    state: ProductSearchState,
    action: PayloadAction<any>,
  ) => {
    state.loading = false;
    state.data = action.payload.data;
    state.pagination = action.payload.pagination;
    state.error = null;
  },
  [searchProduct.rejected.type]: (
    state: ProductSearchState,
    action: PayloadAction<string | null>,
  ) => {
    state.error = action.payload;
    state.loading = false;
    state.data = [];
  },
};

export const ProductSearchSlice = createSlice({
  name: 'productSearch',
  initialState,
  reducers,
  extraReducers,
});
