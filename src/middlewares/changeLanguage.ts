import i18n from 'i18next';
import { Middleware } from 'redux';

export const changeLanguageMiddleware: Middleware = store => next => action => {
  const langBefore = store.getState().languageReducer.language;
  next(action);
  const langAfter = store.getState().languageReducer.language;

  if (langBefore !== langAfter) {
    i18n.changeLanguage(langAfter);
  }
};
