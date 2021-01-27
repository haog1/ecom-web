import {
  PAGE_ON_LOAD,
  FETCH_DATA,
  PAGE_ERROR,
  SingleProductDetailsAction,
} from 'redux/singleProductDetails/singleProductDetailsActions';

interface SingleProductDetailsState {
  loading: boolean;
  name: string;
  data: any[];
  error: string | null;
}

const defaultSingleProductDetails: SingleProductDetailsState = {
  loading: false,
  name: 'test',
  data: [],
  error: null,
};

export default (
  state = defaultSingleProductDetails,
  action: SingleProductDetailsAction,
) => {
  switch (action.type) {
    case PAGE_ON_LOAD:
      return { ...state, loading: true };
    case FETCH_DATA:
      return { ...state, loading: false, data: action.payload, error: null };
    case PAGE_ERROR:
      return { ...state, loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};
