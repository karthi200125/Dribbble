import { signInWithPopup } from 'firebase/auth'
import { useCallback, useState } from "react"
import toast from "react-hot-toast"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import Button from "../Components/Button"
import Input from "../Components/Inputs"
import Title from "../Components/Title"
import { login } from "../Redux/AuthSlice"
import AxiosRequest from "../Utils/AxiosRequest"
import { auth, provider } from "../Utils/FireBase"

const Login = () => {

    const [isLoading, setisLoading] = useState(false);
    const dispatch = useDispatch()
    const naivigate = useNavigate()
    const [input, setInputs] = useState({
        email: "",
        password: ""
    });
    const [showpassword, setshowpassword] = useState(false);

    const handleChange = useCallback((e: any) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }, []);


    const handleLogin = async () => {
        if (!input.password) return toast.error("enter password")
        if (!input.email) return toast.error("enter email")
        try {
            setisLoading(true)
            const res = await AxiosRequest.post('/auth/login', input)
            dispatch(login(res.data))
            toast.success("user has been login successfully")
            naivigate('/home')
            localStorage.setItem('access_token', res.data.token);
        } catch (error: any) {
            toast.error(error.response.data.message)
        } finally {
            setisLoading(false)
        }
    }

    // google login
    const signInWithGoole = useCallback(async () => {
        setisLoading(true); 
        signInWithPopup(auth, provider).then((result) => {
            AxiosRequest.post('/auth/google', {
                username: result.user.displayName,
                email: result.user.email,
                profilePic: result.user.photoURL,
            }).then((res) => {
                const nav = res.data.reg
                nav ? naivigate('/welcome') : naivigate('/home')
                localStorage.setItem('access_token', res.data.token);
                dispatch(login(res.data))
                toast.success("Google login successful")
            }).catch(() => {
                toast.error("Google login failed")
            }).finally(() => {
                setisLoading(false);
            })
        }).catch(() => {
            toast.error("Google login failed")
            setisLoading(false);
        });
    }, []);


    return (
        <div className="w-full h-screen flex flex-row relative">
            <Title title="Sign in | PixelPulse" />
            <video
                src="https://cdn.dribbble.com/uploads/48226/original/b8bd4e4273cceae2889d9d259b04f732.mp4?1689028949"
                autoPlay
                muted
                className="hidden md:block w-[400px] h-full object-cover"
            />
            <Link to='/' className="hidden md:block absolute text-white logo-font text-3xl cursor-pointer left-8 top-8">PixelPulse</Link>

            <div className="h-full w-full flex md:items-start items-center md:ml-[150px] justify-center flex-col p-5">
                <div className="w-[320px] md:w-[400px] h-[500px] flex items-center flex-col  justify-between ">
                    <h1 className="w-full text-start text-2xl font-bold">Sign in to PixelPulse</h1>
                    <Button w="w-full" py="py-4" bg="transparent" border="neutral-200" onClick={signInWithGoole}>                        
                        <span >{isLoading ? "PLease Wait....." : "Sign in With Google"}</span>
                    </Button>
                    <div className="relative w-full h-[1px] bg-neutral-300">
                        <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-sm md:text-md text-neutral-400">or sign in with email</span>
                    </div>
                    <Input labelname="UserName or Email" type="email" onChange={handleChange} value={input.email} name="email" />
                    <Input labelname="Password" type={showpassword ? "text" : "password"} onChange={handleChange} value={input.password} name="password" />
                    <div className="w-full flex items-center gap-5">
                        <input type="checkbox" onChange={() => setshowpassword(!showpassword)} className='cursor-pointer w-[15px] h-[15px]' />
                        <span className='font-bold'>show password</span>
                    </div>
                    <Button w="w-full" py="py-4" onClick={handleLogin} isLoading={isLoading}>Sign In</Button>
                    <div className="text-neutral-600 text-[15px] cursor-pointer">Dont have an account?
                        <Link to="/register" className="underline ml-3 font-bold">Sign Up</Link>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Login