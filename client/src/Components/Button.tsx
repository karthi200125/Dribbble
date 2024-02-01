import { ReactNode } from "react";

interface ButtonProps {
  bg?: string;
  onClick?: (e: any) => void;
  py?: string;
  px?: string;
  isLoading?: boolean;
  border?: string;
  color?: string;
  w?: string;
  children: ReactNode;
}

const Button = ({ bg, onClick, py, border, color, w, children, px, isLoading }: ButtonProps) => {

  return (
    <button
      className={
        `${px ? px : "px-6"} ${py ? py : "py-3"} rounded-full transition-opacity duration-300 hover:opacity-60 ${w}
        ${border && `border-[1px] border-solid border-${border}`}
        ${bg === 'transparent' ? 'text-black' : color ? color : 'text-white'}
        ${bg ? `bg-${bg}` : 'bg-black'}
        ${isLoading && "cursor-not-allowed opacity-60"}
        `}
      onClick={onClick}
      disabled={isLoading}
    >
      <span className="font-bold">{isLoading ? "please wait..." : children}</span>
    </button>
  )
}

export default Button;
