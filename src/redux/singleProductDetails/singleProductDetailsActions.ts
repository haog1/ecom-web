import { ThunkAction } from 'redux-thunk';
import { RootState } from 'redux/store';
import axios from 'axios';
import { API } from 'utils/api';

export const PAGE_ON_LOAD = 'PAGE_ON_LOAD';
export const FETCH_DATA = 'FETCH_DATA';
export const PAGE_ERROR = 'PAGE_ERROR';

export interface SingleProductDetailsOnLoad {
  type: typeof PAGE_ON_LOAD;
}

export interface SingleProductDetailsFetchData {
  type: typeof FETCH_DATA;
  payload: any[];
}

export interface SingleProductDetailsPageError {
  type: typeof PAGE_ERROR;
  payload: string;
}

export type SingleProductDetailsAction =
  | SingleProductDetailsOnLoad
  | SingleProductDetailsFetchData
  | SingleProductDetailsPageError;

export const singleProductDetailsOnLoadCreator = (): SingleProductDetailsOnLoad => {
  return {
    type: PAGE_ON_LOAD,
  };
};

export const singleProductDetailsFetchData = (
  data: any[],
): SingleProductDetailsFetchData => {
  return {
    type: FETCH_DATA,
    payload: data,
  };
};

export const singleProductDetailsPageError = (
  data: string,
): SingleProductDetailsPageError => {
  return {
    type: PAGE_ERROR,
    payload: data,
  };
};

export const loadProductDetailsCreator = (
  routerId: string,
): ThunkAction<void, RootState, unknown, SingleProductDetailsAction> => async (
  dispatch,
  getState,
) => {
  try {
    if (!routerId) {
      throw new Error('Missing product id');
    }
    dispatch(singleProductDetailsOnLoadCreator());
    const { data } = await axios.get(
      `${API.backendApiUrl}/api/touristRoutes/${routerId}`,
    );
    dispatch(singleProductDetailsFetchData(data));
  } catch (err) {
    singleProductDetailsPageError(err.message);
  }
};
