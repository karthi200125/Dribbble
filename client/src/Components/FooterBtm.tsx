import { FaFacebookSquare, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa"

const FooterBtm = () => {
    return (
        <div className="flex flex-col gap-12 py-10">
            <div className="flex items-center justify-between w-full px-[80px] ">
                <span className="logo-font text-4xl mr-4 hover:opacity-50 transition cursor-pointer">Dribbble</span>
                <ul className="flex items-center justify-between w-[70%] md:text-center flex-wrap">
                    <li className="cursor-pointer font-bold">For designers</li>
                    <li className="cursor-pointer font-bold">Hire talent</li>
                    <li className="cursor-pointer font-bold">Inspiration</li>
                    <li className="cursor-pointer font-bold">Advertising</li>
                    <li className="cursor-pointer font-bold">Blog</li>
                    <li className="cursor-pointer font-bold">About</li>
                    <li className="cursor-pointer font-bold">Careers</li>
                    <li className="cursor-pointer font-bold">Support</li>
                </ul>
                <div className="flex items-center gap-4">                    
                    <FaTwitter size={20} className="cursor-pointer" />
                    <FaFacebookSquare size={20} className="cursor-pointer" />
                    <FaInstagram size={20} className="cursor-pointer" />
                    <FaPinterest size={20} className="cursor-pointer" />
                </div>
            </div>
            <div className="flex items-center justify-between flex-row w-full text-neutral-400 px-[80px] mt-5 md:text-center px-[10px] gap-5">
                <ul className="flex items-center flex-row gap-4">
                    <li>© 2024 Dribbble</li>
                    <li>Terms</li>
                    <li>Privacy</li>
                    <li>Cookies</li>
                </ul>
                <ul className="flex items-center flex-row gap-4 md:flex-wrap">
                    <li>Jobs</li>
                    <li>Designers</li>
                    <li>Freelancers</li>
                    <li>Tags</li>
                    <li>Places</li>
                    <li>Resources</li>
                </ul>
            </div>
        </div>
    )
}

export default FooterBtm