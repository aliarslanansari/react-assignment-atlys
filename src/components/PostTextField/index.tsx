import Card from "@/components/ui/Card";
import Textfield from "@/components/ui/Textfield";
import { cx } from "class-variance-authority";
import Button from "../ui/Button";
import IconWrapper from "../ui/IconWrapper";

interface PostTextFieldProps {
  className?: string;
}

const PostTextField = ({ className }: PostTextFieldProps) => {
  const onPost = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
  };

  return (
    <Card className={cx(className)}>
      <form onSubmit={onPost} className="flex flex-col gap-4">
        <h2 className="text-lg font-medium leading-none text-white-200">Create post</h2>
        <div className="bg-black-700 flex items-center gap-4 rounded-lg p-4">
          <IconWrapper>💬</IconWrapper>
          <Textfield
            className="w-full"
            inputClassName="border-none pl-0 pr-0"
            placeholder="How are you feeling today?"
          />
        </div>
        <Button onClick={onPost} className="items-end self-end px-[38px]" label="Post" />
      </form>
    </Card>
  );
};

export default PostTextField;
