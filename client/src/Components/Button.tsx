
interface ButtonProps {
  title: string,
  bg?: string;
  onClick?: () => void;
  py?: string;

}

const Button = ({ title, bg, onClick, py }: ButtonProps) => {
  return (
    <button
      className={
        `px-6 ${py ? py : "py-3"} text-white rounded-full transition-opacity duration-300 hover:opacity-60 
        ${bg === 'transparent' && 'text-black'}
        bg-${bg ? bg : 'black'}
        `}
      onClick={onClick}
    >
      {title}
    </button>
  )
}

export default Button