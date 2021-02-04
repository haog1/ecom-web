import { actionLogMiddleware } from 'redux/middlewares/actionLog';
import { changeLanguageMiddleware } from 'redux/middlewares/changeLanguage';

export const middlewares = [actionLogMiddleware, changeLanguageMiddleware];
