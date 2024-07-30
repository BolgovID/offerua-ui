import { PaginationRequest, PaginationResponse } from "../../interfaces/pagination.interface";

export interface QuestionPaginationResponse extends PaginationResponse {
    content: QuestionList
}

export type QuestionList = Array<QuestionDto>

export interface QuestionDto {
    id: string,
    question: string,
    topic: string,
    probability: number
}


export interface TechnologyDto{
    id: string,
    technologyDisplayName: string,
    technologyName: string,
}

export interface TopicDto{
    id: string,
    name: string
}

export type TopicList = Array<TopicDto>

export type AllTechQuestionResponse = {
    technology: TechnologyDto,
    topics: TopicList,
    questions: QuestionPaginationResponse
}

export class QuestionPaginationRequest implements PaginationRequest {
    pageNo = 0;
    pageSize = 15;
    sortBy = 'probability';
    direction = 'DESC';

    constructor(filter: { pageNo?: number, pageSize?: number, sortBy?: string, direction?: string }) {
        this.pageNo = filter.pageNo ?? this.pageNo;
        this.pageSize = filter.pageSize ?? this.pageSize;
        this.sortBy = filter.sortBy ?? this.sortBy;
        this.direction = filter.direction ?? this.direction;
    }
}
