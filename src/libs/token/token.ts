import session from "@/libs/session/session.js";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "@/constants/token/token.constant.js";

class Token {
  public getToken(key: string) {
    return session.getToken(key);
  }

  public setToken(key: string, value: string) {
    session.setToken(key, value);
  }

  public clearToken() {
    session.removeToken(ACCESS_TOKEN_KEY);
    session.removeToken(REFRESH_TOKEN_KEY);
  }
}

export default new Token();