import { reducer, initialState } from './user-login.reducer';
import * as UserLoginActions from '../actions/user-login.actions';
import { Store, StoreModule } from '@ngrx/store';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { User } from '../../core/models/user';
import { TEST_USER } from '../../core/services/user.service';

describe('UserLogin Reducer', () => {

  let user: User = new User();
  beforeEach(() => {
    user = TEST_USER;
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(reducer)],
      providers: [
        { provide: Store, useClass: Store }
      ]
    })
      .compileComponents();
  });

  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('AUTHENTICATE action', () => {
    it('should set loading to true', () => {
      const userData = { email: 'psingh038@ibm.com', password: 'India@2021' };
      const action = new UserLoginActions.AuthenticateAction(userData);
      const state = reducer(initialState, action);
      expect(state.loading).toEqual(true);
      expect(state.error).toEqual(undefined);
    });
  });

  describe('AUTHENTICATE_ERROR action', () => {
    it('should return some error', () => {
      const action = new UserLoginActions.AuthenticationErrorAction();
      const state = reducer(initialState, action);
      expect(state.authenticated).toEqual(false);
      expect(state.loading).toEqual(false);
      expect(state.error).toEqual('Invalid email or password');
    });
  });

  describe('AUTHENTICATED_ERROR action', () => {
    it('should return some error', () => {
      const action = new UserLoginActions.AuthenticatedErrorAction();
      const state = reducer(initialState, action);
      expect(state.authenticated).toEqual(false);
      expect(state.loaded).toEqual(true);
      expect(state.error).toEqual('Invalid email or password');
    });
  });

  describe('AUTHENTICATED_SUCCESS action', () => {
    it('should return user', () => {
      const action = new UserLoginActions.AuthenticatedSuccessAction({ authenticated: true, user });
      const state = reducer(initialState, action);
      expect(state.authenticated).toEqual(true);
      expect(state.loaded).toEqual(true);
      expect(state.user).toEqual(user);
    });
  });

  describe('AUTHENTICATE_SUCCESS action', () => {
    it('should return user', () => {
      const action = new UserLoginActions.AuthenticationSuccessAction({ user });
      const state = reducer(initialState, action);
      expect(state.authenticated).toEqual(true);
      expect(state.error).toEqual(undefined);
      expect(state.loading).toEqual(false);
      expect(state.user).toEqual(user);
    });
  });

});
