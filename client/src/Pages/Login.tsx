import { Link, useNavigate } from "react-router-dom"
import Button from "../Components/Button"
import Input from "../Components/Inputs"
import useHandleCrud from "../Utils/HanldeCrud"
import { useState } from "react"
import { login } from "../Redux/AuthSlice"

const Login = () => {

    const navigate = useNavigate()
    const [input, setInputs] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e: any) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const { isLoading, Crud } = useHandleCrud({
        url: "/auth/login",
        method: "POST",
        data: input,
        successmsg: "user Login successfully",
        nav: '/home',
        disp: login
    });


    const handleLogin = async () => {
        await Crud();
    }

    return (
        <div className="w-full h-screen flex flex-row relative">
            <video
                src="https://cdn.dribbble.com/uploads/48226/original/b8bd4e4273cceae2889d9d259b04f732.mp4?1689028949"
                autoPlay
                className="w-[400px] h-full object-cover"
            />
            <Link to='/' className="absolute text-white logo-font text-3xl cursor-pointer left-8 top-8">Dribbble</Link>

            <div className="h-full flex items-start ml-[150px] justify-center flex-col">
                <div className="w-[400px] h-[500px] flex items-center flex-col justify-between ">
                    <h1 className="w-full text-start text-2xl font-bold">Sign up to Dribbble</h1>
                    <div className="google">goole</div>
                    <div className="relative w-full h-[1px] bg-neutral-300">
                        <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-neutral-400">or sign in with email</span>
                    </div>
                    <Input labelname="UserName or Email" type="email" onChange={handleChange} value={input.email} name="email" />
                    {/* <span className="w-full text-end underline">Forget?</span> */}
                    <Input labelname="Password" type="password" onChange={handleChange} value={input.password} name="password" />
                    <Button w="w-full" py="py-4" onClick={handleLogin} isLoading={isLoading}>Signin</Button>
                    <div className="text-neutral-600 text-[15px] cursor-pointer">Dont have an account?
                        <Link to="/register" className="underline">Sign Up</Link>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Login