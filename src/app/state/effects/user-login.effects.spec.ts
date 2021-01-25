import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { hot, cold } from 'jasmine-marbles';

import { User } from '../../core/models/user';
import { UserLoginEffects } from './user-login.effects';
import { UserService, TEST_USER } from '../../core/services/user.service';
import * as userLoginAction from '../actions/user-login.actions';

describe('UserLoginEffects', () => {
  let actions$: Observable<any>;
  let effects: UserLoginEffects;
  // let service: UserService;
  const user: User = {
    email: 'test@domain.com',
    password: 'Test@123'
  };
  const error: any = { status: 401, message: '401 Unauthorized Error' };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [
        UserLoginEffects,
        UserService,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(UserLoginEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should work', () => {
    const action = new userLoginAction.AuthenticateAction({
      email: 'test@domain.com',
      password: 'Test@123'
    });
    const completion = new userLoginAction.AuthenticationSuccessAction({ user: TEST_USER });
    actions$ = hot('a|', { a: action });
    const expected = cold('b|', { b: completion });

    expect(effects.authenticate).toBeObservable(expected);
  });

  // it('should work', () => {
  //   const action = new userLoginAction.AuthenticatedAction();
  //   const completion = new userLoginAction.AuthenticatedSuccessAction(undefined);
  //   actions$ = hot('a|', { a: action });
  //   const expected = cold('b|', { b: completion });

  //   expect(effects.authenticate).toBeObservable(expected);
  // });
});
