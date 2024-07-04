import { cn } from "@/utils";
import { forwardRef, LegacyRef } from "react";

interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  label: string;
  className?: string;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
}

const Button = forwardRef(
  (
    { onClick, label, className, type, disabled }: ButtonProps,
    ref: LegacyRef<HTMLButtonElement> | undefined,
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        type={type}
        aria-label={label}
        onClick={onClick}
        className={cn(
          "rounded-md bg-blue-primary p-3 text-center text-base font-medium leading-none outline-none hover:bg-blue-primary/80 focus:bg-blue-primary/80 disabled:cursor-not-allowed disabled:bg-blue-primary/50",
          className,
        )}
      >
        {label}
      </button>
    );
  },
);

export default Button;
