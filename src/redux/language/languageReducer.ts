import {
  ADD_LANGUAGE,
  CHANGE_LANGUAGE,
  LanguageActionType,
  SET_INIT_LANGUAGE,
} from './languageActions';

export interface LanguageState {
  language: 'en' | 'zh';
}

const defaultState: LanguageState = {
  language: 'en',
};

export default (
  state: LanguageState = defaultState,
  action: LanguageActionType,
) => {
  let newState = defaultState;
  switch (action.type) {
    case SET_INIT_LANGUAGE:
    case CHANGE_LANGUAGE:
      newState = { ...state, language: action.payload };
      break;
    case ADD_LANGUAGE:
      newState = {
        ...state,
      };
      break;
    default:
      newState = state;
      break;
  }

  // Side effect
  // if (newState.language !== state.language) {
  //   i18n.changeLanguage(newState.language);
  // }

  return newState;
};
