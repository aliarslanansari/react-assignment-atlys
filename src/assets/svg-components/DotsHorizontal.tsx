import { SVGProps } from "react";

function DotsHorizontal(props: SVGProps<SVGSVGElement>) {
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
        d="M4.833 10a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm6.667 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.167 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
        fill="#C5C7CA"
      />
    </svg>
  );
}

export default DotsHorizontal;
