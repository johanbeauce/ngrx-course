import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AuthState} from './reducers';

export const authSelector = createFeatureSelector<AuthState>('auth');

export const isLoggedIn = createSelector(
  authSelector,
  auth => !!auth.user
);

export const isLoggedOut = createSelector(
  isLoggedIn,
  loggedIn => !loggedIn
);
