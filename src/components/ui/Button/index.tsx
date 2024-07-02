import { cx } from "class-variance-authority";

interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  label: string;
  className?: string;
}

const Button = ({ onClick, label, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cx(
        "rounded-md bg-blue-primary p-3 text-center text-base font-medium leading-none",
        className,
      )}
    >
      {label}
    </button>
  );
};

export default Button;
