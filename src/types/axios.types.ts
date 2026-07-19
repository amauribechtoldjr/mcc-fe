export type EntityResponse<T> = {
  data: T;
};

export type PaginatedResponse<T> = {
  data: T[];
  page: number;
  page_size: number;
  total: number;
};

export type PaginatedParams = {
  limit: number;
  offset: number;
};
