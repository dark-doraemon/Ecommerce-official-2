export interface Pagination {
    currentPage : number;
    itemsPerPage : number;
    totalItems :number;
    totalPages : number;
}

// T ở đây là List của mọi kiểu dữ liệu
export class PaginatedResult<T> {
    results? : T;
    pagination? :Pagination;
}