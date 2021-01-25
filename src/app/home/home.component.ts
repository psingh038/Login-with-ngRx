import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as RouterAction from '../shared/route-actions';

import { Observable } from 'rxjs';
import {
  getAuthenticatedUser,
  State
} from '../state/reducers/root-reducers';

// models
import { User } from '../core/models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public user: Observable<User | any>;

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.user = this.store.select(getAuthenticatedUser) || {};
  }
}
