import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { API } from 'utils/api';

interface ShoppingCartState {
  loading: boolean;
  items: any[];
  error: string | null;
}

const initialState: ShoppingCartState = {
  loading: true,
  items: [],
  error: null,
};

export const getShoppingCartItems = createAsyncThunk(
  'shoppingCart/getShoppingCartItems',
  async (token: string, thunkAPI) => {
    const { data } = await axios.get(`${API.backendApiUrl}/api/shoppingcart`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });
    return data.shoppingCartItems;
  },
);

export const addShoppingCartItem = createAsyncThunk(
  'shoppingCart/addShoppingCartItem',
  async (params: { token: string; touristRouteId: string }, thunkAPI) => {
    const { data } = await axios.post(
      `${API.backendApiUrl}/api/shoppingcart/items`,
      {
        touristRouteId: params.touristRouteId,
      },
      {
        headers: {
          Authorization: `bearer ${params.token}`,
        },
      },
    );
    return data.shoppingCartItems;
  },
);

export const clearShoppingCartItem = createAsyncThunk(
  'shoppingCart/clearShoppingCartItem',
  async (params: { token: string; itemIds: number[] }, thunkAPI) => {
    return await axios.delete(
      `${API.backendApiUrl}/api/shoppingcart/items/(${params.itemIds.join(
        ',',
      )})`,
      {
        headers: {
          Authorization: `bearer ${params.token}`,
        },
      },
    );
  },
);

const reducers = {};

const extraReducers = {
  [getShoppingCartItems.pending.type]: (state: ShoppingCartState) => {
    state.loading = true;
  },
  [getShoppingCartItems.fulfilled.type]: (
    state: ShoppingCartState,
    action: PayloadAction<any[]>,
  ) => {
    state.loading = false;
    state.items = action.payload;
    state.error = null;
  },
  [getShoppingCartItems.rejected.type]: (
    state: ShoppingCartState,
    action: PayloadAction<string | null>,
  ) => {
    state.error = action.payload;
    state.loading = false;
    state.items = [];
  },
  [addShoppingCartItem.pending.type]: (state: ShoppingCartState) => {
    state.loading = true;
  },
  [addShoppingCartItem.fulfilled.type]: (
    state: ShoppingCartState,
    action: PayloadAction<any[]>,
  ) => {
    state.loading = false;
    state.items = action.payload;
    state.error = null;
  },
  [addShoppingCartItem.rejected.type]: (
    state: ShoppingCartState,
    action: PayloadAction<string | null>,
  ) => {
    state.error = action.payload;
    state.loading = false;
    state.items = [];
  },
  [clearShoppingCartItem.pending.type]: (state: ShoppingCartState) => {
    state.loading = true;
  },
  [clearShoppingCartItem.fulfilled.type]: (state: ShoppingCartState) => {
    state.loading = false;
    state.items = [];
    state.error = null;
  },
  [clearShoppingCartItem.rejected.type]: (
    state: ShoppingCartState,
    action: PayloadAction<string | null>,
  ) => {
    state.error = action.payload;
    state.loading = false;
    state.items = [];
  },
};

export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers,
  extraReducers,
});
