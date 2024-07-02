import { cx } from "class-variance-authority";
import { ReactNode } from "react";

interface IconWrapperProps {
  className?: string;
  children: ReactNode;
}

const IconWrapper = ({ children, className }: IconWrapperProps) => {
  return (
    <div
      className={cx(
        "bg-black-600 flex h-12 min-w-12 items-center justify-center rounded-full",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default IconWrapper;
