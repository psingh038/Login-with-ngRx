import { UserLoginActions, UserLoginActionTypes } from '../actions/user-login.actions';
import { User } from '../../core/models/user';

export const userLoginFeatureKey = 'userLogin';

export interface State {
  authenticated: boolean;
  error?: string;
  loaded: boolean;
  loading: boolean;
  user?: User;
}

export const initialState: State = {
  authenticated: false,
  loaded: false,
  loading: false
};

export function reducer(state = initialState, action: UserLoginActions): State {
  switch (action.type) {
    case UserLoginActionTypes.AUTHENTICATE:
      return Object.assign({}, state, {
        error: undefined,
        loading: true
      });

    case UserLoginActionTypes.AUTHENTICATED_ERROR:
      return Object.assign({}, state, {
        authenticated: false,
        error: action?.payload?.error?.message || 'Invalid email or password',
        loaded: true
      });

    case UserLoginActionTypes.AUTHENTICATED_SUCCESS:
      return Object.assign({}, state, {
        authenticated: action.payload.authenticated,
        loaded: true,
        user: action.payload.user
      });

    case UserLoginActionTypes.AUTHENTICATE_ERROR:
      return Object.assign({}, state, {
        authenticated: false,
        error: action?.payload?.error?.message || 'Invalid email or password',
        loading: false
      });

    case UserLoginActionTypes.AUTHENTICATE_SUCCESS:
      const user: User = action.payload.user;
      if (user === null) {
        return state;
      }

      return Object.assign({}, state, {
        authenticated: true,
        error: undefined,
        loading: false,
        user
      });

    default:
      return state;
  }
}
