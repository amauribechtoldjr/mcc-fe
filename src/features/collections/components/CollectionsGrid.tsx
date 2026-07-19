import type { ReactNode } from "react";

type CollectionsGridProps = {
  children: ReactNode;
};

export const CollectionsGrid = ({ children }: CollectionsGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {children}
    </div>
  );
};
