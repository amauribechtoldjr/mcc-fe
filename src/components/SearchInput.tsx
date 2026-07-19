import { Icon, type IconName } from "@components/Icon";
import type { InputHTMLAttributes } from "react";

type SearchInputProps = {
  icon?: IconName;
} & InputHTMLAttributes<HTMLInputElement>;

export const SearchInput = ({
  icon,
  className,
  ...props
}: SearchInputProps) => {
  return (
    <div className={`relative w-full ${className ?? ""}`}>
      <input
        type="search"
        className="w-full rounded-lg border-2 border-mred/15 bg-mred/5 px-5 py-3.5 pr-14 text-mred outline-none transition placeholder:text-mred/50 focus:border-morange focus:ring-2 focus:ring-morange/40"
        {...props}
      />
      {icon && (
        <span className="pointer-events-none absolute inset-y-0 right-5 flex items-center text-mred">
          <Icon icon={icon} size="lg" />
        </span>
      )}
    </div>
  );
};
