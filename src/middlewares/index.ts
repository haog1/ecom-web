import { actionLogMiddleware } from 'middlewares/actionLog';
import { changeLanguageMiddleware } from 'middlewares/changeLanguage';

export const middlewares = [actionLogMiddleware, changeLanguageMiddleware];
