import { cn } from "@/utils";

interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  label: string;
  className?: string;
  type?: "submit" | "reset" | "button";
}

const Button = ({ onClick, label, className, type }: ButtonProps) => {
  return (
    <button
      type={type}
      aria-label={label}
      onClick={onClick}
      className={cn(
        "rounded-md bg-blue-primary p-3 text-center text-base font-medium leading-none outline-none hover:bg-blue-primary/80 focus:bg-blue-primary/80",
        className,
      )}
    >
      {label}
    </button>
  );
};

export default Button;
