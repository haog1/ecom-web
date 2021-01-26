import {
  FeaturedProductsListAction,
  FETCH_FEATURED_PRODUCTS_LIST_START,
  FETCH_FEATURED_PRODUCTS_LIST_SUCCESS,
  FETCH_FEATURED_PRODUCTS_LIST_FAIL,
} from 'redux/featuredProductsList/featuredProductsListActions';

interface FeaturedProductsListState {
  error: string | null;
  loading: boolean;
  productLists: any[];
}

const defaultFeaturedProductsList: FeaturedProductsListState = {
  error: null,
  loading: true,
  productLists: [],
};

export default (
  state = defaultFeaturedProductsList,
  action: FeaturedProductsListAction,
) => {
  switch (action.type) {
    case FETCH_FEATURED_PRODUCTS_LIST_START: // Just changing loading state
      return { ...state, loading: true };
    case FETCH_FEATURED_PRODUCTS_LIST_SUCCESS: // Stop loading and return success
      return {
        ...state,
        error: null,
        loading: false,
        productLists: action.payload,
      };
    case FETCH_FEATURED_PRODUCTS_LIST_FAIL: // Stop loading and return error
      return {
        ...state,
        error: action.payload,
        loading: false,
        productLists: [],
      };
    default:
      return { ...state };
  }
};
