import { cva, type VariantProps } from "class-variance-authority";
import { Icon } from "@components/Icon";

const avatarStyles = cva(
  "inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-mgreen font-medium text-mwhite",
  {
    variants: {
      size: {
        sm: "size-8 text-xs",
        md: "size-10 text-sm",
        lg: "size-14 text-base",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

const getInitials = (name: string) =>
  name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase();

type AvatarProps = {
  name: string;
  src?: string;
  className?: string;
} & VariantProps<typeof avatarStyles>;

export const Avatar = ({ name, src, className, ...variants }: AvatarProps) => {
  const initials = getInitials(name);

  return (
    <span
      role="img"
      aria-label={name}
      title={name}
      className={avatarStyles({ ...variants, className })}
    >
      {src ? (
        <img src={src} alt="" className="size-full object-cover" />
      ) : (
        initials || <Icon icon="user" size="sm" />
      )}
    </span>
  );
};
