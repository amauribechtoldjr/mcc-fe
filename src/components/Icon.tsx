import { cva, type VariantProps } from "class-variance-authority";

import CardIcon from "@assets/icons/card.svg?react";
import FilterIcon from "@assets/icons/filter.svg?react";
import PlusIcon from "@assets/icons/plus.svg?react";
import UserIcon from "@assets/icons/user.svg?react";

/**
 * Icons are SVG files under `@assets/icons`, authored with `currentColor` so
 * they inherit the surrounding text color. Add new icons here to expose them.
 */
const iconRegistry = {
  card: CardIcon,
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
