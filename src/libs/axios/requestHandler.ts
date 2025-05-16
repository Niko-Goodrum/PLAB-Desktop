import {
  REQUEST_TOKEN_KEY,
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "@/constants/token/token.constant";
import { InternalAxiosRequestConfig } from "axios";
import token from "../token/token";

const requestHandler = (config: InternalAxiosRequestConfig) => {
  if (token.getToken(REFRESH_TOKEN_KEY) === undefined) {
    alert("세션이 만료었습니다.");
    window.location.href = "/signup";
  } else {
    config.headers[REQUEST_TOKEN_KEY] = `Bearer ${token.getToken(
      ACCESS_TOKEN_KEY
    )}`;
  }

  return config;
};

export default requestHandler;
