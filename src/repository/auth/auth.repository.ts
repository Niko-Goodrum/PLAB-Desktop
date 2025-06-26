import axios from "axios";
import { Response } from "@/types/util/response";
import { SigninResponse, RefreshResponse } from "@/types/auth/auth.type";
import { SignupParams, SigninParams, RefreshParams } from "./auth.param";

const SERVER_URL = import.meta.env.Plab_Server;

class AuthRepository {
  public async postSignup(params: SignupParams): Promise<Response> {
    const { data } = await axios.post(`${SERVER_URL}/auth/signup`, params);

    return data;
  }

  public async postSignin(params: SigninParams): Promise<SigninResponse> {
    const { data } = await axios.post(`${SERVER_URL}/auth/signin`, params);

    return data;
  }

  public async postRefreshToken(
    params: RefreshParams
  ): Promise<RefreshResponse> {
    const { data } = await axios.post(`${SERVER_URL}/auth/refresh`, params);
    return data;
  }
}

const authRepository = new AuthRepository();
export default authRepository;
