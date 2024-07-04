import { SVGProps } from "react";

function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={16} cy={16} r={16} fill="#131319" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.575 12.309a.625.625 0 00-.883-.884L16 15.116l-3.691-3.691a.625.625 0 00-.884.884L15.116 16l-3.691 3.691a.625.625 0 10.884.884L16 16.884l3.692 3.691a.625.625 0 10.883-.884L16.884 16l3.691-3.691z"
        fill="#fff"
      />
    </svg>
  );
}

export default CloseIcon;
