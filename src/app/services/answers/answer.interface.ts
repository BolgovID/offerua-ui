import {PaginationRequest, PaginationResponse} from "../../interfaces/pagination.interface";
import {QuestionDto} from "../questions/questions.interface";

export interface AnswerPaginationResponse extends PaginationResponse {
  content: AnswerDto[]
}

export interface IAnswerFilterRequest extends PaginationRequest {
}

export interface AnswersByQuestionResponse {
  question: QuestionDto
  answers: AnswerPaginationResponse
}

export interface AnswerDto {
  "id": string,
  "question": string,
  "answer": string,
  "rating": number,
  "createdBy": string,
  "createdDate": Date
}

export class AnswerFilterRequest implements IAnswerFilterRequest {
  pageNo = 0;
  pageSize = 15;
  sortBy = 'rating';
  direction = 'DESC';

  constructor(filter: { pageNo?: number, pageSize?: number, sortBy?: string, direction?: string }) {
    this.pageNo = filter.pageNo ?? this.pageNo
    this.pageSize = filter.pageSize ?? this.pageSize
    this.sortBy = filter.sortBy ?? this.sortBy;
    this.direction = filter.direction ?? this.direction;
  }
}

