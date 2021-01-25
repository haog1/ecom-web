// Reducer is a pure function
export interface LanguageState {
  language: 'en' | 'zh';
  languageList: {
    name: string;
    code: string;
  }[];
}

const defaultState: LanguageState = {
  language: 'en',
  languageList: [],
};

export interface LanguageActionProps {
  type: string;
  payload: any;
}

// State is immutable
export default (
  state: LanguageState = defaultState,
  action: LanguageActionProps,
) => {
  let newState = defaultState;
  switch (action.type) {
    case 'langauges/setInitLanguage':
    case 'langauges/updateCurrLanguage':
      newState = { ...state, ...action.payload };
      break;
    case 'languages/addLanguage':
      newState = {
        ...state,
        languageList: [...state.languageList, action.payload],
      };
      break;
    default:
      newState = state;
      break;
  }
  return newState;
};
