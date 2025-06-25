import cookie from "js-cookie";

class Cookie {
  public getCookie(key: string) {
    return cookie.get(key);
  }

  public setCookie(key: string, value: string) {
    cookie.set(key, value, {
      path: "/",
      secure: true,
      sameSite: "None"
    });
  }

  public removeCookie(key: string) {
    cookie.remove(key);
  }
}

export default new Cookie();