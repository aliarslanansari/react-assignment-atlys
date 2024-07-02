import { cx } from "class-variance-authority";
import { ReactNode } from "react";

interface CardProps {
  className?: string;
  children: ReactNode;
}

const Card = ({ children, className }: CardProps) => {
  return (
    <div className={cx("bg-black-600 rounded-lg border border-white-250 px-5 py-6", className)}>
      {children}
    </div>
  );
};

export default Card;
