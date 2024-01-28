interface ButtonProps {
  title: string,
  bg?: string;
  onClick?: () => void;
  py?: string;
  border?: string;
  color?: string;
}

const Button = ({ title, bg, onClick, py, border, color }: ButtonProps) => {

  return (
    <button
      className={
        `px-6 ${py ? py : "py-3"} rounded-full transition-opacity duration-300 hover:opacity-60 
        ${border && "border-[1px] border-solid border-black"}
        ${bg === 'transparent' ? 'text-black' : color ? color : 'text-white'}
        ${bg ? `bg-${bg}` : 'bg-black'}
        `}
      onClick={onClick}
    >
      <span className="font-bold">{title}</span>
    </button>
  )
}

export default Button;
