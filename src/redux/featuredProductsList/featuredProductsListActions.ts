import { ThunkAction } from 'redux-thunk';
import { RootState } from 'redux/store';
import axios from 'axios';
import { API } from 'utils/api';

export const FETCH_FEATURED_PRODUCTS_LIST_START =
  'FETCH_FEATURED_PRODUCTS_LIST_START';
export const FETCH_FEATURED_PRODUCTS_LIST_SUCCESS =
  'FETCH_FEATURED_PRODUCTS_LIST_SUCCESS';
export const FETCH_FEATURED_PRODUCTS_LIST_FAIL =
  'FETCH_FEATURED_PRODUCTS_LIST_FAIL';

interface FetchFeaturedProductsListStartAction {
  type: typeof FETCH_FEATURED_PRODUCTS_LIST_START;
}

interface FetchFeaturedProductsListSuccessAction {
  type: typeof FETCH_FEATURED_PRODUCTS_LIST_SUCCESS;
  payload: any;
}

interface FetchFeaturedProductsListFailedAction {
  type: typeof FETCH_FEATURED_PRODUCTS_LIST_FAIL;
  payload: any;
}

export type FeaturedProductsListAction =
  | FetchFeaturedProductsListStartAction
  | FetchFeaturedProductsListSuccessAction
  | FetchFeaturedProductsListFailedAction;

export const fetchFeaturedProductsListStartCreator = (): FetchFeaturedProductsListStartAction => {
  return {
    type: FETCH_FEATURED_PRODUCTS_LIST_START,
  };
};

export const fetchFeaturedProductsListSuccessCreator = (
  data: any,
): FetchFeaturedProductsListSuccessAction => {
  return {
    type: FETCH_FEATURED_PRODUCTS_LIST_SUCCESS,
    payload: data,
  };
};

export const fetchFeaturedProductsListFailedCreator = (
  error: string,
): FetchFeaturedProductsListFailedAction => {
  return {
    type: FETCH_FEATURED_PRODUCTS_LIST_FAIL,
    payload: error,
  };
};

//R -> return type(void for nothing) S -> State, E -> Extra params (unknow), A -> Action
export const getHomePagedataCreator = (): ThunkAction<
  void,
  RootState,
  unknown,
  FeaturedProductsListAction
> => async (dispatch, getState) => {
  try {
    dispatch(fetchFeaturedProductsListStartCreator());
    const { data } = await axios.get(
      `${API.backendApiUrl}/api/productCollections`,
    );
    dispatch(fetchFeaturedProductsListSuccessCreator(data));
  } catch (err) {
    dispatch(fetchFeaturedProductsListFailedCreator(err.message));
  }
};
