import { cva, type VariantProps } from "class-variance-authority";
import type { ElementType, ReactNode } from "react";

const surfaceStyles = cva("", {
  variants: {
    color: {
      red: "bg-mred text-mwhite",
      green: "bg-mgreen text-mwhite",
      white: "bg-mwhite text-mred",
    },
    padding: {
      none: "",
      sm: "p-3",
      md: "p-4",
      lg: "p-6",
    },
    radius: {
      none: "",
      md: "rounded-lg",
      lg: "rounded-xl",
    },
    shadow: {
      none: "",
      sm: "shadow-sm",
      md: "shadow-md",
    },
  },
  defaultVariants: {
    color: "white",
    padding: "md",
    radius: "md",
    shadow: "none",
  },
});

type SurfaceProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
} & VariantProps<typeof surfaceStyles>;

export const Surface = ({
  children,
  as: Component = "div",
  className,
  ...variants
}: SurfaceProps) => {
  return (
    <Component className={surfaceStyles({ ...variants, className })}>
      {children}
    </Component>
  );
};
