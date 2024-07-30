import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment.local";
import { Observable } from "rxjs";
import { getQueryParams } from "../query.interface";
import { AllTechQuestionResponse, QuestionPaginationRequest, QuestionPaginationResponse } from "./questions.interface";

@Injectable({ providedIn: 'root' })
export class QuestionService {

  constructor(
    public http: HttpClient,
  ) { }

  getQuestions(technologyName: string, filter: QuestionPaginationRequest): Observable<AllTechQuestionResponse> {
    const options = {
      params: getQueryParams(filter),
      withCredentials: true,
    };

    return this.http.get<AllTechQuestionResponse>(environment.apiBaseUrl + `/technologies/${technologyName}/questions`, options);
  }
}