import { cn } from "@/utils";
import { ReactNode } from "react";

interface CardProps {
  className?: string;
  children: ReactNode;
}

const Card = ({ children, className }: CardProps) => {
  return (
    <div className={cn("rounded-lg border border-white-250 bg-black-600 px-5 py-6", className)}>
      {children}
    </div>
  );
};

export default Card;
