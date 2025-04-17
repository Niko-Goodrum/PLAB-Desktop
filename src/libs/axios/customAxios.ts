import config from "@/config/config.json";
import axios, { AxiosRequestConfig } from "axios";
import token from "../token/token";
import {
  REQUEST_TOKEN_KEY,
  ACCESS_TOKEN_KEY,
} from "@/constants/token/token.constant";
import requestHandler from "./requestHandler";

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

export const customAxios = createAxiosInstance({
  baseURL: config.Plab_Server,
  headers: {
    [REQUEST_TOKEN_KEY]: `Bearer ${token.getToken(ACCESS_TOKEN_KEY)}`!,
  },
});

customAxios.interceptors.request.use(requestHandler, (res) => res);
// customAxios.interceptors.response.use((res) => res, _);
