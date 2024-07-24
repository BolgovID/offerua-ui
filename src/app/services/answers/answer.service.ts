import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment.local";
import {AnswerFilterRequest, AnswersByQuestionResponse} from "./answer.interface";
import {getQueryParams} from "../query.interface";

@Injectable({providedIn: 'root'})
export class AnswerService {

  constructor(
    public http: HttpClient,
  ) {
  }

  getAnswers(id: string, filter: AnswerFilterRequest): Observable<AnswersByQuestionResponse> {
    return this.http.get<AnswersByQuestionResponse>(environment.apiBaseUrl + `/questions/${id}/answers`, getQueryParams(filter));
  }
}
