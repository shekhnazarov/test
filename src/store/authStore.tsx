import { makeAutoObservable } from "mobx";

const getToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("token") || "";
  } else return "";
};

const setToken = (token: string) => {
  if (typeof window !== "undefined") {
    return localStorage.setItem("token", token);
  }
};

export class AuthStore {
  token: string = getToken();

  constructor() {
    makeAutoObservable(this);
  }

  setToken(newToken: string) {
    this.token = newToken;
    setToken(newToken);
  }

  removeToken() {
    this.token = "";
    localStorage.removeItem("token");
  }
}

const authStore = new AuthStore();
export default authStore;
