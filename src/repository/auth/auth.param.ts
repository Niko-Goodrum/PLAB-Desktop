export interface SignupParams {
  email: string;
  password: string;
  username: string;
}

export interface SigninParams {
  email: string;
  password: string;
}

export interface SigninResponse {
  access_token: string;
  refresh_token: string;
}

export interface RefreshParams {
  refresh_token: string;
}

export interface RefreshResponse {
  access_token: string;
}
