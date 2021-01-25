import {
  useSelector as useReduxSelect,
  TypedUseSelectorHook,
} from 'react-redux';
import { RootState } from 'redux/store';

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelect;
