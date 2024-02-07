import { useDispatch } from "react-redux"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { logout } from "../Redux/AuthSlice"

const MobNav = () => {

    const location = useLocation()
    const pathname = location.pathname
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        navigate('/')
        dispatch(logout())
      }

    return (
        <div className="w-full flex items-center justify-center ">
            <div className="w-[90%] h-full flex flex-col gap-5 my-10 mb-5">
                <h1 className="font-semibold cursor-pointer hover:opacity-50">Find Talent</h1>
                <h1 className="font-semibold cursor-pointer hover:opacity-50">Inspiration Talent</h1>
                <h1 className="font-semibold cursor-pointer hover:opacity-50">Learn Design</h1>
                <h1 className="font-semibold cursor-pointer hover:opacity-50">Jobs</h1>
                <h1 className="font-semibold cursor-pointer hover:opacity-50">Go Pro</h1>
                <span className="h-[1px] w-full bg-neutral-200"></span>
                {pathname === '/' ?
                    <Link to='/login' className="font-semibold cursor-pointer hover:opacity-50">Login</Link>
                    :
                    <h1 className="font-semibold cursor-pointer hover:opacity-50" onClick={handleLogout}>Logout</h1>
                }
            </div>
        </div>
    )
}

export default MobNav