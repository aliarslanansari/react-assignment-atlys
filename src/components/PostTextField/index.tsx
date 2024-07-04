import Card from "@/components/ui/Card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Textfield from "@/components/ui/Textfield";
import { useAppDispatch } from "@/hooks/redux";
import useAuth from "@/hooks/useAuth";
import { addPost } from "@/redux/slices/postFeedSlice";
import { cn } from "@/utils";
import { useFormik } from "formik";
import { useRef, useState } from "react";
import { toast } from "sonner";
import EmojiPicker from "../EmojiPicker";
import Button from "../ui/Button";
import IconWrapper from "../ui/IconWrapper";
import { postFormInitialValues, postFormSchema } from "./helper";

interface PostTextFieldProps {
  className?: string;
  setShowLoginModal(s: boolean): void;
}

const PostTextField = ({ className, setShowLoginModal }: PostTextFieldProps) => {
  const [isEmojiPopoverOpen, setIsEmojiPopoverOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { user } = useAuth();
  const dispatch = useAppDispatch();

  const formik = useFormik({
    validationSchema: postFormSchema,
    initialValues: postFormInitialValues,
    onSubmit: (values) => {
      if (user?.id) {
        dispatch(
          addPost({
            created_at: new Date().toISOString(),
            edited_time: null,
            emoji: values.emoji,
            id: 0,
            is_edited: false,
            no_of_comments: 4,
            text: values.text,
            user_id: user.id,
          }),
        );
        formik.resetForm();
        toast.success("Your post was sent.", { duration: 3000 });
      } else {
        setShowLoginModal(true);
      }
    },
  });

  const handleEmojiSelect = (emoji: string) => {
    setIsEmojiPopoverOpen(false);
    formik.setFieldValue("emoji", emoji);
    inputRef.current?.focus();
  };

  const focusInputBox = () => {
    inputRef.current?.focus();
  };

  return (
    <Card className={cn(className)}>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
        <h2 className="text-lg font-medium leading-none text-white-200">Create post</h2>
        <div>
          <div
            onClick={focusInputBox}
            className="flex cursor-text items-center gap-4 rounded-lg bg-black-700 p-4"
          >
            <Popover open={isEmojiPopoverOpen} onOpenChange={setIsEmojiPopoverOpen}>
              <PopoverTrigger>
                <IconWrapper>{formik.values.emoji}</IconWrapper>
              </PopoverTrigger>
              <PopoverContent
                onClick={(e) => e.stopPropagation()}
                className="setIsEmojiPopoverOpen w-80 rounded-lg border-none !bg-transparent p-0"
              >
                <EmojiPicker onEmojiClick={handleEmojiSelect} />
              </PopoverContent>
            </Popover>
            <Textfield
              ref={inputRef}
              onChange={formik.handleChange}
              name="text"
              autoFocus
              className="w-full"
              value={formik.values.text}
              inputClassName="border-none pl-0 pr-0"
              placeholder="How are you feeling today?"
            />
          </div>
          {formik.errors.text && formik.touched.text && (
            <p className="mt-1 text-xs text-red-400">{formik.errors.text}</p>
          )}
        </div>
        <Button
          disabled={!formik.values.text}
          type="submit"
          className="items-end self-end px-[38px]"
          label="Post"
        />
      </form>
    </Card>
  );
};

export default PostTextField;
