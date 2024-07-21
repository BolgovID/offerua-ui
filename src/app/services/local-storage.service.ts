import {Injectable} from "@angular/core";
import {UserDto} from "./users/user.interface";

export interface ILocalStorageConfig {
  set: (value: string) => void,
  get: string,
  clean: () => void,
}

export enum LocalStorageKey {
  UserId = "userId",
  Username = "username",
  Firstname = "firstname",
  Surname = "surname",
  Email = "email"
}

@Injectable({providedIn: 'root'})
export class LocalStorageService {

  prop(key: LocalStorageKey): ILocalStorageConfig {
    const set = (value: string) => {
      if (value) localStorage.setItem(key, value);
    }

    const get = localStorage.getItem(key) || '';

    const clean = () => localStorage.removeItem(key);

    return {set, get, clean};
  }

  setUserAuth(user: UserDto) {
    this.prop(LocalStorageKey.UserId).set(user.id)
    this.prop(LocalStorageKey.Username).set(user.username)
    this.prop(LocalStorageKey.Firstname).set(user.firstName)
    this.prop(LocalStorageKey.Surname).set(user.surname)
    this.prop(LocalStorageKey.Email).set(user.email)
  }

  cleanAll() {
    localStorage.clear();
  }
}
