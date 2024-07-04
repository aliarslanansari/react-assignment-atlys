import Picker, { SkinTones, Theme } from "emoji-picker-react";
import { MouseDownEvent } from "emoji-picker-react/dist/config/config";

export interface EmojiObject {
  activeSkinTone: string;
  emoji: string;
  imageUrl: string;
  isCustom: boolean;
  names: string[];
  unified: string;
  unifiedWithoutSkinTone: string;
}

interface EmojiPickerProps {
  onEmojiClick: (emoji: string) => void;
}

const EmojiPicker = ({ onEmojiClick }: EmojiPickerProps) => {
  const onSelect: MouseDownEvent = (emojiObject, event) => {
    event.stopPropagation();
    onEmojiClick && onEmojiClick(emojiObject.emoji);
  };

  return (
    <Picker
      reactionsDefaultOpen
      defaultSkinTone={SkinTones.NEUTRAL}
      skinTonesDisabled
      onReactionClick={onSelect}
      theme={Theme.DARK}
      width={"100%"}
      onEmojiClick={onSelect}
    />
  );
};

export default EmojiPicker;
