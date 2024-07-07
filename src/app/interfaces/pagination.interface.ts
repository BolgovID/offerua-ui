export interface PaginationRequest {
    pageNo: number,
    pageSize: number
    sortBy: string;
    direction: string;
}

export interface PaginationResponse {
    totalPages: number,
    totalElements: number,
    first: boolean,
    last: boolean,
    size: number,
    number: number,
    sort: {
        empty: boolean,
        sorted: boolean,
        unsorted: boolean
    },
    numberOfElements: number,
    pageable: string,
    empty: false
}