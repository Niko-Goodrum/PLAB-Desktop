export interface SignupParams {
  email: string;
  password: string;
  username: string;
}

export interface SigninParams {
  email: string;
  password: string;
}

export interface RefreshParams {
  refresh_token: string;
}