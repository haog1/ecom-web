import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LanguageState {
  language: string;
}

const initialState: LanguageState = {
  language: 'en',
};

export const ChangeLanguageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    switchLanguage: (state: LanguageState, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
  },
  extraReducers: {},
});
