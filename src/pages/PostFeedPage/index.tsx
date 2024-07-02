import PostCard from "@/components/PostCard";
import PostFeedHeader from "@/components/PostFeedHeader";
import PostTextField from "@/components/PostTextField";

const PostFeedPage = () => {
  return (
    <div className="m-auto max-w-[700px] py-[70px]">
      <PostFeedHeader className="mb-10" />
      <PostTextField className="mb-4" />
      <div className="flex flex-col gap-4">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
};

export default PostFeedPage;
