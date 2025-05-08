import axios from "axios";
import config from "@/config/config.json";
import { Response } from "@/types/util/response";
import { SigninResponse, RefreshResponse } from "@/types/auth/auth.type";
import { SignupParams, SigninParams, RefreshParams } from "./auth.param";

class AuthRepository {
  public async postSignup(params: SignupParams): Promise<Response> {
    const { data } = await axios.post(
      `${config.Plab_Server}/auth/signup`,
      params
    );

    return data;
  }

  public async postSignin(params: SigninParams): Promise<SigninResponse> {
    const { data } = await axios.post(
      `${config.Plab_Server}/auth/signin`,
      params
    );

    return data;
  }

  public async postRefreshToken(
    params: RefreshParams
  ): Promise<RefreshResponse> {
    const { data } = await axios.post(
      `${config.Plab_Server}/auth/refresh`,
      params
    );

    return data;
  }
}

const authRepository = new AuthRepository();
export default authRepository;
