import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HomeComponent } from './home.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from '../state/reducers/root-reducers';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/observable/of';
import { Store, StateObservable, ActionsSubject, ReducerManager, ReducerManagerDispatcher } from '@ngrx/store';
class MockCustomStore {
  select(): any {
    return Observable.of(false);
  }
}
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        StoreModule.forRoot(reducer)
      ],
      providers: [
        { provide: Store, useClass: MockCustomStore },
        StateObservable, ActionsSubject, ReducerManager, ReducerManagerDispatcher

      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
      .compileComponents();
    fixture = TestBed.createComponent(HomeComponent);

    component = fixture.componentInstance;
  });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(HomeComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should create an instance of ngoninit', () => {
    component.ngOnInit();
  });


});
