import ChatBubble from "@/assets/svg-components/ChatBubble";
import DotsHorizontal from "@/assets/svg-components/DotsHorizontal";
import Card from "@/components/ui/Card";
import { cn } from "@/utils";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import IconWrapper from "../ui/IconWrapper";

dayjs.extend(relativeTime);

interface PostCardProps {
  className?: string;
}

const PostCard = ({ className }: PostCardProps) => {
  const timestamp = "2024-07-02T23:00:00Z";

  return (
    <Card className={cn(className)}>
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/user-images/user-1.png" className="h-11 w-11 rounded-full" />
          <div>
            <h2 className="text-base font-medium leading-none text-white-200">Theresa Webb</h2>
            <p className="mt-1 text-sm font-medium leading-none text-white-150">
              {dayjs(timestamp).fromNow()}
            </p>
          </div>
        </div>
        <button>
          <DotsHorizontal />
        </button>
      </div>
      <div className="mb-3 flex items-center gap-4 rounded-lg bg-black-700 p-4">
        <IconWrapper className="self-start">👋</IconWrapper>
        <p className="text-base font-normal text-white-150">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
      </div>
      <div className="flex cursor-pointer items-center gap-2">
        <ChatBubble />
        <span className="text-sm font-medium text-white-150">24 comments</span>
      </div>
    </Card>
  );
};

export default PostCard;
