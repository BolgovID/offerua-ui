import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import { TechDtoList as TechDtoList } from "./technology.interface";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment.local";

@Injectable({ providedIn: 'root' })
export class TechnologyService {

  constructor(
    public http: HttpClient,
  ) {
  }

    getTechnologies(): Observable<TechDtoList> {
        return this.http.get<TechDtoList>(environment.apiBaseUrl + '/technologies', {withCredentials: true});
    }

}
