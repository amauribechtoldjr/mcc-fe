import { useCallback, useState } from "react";

type UsePaginationProps = {
  pageSize?: number;
  initialPage?: number;
};

export const usePagination = ({
  pageSize: initialPageSize = 20,
  initialPage = 1,
}: UsePaginationProps = {}) => {
  const [page, setPage] = useState(initialPage);
  const [pageSize, setPageSize] = useState(initialPageSize);

  const reset = useCallback(() => setPage(1), []);

  return {
    page,
    pageSize,
    limit: pageSize,
    offset: (page - 1) * pageSize,
    setPage,
    setPageSize,
    reset,
  };
};
