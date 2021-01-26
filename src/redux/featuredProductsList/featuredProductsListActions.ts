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

export const fetchFeaturedProductsListStartAction = (): FetchFeaturedProductsListStartAction => {
  return {
    type: FETCH_FEATURED_PRODUCTS_LIST_START,
  };
};

export const fetchFeaturedProductsListSuccessAction = (
  data: any,
): FetchFeaturedProductsListSuccessAction => {
  return {
    type: FETCH_FEATURED_PRODUCTS_LIST_SUCCESS,
    payload: data,
  };
};

export const fetchFeaturedProductsListFailedAction = (
  error: string,
): FetchFeaturedProductsListFailedAction => {
  return {
    type: FETCH_FEATURED_PRODUCTS_LIST_FAIL,
    payload: error,
  };
};
