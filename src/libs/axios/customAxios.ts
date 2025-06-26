import axios, { AxiosRequestConfig } from "axios";
import token from "../token/token";
import {
  REQUEST_TOKEN_KEY,
  ACCESS_TOKEN_KEY,
} from "@/constants/token/token.constant";
import requestHandler from "./requestHandler";
import errorResponseHandler from "./errorResponseHandler";

const SERVER_URL = import.meta.env.VITE_Plab_Server;

const createAxiosInstance = (config: AxiosRequestConfig) => {
  const baseConfig: AxiosRequestConfig = {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };

  return axios.create({
    ...baseConfig,
    ...config,
  });
};

export const PlabAxios = createAxiosInstance({
  baseURL: SERVER_URL,
  headers: {
    [REQUEST_TOKEN_KEY]: `Bearer ${token.getToken(ACCESS_TOKEN_KEY)}`!,
  },
});

PlabAxios.interceptors.request.use(requestHandler, (res) => res);
PlabAxios.interceptors.response.use((res) => res, errorResponseHandler);
