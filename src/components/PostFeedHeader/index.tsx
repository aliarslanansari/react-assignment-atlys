import useAuth from "@/hooks/useAuth";
import { cn } from "@/utils";

interface PostFeedHeaderProps {
  className?: string;
}

const PostFeedHeader = ({ className }: PostFeedHeaderProps) => {
  const { user } = useAuth();

  return (
    <div className={cn("w-full max-w-[580px]", className)}>
      <h1 className="mb-3 text-xl font-medium leading-none text-white-200">Hello {user?.name}</h1>
      <p className="text-base font-normal text-white-150">
        How are you doing today? Would you like to share something with the community 🤗
      </p>
    </div>
  );
};

export default PostFeedHeader;
