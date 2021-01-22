import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector, createReducer,
  createSelector,
  MetaReducer, on
} from '@ngrx/store';
import {AuthActions} from '../actions-type';
import {User} from '../model/user.model';

export interface AuthState {
  user: User;
}

export const initialAuthState: AuthState = {
  user: undefined
};

export const authReducer = createReducer(
  initialAuthState,

  on(AuthActions.login, (state, action) => {
    console.log('reducer.on login', state, action);
    return {
      user: action.user
    };
  }),

  on(AuthActions.logout, (state, action) => {
    console.log('reducer.on logout');
    return {
      user: undefined
    };
  })
);
