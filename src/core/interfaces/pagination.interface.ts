export interface PaginationInterface<T> {
  data: T[];
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  message: string;
  nextPage: number;
  page: number;
  prevPage: number;
  totalDocs: number;
  totalPages: number;
  results: number;
}
