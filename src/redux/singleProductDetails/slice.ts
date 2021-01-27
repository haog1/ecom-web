import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API } from 'utils/api';

interface SingleProductDetailsState {
  loading: boolean;
  data: any;
  error: string | null;
}

const initialState: SingleProductDetailsState = {
  loading: false,
  data: [],
  error: null,
};

/**
 * reducers in RTK is a combo of actions and reducers
 * No switch needed
 * Not pure fuctions anymore
 */
const reducers = {
  fetchStart: (state: SingleProductDetailsState) => {
    // immer - looks like mutable but still follows immutable rules
    state.loading = true;
  },
  fetchSuccess: (
    state: SingleProductDetailsState,
    action: PayloadAction<string | null>,
  ) => {
    state.loading = false;
    state.data = action.payload;
    state.error = null;
  },
  fetchFail: (
    state: SingleProductDetailsState,
    action: PayloadAction<string | null>,
  ) => {
    state.error = action.payload;
    state.loading = false;
    state.data = [];
  },
};

const extraReducers = {};

export const getProductDetailsCreator = createAsyncThunk(
  'singleProductDetails/getProductDetailsCreator',
  async (routerId: string, thunkAPI) => {
    try {
      if (!routerId) {
        throw new Error('Missing product id');
      }
      thunkAPI.dispatch(SingleProductDetailsSlice.actions.fetchStart());
      const { data } = await axios.get(
        `${API.backendApiUrl}/api/touristRoutes/${routerId}`,
      );
      thunkAPI.dispatch(SingleProductDetailsSlice.actions.fetchSuccess(data));
    } catch (err) {
      thunkAPI.dispatch(
        SingleProductDetailsSlice.actions.fetchFail(err.message),
      );
    }
  },
);

export const SingleProductDetailsSlice = createSlice({
  name: 'singleProductDetails',
  initialState,
  reducers,
  extraReducers,
});
