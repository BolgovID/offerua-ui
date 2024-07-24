export interface PaginationRequest {
  pageNo: number,
  pageSize: number
  sortBy: string;
  direction: string;
}

export interface PaginationResponse {
  size: number,
  totalElements: number,
  totalPages: number,
  currentPage: number
}
