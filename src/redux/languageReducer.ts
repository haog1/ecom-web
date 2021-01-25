// reducer is a pure function
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

// state is immutable
export default (
  state: LanguageState = defaultState,
  action: LanguageActionProps,
) => {
  if (action.type === 'langauges/setInitLanguage') {
    const newState = { ...state, ...action.payload };
    return newState;
  } else if (action.type === 'langauges/updateCurrLanguage') {
    const newState = { ...state, ...action.payload };
    return newState;
  }
  return state; // return new state
};
