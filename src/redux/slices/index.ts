import { FeaturedProductsListSlice } from 'redux/slices/featuredProductsList';
import { ChangeLanguageSlice } from 'redux/slices/language';
import { ProductSearchSlice } from 'redux/slices/search';
import { SingleProductDetailsSlice } from 'redux/slices/singleProductDetails';
import { UserLoginSlice } from 'redux/slices/login';
import { shoppingCartSlice } from 'redux/slices/shoppingCart';
import { orderSlice } from './order';

export default {
  featuredProductsListReducer: FeaturedProductsListSlice.reducer,
  singleProductReducer: SingleProductDetailsSlice.reducer,
  languageReducer: ChangeLanguageSlice.reducer,
  productSearchReducer: ProductSearchSlice.reducer,
  userLoginReducer: UserLoginSlice.reducer,
  shoppingCartReducer: shoppingCartSlice.reducer,
  orderReducer: orderSlice.reducer,
};
