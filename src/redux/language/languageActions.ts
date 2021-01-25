export const SET_INIT_LANGUAGE = 'langauges/setInitLanguage';
export const CHANGE_LANGUAGE = 'langauges/updateCurrLanguage';
export const ADD_LANGUAGE = 'langauges/addLanguage';

type LanguageCodeType = 'en' | 'zh';

interface ChangeLanguageAction {
  type: typeof SET_INIT_LANGUAGE | typeof CHANGE_LANGUAGE;
  payload: LanguageCodeType;
}

interface AddLanguageAction {
  type: typeof ADD_LANGUAGE;
  payload: {
    name: string;
    code: LanguageCodeType;
  };
}

export type LanguageActionType = AddLanguageAction | ChangeLanguageAction;

export const setInitLanguageCreator = (
  code: LanguageCodeType = 'en',
): ChangeLanguageAction => {
  return {
    type: SET_INIT_LANGUAGE,
    payload: code,
  };
};

export const changeLanguageActionCreator = (
  code: LanguageCodeType,
): ChangeLanguageAction => {
  return {
    type: CHANGE_LANGUAGE,
    payload: code,
  };
};

export const addLanguageActionCreator = (
  name: string,
  code: LanguageCodeType,
): AddLanguageAction => {
  return {
    type: ADD_LANGUAGE,
    payload: {
      name,
      code,
    },
  };
};
