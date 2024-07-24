import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {TopicDto, TopicDtoList} from "./topic.interface";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment.local";

@Injectable({ providedIn: 'root' })
export class TopicService {

  constructor(
    public http: HttpClient,
  ) {
  }

    getTopics(): Observable<TopicDtoList> {
        return this.http.get<TopicDto[]>(environment.apiBaseUrl + '/interview-topics', {withCredentials: true});
    }

}
