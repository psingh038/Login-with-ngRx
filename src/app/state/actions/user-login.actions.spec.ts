import * as UserLoginActions from './user-login.actions';

describe('UserLogin', () => {
  it('should create an instance', () => {
    expect(UserLoginActions).toBeTruthy();
  });
});

describe('AuthenticateAction', () => {
  it('should create an instance', () => {
    expect(UserLoginActions.AuthenticateAction).toBeTruthy();
  });
});

describe('AuthenticatedAction', () => {
  it('should create an instance', () => {
    expect(UserLoginActions.AuthenticatedAction).toBeTruthy();
  });
});

describe('AuthenticatedSuccessAction', () => {
  it('should create an instance', () => {
    expect(UserLoginActions.AuthenticatedSuccessAction).toBeTruthy();
  });
});

describe('AuthenticatedErrorAction', () => {
  it('should create an instance', () => {
    expect(UserLoginActions.AuthenticatedErrorAction).toBeTruthy();
  });
});

describe('AuthenticationErrorAction', () => {
  it('should create an instance', () => {
    expect(UserLoginActions.AuthenticationErrorAction).toBeTruthy();
  });
});

describe('AuthenticationSuccessAction', () => {
  it('should create an instance', () => {
    expect(UserLoginActions.AuthenticationSuccessAction).toBeTruthy();
  });
});

describe('UserLogin actions', () => {
  it('shold create an action', () => {
    const action = new UserLoginActions.AuthenticateAction({ email: 'psingh038@ibm.com', password: 'India@2021' });
    expect(action.type).toEqual('[UserLogin] Authenticate');
  });
});

describe('UserLogin actions', () => {
  it('shold create an action', () => {
    const action = new UserLoginActions.AuthenticatedSuccessAction({ authenticated: true, user: { email: 'psingh038@ibm.com', password: 'India@2021' } });
    expect(action.type).toEqual('[UserLogin] Authenticated success');
  });
});
