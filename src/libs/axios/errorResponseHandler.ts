import { AxiosError } from "axios";
import token from "../token/token";
import {
  REQUEST_TOKEN_KEY,
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "@/constants/token/token.constant";
import { customAxios } from "./customAxios";
import { usePostRefreshToken } from "@/queries/auth/auth.query";

let isRefreshing = false;

let refreshSubscribers: ((accessToken: string) => void)[] = [];

const onTokenRefreshed = (accessToken: string) => {
  refreshSubscribers.map((callback) => callback(accessToken));
};

const addRefreshSubscriber = (callback: (accessToken: string) => void) => {
  refreshSubscribers.push(callback);
};

const errorResponseHandler = async (error: AxiosError) => {
  if (error.response) {
    const currentAccessToken = token.getToken(ACCESS_TOKEN_KEY);
    const currentRefreshToken = token.getToken(REFRESH_TOKEN_KEY);

    const {
      config,
      response: { status },
    } = error;

    if (
      currentAccessToken !== undefined &&
      currentRefreshToken !== undefined &&
      status === 401
    ) {
      if (!isRefreshing) {
        isRefreshing = true;

        try {
          const { data: newAccessToken } = await usePostRefreshToken({
            refresh_token: currentRefreshToken,
          });

          customAxios.defaults.headers.common[
            REQUEST_TOKEN_KEY
          ] = `Bearer ${newAccessToken}`;

          token.setToken(ACCESS_TOKEN_KEY, newAccessToken.accessToken);

          isRefreshing = false;

          onTokenRefreshed(newAccessToken.accessToken);
        } catch (error) {
          window.alert("세션이 만료되었습니다.");
          token.clearToken();
          window.location.href = "/signup";
        }
      }
      return new Promise((resolve) => {
        addRefreshSubscriber((accessToken: string) => {
          config!.headers![REQUEST_TOKEN_KEY] = `Bearer ${accessToken}`;
          resolve(customAxios(config!));
        });
      });
    }
  }
};

export default errorResponseHandler;
