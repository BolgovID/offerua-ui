import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment.local";
import { TopicDto, TopicUpdateRequest } from "./topics.interface";

@Injectable({ providedIn: 'root' })
export class TopicsService {

  constructor(
    public http: HttpClient,
  ) {
  }

  createTopic(techId: string, topic: string): Observable<TopicDto> {
    return this.http.post<TopicDto>(environment.apiBaseUrl + `/technologies/${techId}/topics`, { name: topic }, { withCredentials: true });
  }

}