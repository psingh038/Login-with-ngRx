import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as RouterAction from './route-actions';

import { Router } from '@angular/router';

import { isAuthenticated, State } from '../state/reducers/root-reducers';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private store: Store<State>, private router: Router) { }

  canActivate(
    route?: ActivatedRouteSnapshot,
    state?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const observable = this.store.select(isAuthenticated);

    // redirect to sign in page if user is not authenticated
    observable.subscribe(authenticated => {
      if (!authenticated) {
        // this.store.dispatch(new RouterAction.Go({ path: '/' }));
        this.router.navigate(['/']);
      }
    });

    return observable;
  }

  // canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
  //   const observable = this.store.select(isAuthenticated);
  //   observable.subscribe(authenticated => {
  //     if (!authenticated) {
  //       // this.store.dispatch(new RouterAction.Go({ path: '/' }));
  //       this.router.navigate(['/']);
  //     }
  //   });

  //   return observable;
  // }

}
