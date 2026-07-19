import { cva, type VariantProps } from "class-variance-authority";
import type { ElementType, ReactNode } from "react";

export type TypographyVariantProps = VariantProps<typeof typographyStyles>;
const typographyStyles = cva("", {
  variants: {
    colors: {
      red: "text-mred",
      white: "text-mwhite",
      orange: "text-morange",
      green: "text-mgreen",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-2xl",
      display: "text-4xl leading-tight md:text-5xl",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    colors: "red",
    size: "md",
    weight: "normal",
  },
});

type TypographyProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
} & TypographyVariantProps;

export const Typography = ({
  children,
  as: Component = "span",
  className,
  ...variants
}: TypographyProps) => {
  return (
    <Component className={typographyStyles({ ...variants, className })}>
      {children}
    </Component>
  );
};
