class TokenStorage {
  public getToken(key: string): string | null {
    return sessionStorage.getItem(key);
  }

  public setToken(key: string, value: string): void {
    sessionStorage.setItem(key, value);
  }

  public removeToken(key: string): void {
    sessionStorage.removeItem(key);
  }
}

export default new TokenStorage();