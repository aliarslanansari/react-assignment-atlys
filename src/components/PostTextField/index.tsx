import Card from "@/components/ui/Card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Textfield from "@/components/ui/Textfield";
import { cn } from "@/utils";
import { useFormik } from "formik";
import { useState } from "react";
import EmojiPicker from "../EmojiPicker";
import Button from "../ui/Button";
import IconWrapper from "../ui/IconWrapper";
import { postFormInitialValues, postFormSchema } from "./helper";

interface PostTextFieldProps {
  className?: string;
}

const PostTextField = ({ className }: PostTextFieldProps) => {
  const [isEmojiPopoverOpen, setIsEmojiPopoverOpen] = useState(false);

  const formik = useFormik({
    validationSchema: postFormSchema,
    initialValues: postFormInitialValues,
    onSubmit: (values) => {
      const { emoji, text } = values;
      console.log({ emoji, text });
    },
  });

  const handleEmojiSelect = (emoji: string) => {
    formik.setFieldValue("emoji", emoji);
    setIsEmojiPopoverOpen(false);
  };

  return (
    <Card className={cn(className)}>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
        <h2 className="text-lg font-medium leading-none text-white-200">Create post</h2>
        <div>
          <div className="flex items-center gap-4 rounded-lg bg-black-700 p-4">
            <Popover open={isEmojiPopoverOpen} onOpenChange={setIsEmojiPopoverOpen}>
              <PopoverTrigger>
                <IconWrapper>{formik.values.emoji}</IconWrapper>
              </PopoverTrigger>
              <PopoverContent className="setIsEmojiPopoverOpen w-80 rounded-lg border-none !bg-transparent p-0">
                <EmojiPicker onEmojiClick={handleEmojiSelect} />
              </PopoverContent>
            </Popover>
            <Textfield
              onChange={formik.handleChange}
              name="text"
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
        <Button type="submit" className="items-end self-end px-[38px]" label="Post" />
      </form>
    </Card>
  );
};

export default PostTextField;
