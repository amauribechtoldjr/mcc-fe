import { cva, type VariantProps } from "class-variance-authority";

import CardIcon from "@assets/icons/card.svg?react";
import ChevronLeftIcon from "@assets/icons/chevron-left.svg?react";
import ChevronRightIcon from "@assets/icons/chevron-right.svg?react";
import FilterIcon from "@assets/icons/filter.svg?react";
import PlusIcon from "@assets/icons/plus.svg?react";
import UserIcon from "@assets/icons/user.svg?react";

const iconRegistry = {
  card: CardIcon,
  "chevron-left": ChevronLeftIcon,
  "chevron-right": ChevronRightIcon,
  filter: FilterIcon,
  plus: PlusIcon,
  user: UserIcon,
};

export type IconName = keyof typeof iconRegistry;

const iconStyles = cva("shrink-0", {
  variants: {
    size: {
      xs: "size-3",
      sm: "size-4",
      md: "size-5",
      lg: "size-6",
      xl: "size-8",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type IconProps = {
  icon: IconName;
  className?: string;
} & VariantProps<typeof iconStyles>;

export const Icon = ({ icon, className, ...variants }: IconProps) => {
  const Glyph = iconRegistry[icon];

  return (
    <Glyph
      className={iconStyles({ ...variants, className })}
      aria-hidden="true"
      focusable="false"
    />
  );
};
