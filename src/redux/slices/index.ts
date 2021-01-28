import { FeaturedProductsListSlice as featuredProductsListReducer } from 'redux/slices/featuredProductsList';
import { ChangeLanguageSlice as languageReducer } from 'redux/slices/language';
import { SingleProductDetailsSlice as singleProductReducer } from 'redux/slices/singleProductDetails';

export const slicers = {
  languageReducer,
  featuredProductsListReducer,
  singleProductReducer,
};
