import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import FooterBtm from "./FooterBtm";

const Footer = () => {
  return (
    <div className="w-full py-[30px] flex items-center flex-col gap-10 ">
      <div className="sldiing h-[220px] bg-red-400 w-full">
        slideing
      </div>
      <FooterBtm />
    </div>
  )
}

export default Footer