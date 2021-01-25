import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { tap, switchMap, catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { UserService } from '../../core/services/user.service';

import {
  UserLoginActionTypes,
  AuthenticatedErrorAction,
  AuthenticatedSuccessAction,
  AuthenticationErrorAction,
  AuthenticationSuccessAction
} from '../actions/user-login.actions';


@Injectable()
export class UserLoginEffects {
  constructor(private actions$: Actions, private userService: UserService, private router: Router) { }

  @Effect()
  public authenticate: Observable<Action> = this.actions$.pipe(
    ofType(UserLoginActionTypes.AUTHENTICATE),
    // .debounceTime(500)
    switchMap((payload: any) => {
      return this.userService.authenticate(payload.payload.email, payload.payload.password).pipe(
        map(user => new AuthenticationSuccessAction({ user })),
        tap(() => this.router.navigate(['/home'])),
        catchError(error => of(new AuthenticationErrorAction({ error }))));
    }));

  // @Effect()
  // public authenticated: Observable<Action> = this.actions$.pipe
  //   (ofType(UserLoginActionTypes.AUTHENTICATED))
  //   .switchMap(payload => {
  //     return this.userService.authenticatedUser()
  //       .map(user => new AuthenticatedSuccessAction({ authenticated: (user && user !== null), user: user }))
  //       .catch(error => of(new AuthenticatedErrorAction({ error: error })));
  //   });

}
