import type { ReactNode } from "react";

type CardGridProps = {
  children: ReactNode;
  className?: string;
};

export const CardGrid = ({ children, className }: CardGridProps) => {
  return (
    <div
      className={`grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 ${className ?? ""}`}
    >
      {children}
    </div>
  );
};
