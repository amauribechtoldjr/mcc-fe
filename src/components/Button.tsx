import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";

const buttonStyles = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 transition focus-visible:ring-2 focus-visible:ring-morange focus-visible:ring-offset-2 focus-visible:ring-offset-mwhite focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-mred text-mwhite hover:bg-mred/90",
        accent: "bg-morange text-mred hover:bg-morange/90",
        ghost: "bg-transparent text-mred hover:bg-mred/10",
      },
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
      shape: {
        default: "rounded-lg",
        circle: "rounded-full",
      },
    },
    compoundVariants: [
      { shape: "default", size: "sm", class: "px-3 py-1.5" },
      { shape: "default", size: "md", class: "px-4 py-2" },
      { shape: "default", size: "lg", class: "px-6 py-3" },
      { shape: "circle", size: "sm", class: "size-8" },
      { shape: "circle", size: "md", class: "size-10" },
      { shape: "circle", size: "lg", class: "size-12" },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
      shape: "default",
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonStyles>;

export const Button = ({
  variant,
  size,
  shape,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={buttonStyles({ variant, size, shape, className })}
      {...props}
    />
  );
};
