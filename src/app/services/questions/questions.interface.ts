import { PaginationRequest, PaginationResponse } from "../../interfaces/pagination.interface";

export interface IQuestionFilterRequest extends PaginationRequest {
    questionTopic: string
}

export interface QuestionPaginationResponse extends PaginationResponse {
    content: QuestionDto[]
}

export interface QuestionDto {
    id: string,
    question: string,
    subTopic: string,
    probability: number
}

export class QuestionFilterRequest implements IQuestionFilterRequest {
    questionTopic: string = '';
    pageNo = 0;
    pageSize = 15;
    sortBy = 'probability';
    direction = 'DESC';

    constructor(filter: { questionTopic?: string, pageNo?: number, pageSize?: number, sortBy?: string, direction?: string }) {
        this.questionTopic = filter.questionTopic ?? this.questionTopic;
        this.pageNo = filter.pageNo ?? this.pageNo;
        this.pageSize = filter.pageSize ?? this.pageSize;
        this.sortBy = filter.sortBy ?? this.sortBy;
        this.direction = filter.direction ?? this.direction;
    }
}
