import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.local";
import {Observable} from "rxjs";
import {UserDto} from "./user.interface";

@Injectable({providedIn: 'root'})
export class UserService {

  constructor(
    public http: HttpClient,
  ) {
  }

  confirmRegistration(data: string): Observable<UserDto> {
    return this.http.post<UserDto>(environment.apiBaseUrl + `/confirm-registration`, data);
  }

  signIn(username: string, password: string): Observable<any> {
    return this.http.post<any>(environment.apiBaseUrl + `/auth/login`, {username, password});
  }

}
