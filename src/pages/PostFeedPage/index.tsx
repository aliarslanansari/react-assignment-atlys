import PostCard from "@/components/PostCard";
import PostFeedHeader from "@/components/PostFeedHeader";
import PostTextField from "@/components/PostTextField";
import AlertDialogBox from "@/components/ui/AlertDialogBox";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import useAuth from "@/hooks/useAuth";
import { deletePost, postSelector } from "@/redux/slices/postFeedSlice";
import { useRef, useState } from "react";

import LoginFormCard from "@/components/LoginFormCard";
import RegisterFormCard from "@/components/RegisterFormCard";
import { Dialog, DialogContent } from "@/components/ui/Dialog";
import { toast } from "sonner";

const PostFeedPage = () => {
  const posts = useAppSelector(postSelector);
  const [showDeleteAlertDialog, setShowDeleteAlertDialog] = useState(false);
  const dispatch = useAppDispatch();
  const postId = useRef<number | null>(null);
  const { user, logout } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const onDeletePostContinue = () => {
    if (postId.current) {
      dispatch(deletePost(postId.current));
      toast.success("Post was deleted.", { duration: 3000 });
    }
    setShowDeleteAlertDialog(false);
  };

  const onShowDeleteDialogBox = (id: number) => () => {
    setShowDeleteAlertDialog(true);
    postId.current = id;
  };

  return (
    <main className="m-auto max-w-[700px] py-[70px] mobile:p-5">
      {user?.id ? (
        <div className="absolute right-2 top-0 p-4 text-xs text-white-100">
          {user?.username} •{" "}
          <button onClick={logout} className="underline">
            logout
          </button>
        </div>
      ) : (
        <button
          className="absolute right-2 top-0 p-4 text-xs text-white-100"
          onClick={() => setShowLoginModal(true)}
        >
          login
        </button>
      )}
      <PostFeedHeader className="mb-10" />
      <PostTextField setShowLoginModal={setShowLoginModal} className="mb-4" />
      <div className="flex flex-col gap-4">
        {!!posts?.length &&
          posts.map((post) => (
            <PostCard onDeletePost={onShowDeleteDialogBox} key={post.id} {...post} />
          ))}
      </div>
      <AlertDialogBox
        open={showDeleteAlertDialog}
        onOpenChange={setShowDeleteAlertDialog}
        onContinue={onDeletePostContinue}
        title="Are you absolutely sure?"
        description="this action cannot be undone. This will permanently delete your post."
      />
      <Dialog open={showLoginModal} onOpenChange={setShowLoginModal}>
        <DialogContent>
          <LoginFormCard
            isOpenAsModal={true}
            onSuccess={() => setShowLoginModal(false)}
            onRegisterClick={() => {
              setShowLoginModal(false);
              setShowRegisterModal(true);
            }}
          />
        </DialogContent>
      </Dialog>
      <Dialog open={showRegisterModal} onOpenChange={setShowRegisterModal}>
        <DialogContent>
          <RegisterFormCard
            isOpenAsModal={true}
            onSuccess={() => setShowRegisterModal(false)}
            onLoginClick={() => {
              setShowLoginModal(true);
              setShowRegisterModal(false);
            }}
          />
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default PostFeedPage;
