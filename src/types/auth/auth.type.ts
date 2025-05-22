import { Response } from "../util/response";

export interface SigninResponse extends Response {
  data: {
    access_token: string;
    refresh_token: string;
  };
}

export interface RefreshResponse extends Response {
  data: {
    access_token: string;
    refresh_token: string;
  };
}
