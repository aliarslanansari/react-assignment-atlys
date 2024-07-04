import PostCard from "@/components/PostCard";
import PostFeedHeader from "@/components/PostFeedHeader";
import PostTextField from "@/components/PostTextField";

const PostFeedPage = () => {
  return (
    <main className="mobile:p-5 m-auto max-w-[700px] py-[70px]">
      <PostFeedHeader className="mb-10" />
      <PostTextField className="mb-4" />
      <div className="flex flex-col gap-4">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </main>
  );
};

export default PostFeedPage;
