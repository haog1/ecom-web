import { FeaturedProductsListSlice } from 'redux/slices/featuredProductsList';
import { ChangeLanguageSlice } from 'redux/slices/language';
import { SingleProductDetailsSlice } from 'redux/slices/singleProductDetails';

export default {
  featuredProductsListReducer: FeaturedProductsListSlice.reducer,
  singleProductReducer: SingleProductDetailsSlice.reducer,
  languageReducer: ChangeLanguageSlice.reducer,
};
