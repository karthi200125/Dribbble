import { Link } from "react-router-dom"
import Button from "./Button"
import SearchBar from "./SearchBar"
import User from "./User"

const Navbar = () => {

    const user = true    

    return (
        <div className="w-full h-[100px] flex items-center justify-between flex-row px-10 py-[40px]">
            <div className="flex items-center flex-row gap-6">
                <span className="logo-font text-4xl mr-4 hover:opacity-50 transition cursor-pointer">Dribbble</span>
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
                                <Button title="Log in" bg="transparent" />
                            </Link>
                        </div>
                        <Link to="/register">
                            <Button title="Sign up" />
                        </Link>
                    </>
                }
            </div>
        </div>
    )
}

export default Navbar