import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { checkout } from 'redux/slices/shoppingCart';
import { API } from 'utils/api';

interface OrderState {
  loading: boolean;
  currentOrder: any;
  error: string | null;
}

const initialState: OrderState = {
  loading: false,
  currentOrder: null,
  error: null,
};

export const placeOrder = createAsyncThunk(
  'order/placeOrder',
  async (
    params: {
      token: string;
      orderId: string;
    },
    thunkAPI,
  ) => {
    const { data } = await axios.post(
      `${API.backendApiUrl}/api/orders/${params.orderId}/placeOrder`,
      null,
      {
        headers: {
          Authorization: `bearer ${params.token}`,
        },
      },
    );
    console.log(data);
    return data;
  },
);

const reducers = {};

const extraReducers = {
  [placeOrder.pending.type]: (state: OrderState) => {
    state.loading = true;
  },
  [placeOrder.fulfilled.type]: (
    state: OrderState,
    action: PayloadAction<any>,
  ) => {
    state.loading = false;
    state.currentOrder = action.payload;
    state.error = null;
  },
  [placeOrder.rejected.type]: (
    state: OrderState,
    action: PayloadAction<string | null>,
  ) => {
    state.error = action.payload;
    state.loading = false;
    state.currentOrder = null;
  },
  [checkout.pending.type]: (state: OrderState) => {
    state.loading = true;
  },
  [checkout.fulfilled.type]: (
    state: OrderState,
    action: PayloadAction<any>,
  ) => {
    state.loading = false;
    state.currentOrder = action.payload;
    state.error = null;
  },
  [checkout.rejected.type]: (
    state: OrderState,
    action: PayloadAction<string | null>,
  ) => {
    state.error = action.payload;
    state.loading = false;
    state.currentOrder = null;
  },
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers,
  extraReducers,
});
