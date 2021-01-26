import { Middleware } from 'redux';

export const actionLogMiddleware: Middleware = store => next => action => {
  console.log('before: ', store.getState());
  console.log('fire action: ', action);
  next(action);
  console.log('after: ', store.getState());
};
