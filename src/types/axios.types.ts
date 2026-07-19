export type EntityResponse<T> = {
  data: T;
};

export type PaginatedResponse<T> = {
  data: T[];
  total: number;
};
