import { Link } from "react-router-dom"
import Button from "./Button"
import SearchBar from "./SearchBar"
import User from "./User"
import { useSelector } from "react-redux"
import { CiSearch } from "react-icons/ci"
import { memo, useState } from "react"
import Line3 from "./Line3"
import MobNav from "./MobNav"

const Navbar = () => {

    const { user } = useSelector((state: any) => state.user)
    const [menuOpen, setmenuOpen] = useState(false)

    return (
        <div className="w-full h-[100px] flex items-center justify-between flex-row px-3 md:px-10 py-[40px] ">
            <div className="flex items-center flex-row gap-6">
                <Line3 onOpen={(d: any) => setmenuOpen(d)} />
                <Link to="/home" className="logo-font text-4xl mr-4 hover:opacity-50 transition cursor-pointer">Dribbble</Link>
                <ul className="hidden md:flex items-center justify-between flex-row gap-8 text-md font-medium">
                    <li className="hover:opacity-50 cursor-pointer transition">Find talent</li>
                    <li className="hover:opacity-50 cursor-pointer transition">Inspiration</li>
                    <li className="hover:opacity-50 cursor-pointer transition">Learn design</li>
                    <li className="hover:opacity-50 cursor-pointer transition">Jobs</li>
                    <li className="hover:opacity-50 cursor-pointer transition">Go pro</li>
                </ul>

            </div>
            <div className="flex items-center flex-row gap-3">
                <SearchBar />

                {user ?
                    <User />
                    :
                    <>
                        <div className="hidden md:flex">
                            <Link to="/login">
                                <Button bg="transparent" >Login</Button>
                            </Link>
                        </div>
                        <div className="md:hidden">
                            <CiSearch size={25} />
                        </div>
                        <Link to="/register">
                            <Button >Sign Up</Button>
                        </Link>
                    </>
                }
            </div>

            <div className={`mobnavcontent ${menuOpen ? "open" : "close"}`}>
                <MobNav/>
            </div>
        </div>
    )
}

export default memo(Navbar)