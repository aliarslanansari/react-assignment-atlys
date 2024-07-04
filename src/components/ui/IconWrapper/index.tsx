import { cn } from "@/utils";
import { ReactNode } from "react";

interface IconWrapperProps {
  className?: string;
  children: ReactNode;
}

const IconWrapper = ({ children, className }: IconWrapperProps) => {
  return (
    <div
      className={cn(
        "flex h-12 min-w-12 items-center justify-center rounded-full bg-black-600",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default IconWrapper;
