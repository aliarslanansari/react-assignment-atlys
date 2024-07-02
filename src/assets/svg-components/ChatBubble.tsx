import { SVGProps } from "react";

function ChatBubble(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.333 3.833H2.667a1.5 1.5 0 00-1.5 1.5v8a1.5 1.5 0 001.5 1.5H10a.5.5 0 01.354.147l3.146 3.146v-2.793a.5.5 0 01.5-.5h3.333a1.5 1.5 0 001.5-1.5v-8a1.5 1.5 0 00-1.5-1.5zm-14.666-1h14.666a2.5 2.5 0 012.5 2.5v8a2.5 2.5 0 01-2.5 2.5H14.5v3.5a.5.5 0 01-.854.354l-3.853-3.854H2.667a2.5 2.5 0 01-2.5-2.5v-8a2.5 2.5 0 012.5-2.5z"
        fill="#C5C7CA"
      />
    </svg>
  );
}

export default ChatBubble;
