import ChatBubble from "@/assets/svg-components/ChatBubble";
import DotsHorizontal from "@/assets/svg-components/DotsHorizontal";
import Card from "@/components/ui/Card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useAppSelector } from "@/hooks/redux";
import useAuth from "@/hooks/useAuth";
import { Post } from "@/redux/slices/postFeedSlice";
import { selectUserById } from "@/redux/slices/usersSlice";
import { cn } from "@/utils";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import relativeTime from "dayjs/plugin/relativeTime";
// import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";
import IconWrapper from "../ui/IconWrapper";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);

interface PostCardProps extends Post {
  className?: string;
  onDeletePost: (id: number) => () => void;
}

const PostCard = ({
  className,
  created_at,
  edited_time,
  emoji,
  is_edited,
  no_of_comments,
  text,
  user_id,
  onDeletePost,
  id,
}: PostCardProps) => {
  const user = useAppSelector(selectUserById(user_id));
  const { user: loggedUser } = useAuth();

  return (
    <>
      <Card className={cn(className)}>
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {user?.profile_picture && (
              <img
                src={user?.profile_picture}
                alt={`profile picture of ${user?.name}`}
                className="h-11 w-11 rounded-full"
              />
            )}
            <div>
              <h2 className="text-base font-medium leading-none text-white-200">{user?.name}</h2>
              <p className="mt-1 text-sm font-medium leading-none text-white-150">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>{dayjs(created_at).fromNow()}</TooltipTrigger>
                    <TooltipContent>
                      <p>{dayjs(created_at).format("lll")}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>{" "}
                {is_edited && (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>• Edited</TooltipTrigger>
                      <TooltipContent>
                        <p>{dayjs(edited_time).format("lll")}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </p>
            </div>
          </div>
          {user?.id === loggedUser?.id && (
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none">
                <button className="outline-none">
                  <DotsHorizontal />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem
                  className="flex cursor-pointer justify-between"
                  onClick={onDeletePost(id)}
                >
                  <span>Delete</span> <MdOutlineDeleteOutline />
                </DropdownMenuItem>
                {/* <DropdownMenuItem className="flex cursor-pointer justify-between">
                  <span>Edit</span> <CiEdit />
                </DropdownMenuItem> */}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
        <div className="mb-3 flex items-center gap-4 rounded-lg bg-black-700 p-4">
          <IconWrapper className="self-start">{emoji}</IconWrapper>
          <p className="text-base font-normal text-white-150">{text}</p>
        </div>
        <div className="flex cursor-pointer items-center gap-2">
          <ChatBubble />
          <span className="text-sm font-medium text-white-150">{no_of_comments} comments</span>
        </div>
      </Card>
    </>
  );
};

export default PostCard;
