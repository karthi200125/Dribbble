import { FaFacebookSquare, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa"

const FooterBtm = () => {
    return (
        <div className="flex flex-col gap-12 py-10">
            <div className="flex items-center justify-between w-full px-[20px] md:px-[80px] flex-col md:flex-row gap-5">
                <span className="logo-font text-4xl mr-4 hover:opacity-50 transition cursor-pointer">PixelPulse</span>
                <ul className="flex items-center flex-wrap w-[300px] justify-center md:w-[1000px] gap-5">
                    <li className="cursor-pointer font-semibold">For designers</li>
                    <li className="cursor-pointer font-semibold">Hire talent</li>
                    <li className="cursor-pointer font-semibold">Inspiration</li>
                    <li className="cursor-pointer font-semibold">Advertising</li>
                    <li className="cursor-pointer font-semibold">Blog</li>
                    <li className="cursor-pointer font-semibold">About</li>
                    <li className="cursor-pointer font-semibold">Careers</li>
                    <li className="cursor-pointer font-semibold">Support</li>
                </ul>
                <div className="flex items-center gap-4">
                    <FaTwitter size={20} className="cursor-pointer" />
                    <FaFacebookSquare size={20} className="cursor-pointer" />
                    <FaInstagram size={20} className="cursor-pointer" />
                    <FaPinterest size={20} className="cursor-pointer" />
                </div>
            </div>
            <div className="flex items-center justify-between flex-col md:flex-row w-full text-neutral-400 px-[10px] md:px-[80px] mt-5 gap-5">
                <ul className="flex items-center flex-row gap-4">
                    <li>© 2024 PixelPulse</li>
                    <li>Terms</li>
                    <li>Privacy</li>
                    <li>Cookies</li>
                </ul>
                <ul className="flex items-center flex-wrap gap-4 justify-center">
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