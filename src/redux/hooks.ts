import {
  TypedUseSelectorHook,
  useSelector as useReduxSelect,
} from 'react-redux';

import { RootState } from 'redux/store';

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelect;
