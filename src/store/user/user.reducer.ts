import { AnyAction } from 'redux';
import { UserData } from '../../utils/firebase/firebase.utils';
import {
  signInFailed,
  signInSuccess,
  signOutFailed,
  signOutSuccess,
  signUpFailed
} from './user.actions';

export type UserState = {
  currentUser: null | UserData;
  isLoading: boolean;
  error: null | Error;
};

const USER_INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null
};

export const userReducer = (
  state = USER_INITIAL_STATE,
  action: AnyAction
): UserState => {
  if (signInSuccess.match(action)) {
    return { ...state, currentUser: action.payload };
  }

  if (signOutSuccess.match(action)) {
    return { ...state, currentUser: null };
  }

  if (
    signInFailed.match(action) ||
    signUpFailed.match(action) ||
    signOutFailed.match(action)
  ) {
    return { ...state, error: action.payload };
  }

  return state;
};
