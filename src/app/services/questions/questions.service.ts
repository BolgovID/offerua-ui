import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment.local";
import { Observable } from "rxjs";
import { getQueryParams } from "../query.interface";
import { QuestionFilterRequest, QuestionPaginationResponse } from "./questions.interface";
import { IPropertyString } from "../../interfaces/global.interface";

@Injectable({ providedIn: 'root' })
export class QuestionService {

  constructor(
    public http: HttpClient,
  ) { }

  getQuestions(id: string, filter: QuestionFilterRequest): Observable<QuestionPaginationResponse> {
    const options = {
      params: getQueryParams(filter),
      withCredentials: true,
    };

    return this.http.get<QuestionPaginationResponse>(environment.apiBaseUrl + `/questions/topics/${id}`, options);
  }
}