import type { PaginatedResponse } from "@app-types/axios.types";
import { Button } from "@components/Button";
import { Icon } from "@components/Icon";

const DOTS = "dots";

type PageItem = number | typeof DOTS;

type PaginationProps = {
  total: PaginatedResponse<unknown>["total"];
  page: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
  className?: string;
};

const range = (start: number, end: number): number[] =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);

const getPageItems = (
  totalPages: number,
  page: number,
  siblingCount: number,
): PageItem[] => {
  const totalPageNumbers = siblingCount * 2 + 5;

  if (totalPageNumbers >= totalPages) return range(1, totalPages);

  const leftSibling = Math.max(page - siblingCount, 1);
  const rightSibling = Math.min(page + siblingCount, totalPages);

  const showLeftDots = leftSibling > 2;
  const showRightDots = rightSibling < totalPages - 1;

  if (!showLeftDots && showRightDots) {
    const leftItemCount = 3 + 2 * siblingCount;
    return [...range(1, leftItemCount), DOTS, totalPages];
  }

  if (showLeftDots && !showRightDots) {
    const rightItemCount = 3 + 2 * siblingCount;
    return [1, DOTS, ...range(totalPages - rightItemCount + 1, totalPages)];
  }

  return [1, DOTS, ...range(leftSibling, rightSibling), DOTS, totalPages];
};

export const Pagination = ({
  total,
  page,
  pageSize,
  onPageChange,
  siblingCount = 1,
  className,
}: PaginationProps) => {
  const totalPages = Math.ceil(total / pageSize);

  if (totalPages <= 1) return null;

  const items = getPageItems(totalPages, page, siblingCount);

  return (
    <nav
      aria-label="Paginação"
      className={`flex items-center justify-center gap-1.5 ${className ?? ""}`}
    >
      <Button
        variant="ghost"
        shape="circle"
        size="sm"
        aria-label="Página anterior"
        disabled={page <= 1}
        onClick={() => onPageChange(page - 1)}
      >
        <Icon icon="chevron-left" size="sm" />
      </Button>

      {items.map((item, index) =>
        item === DOTS ? (
          <span
            key={`dots-${index}`}
            aria-hidden="true"
            className="flex size-8 items-center justify-center text-mred/50"
          >
            …
          </span>
        ) : (
          <Button
            key={item}
            variant={item === page ? "accent" : "ghost"}
            shape="circle"
            size="sm"
            aria-label={`Página ${item}`}
            aria-current={item === page ? "page" : undefined}
            onClick={() => onPageChange(item)}
          >
            {item}
          </Button>
        ),
      )}

      <Button
        variant="ghost"
        shape="circle"
        size="sm"
        aria-label="Próxima página"
        disabled={page >= totalPages}
        onClick={() => onPageChange(page + 1)}
      >
        <Icon icon="chevron-right" size="sm" />
      </Button>
    </nav>
  );
};
