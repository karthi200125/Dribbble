import { useState } from "react";
import { Toaster } from 'react-hot-toast';
import { RiArrowDropLeftLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Button from "../Components/Button";
import Inputs from "../Components/Inputs";
import { login } from "../Redux/AuthSlice";
import useHandleCrud from "../Utils/HanldeCrud";

const Register = () => {
    const [reOpen, setRegOpen] = useState(false);
    const [input, setInputs] = useState({
        name: "",
        username: "",
        email: "",
        password: ""
    });

    const handleChange = (e: any) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const { isLoading, Crud } = useHandleCrud({
        url: "/auth/register",
        method: "POST",
        data: input,
        successmsg: "user has been created successfully",
        nav: '/home',
        disp: login
    });

    const handleCreate = async () => {
        await Crud();
    };

    return (
        <div className="w-full h-screen flex flex-row relative">
            <Toaster position="top-center" reverseOrder={false} />
            <video
                src="https://cdn.dribbble.com/uploads/48292/original/30fd1f7b63806eff4db0d4276eb1ac45.mp4?1689187515"
                autoPlay
                className="w-[400px] h-full object-cover"
            />
            <Link to='/' className="absolute text-white logo-font text-3xl cursor-pointer left-8 top-8">Dribbble</Link>
            {reOpen &&
                <div className="absolute left-[450px] top-[50px] w-10 h-10 flex items-center justify-center rounded-full border-[1px] border-solid border-neutral-300 cursor-pointer" onClick={() => setRegOpen(false)}>
                    <RiArrowDropLeftLine size={25} />
                </div>
            }

            <div className="w-[0%] h-full flex items-start ml-[150px] justify-center flex-col">
                {!reOpen ?
                    <div className="w-[400px] h-[380px] flex items-center flex-col justify-between ">
                        <h1 className="w-full text-start text-2xl font-bold">Sign up to Dribbble</h1>
                        <div className="google">google</div>
                        <div className="relative w-full h-[1px] bg-neutral-300">
                            <span className="absolute left-1/2 top-1/2 transdiv -translate-x-1/2 -translate-y-1/2 bg-white px-3">or</span>
                        </div>
                        <Button bg="transparent" border="neutral-300" w="w-full" py="py-4" onClick={() => setRegOpen(true)}>
                            continue with email
                        </Button>
                        <p className="text-[11.7px] text-center text-neutral-600">By creating an account, you agree with our
                            <span className="underline">Terms of Service, Privacy Policy,</span>
                            and our default <span className="underline">Notification Settings.</span>
                        </p>
                        <div className="text-neutral-600 text-[13px] cursor-pointer">Already have an account?
                            <Link to='/login' className="underline">Sign In</Link>
                        </div>
                    </div>
                    :
                    <div className="w-[450px] h-[620px]  flex items-center flex-col justify-between p-2 relative" >
                        <h1 className="w-full text-start text-2xl font-bold">Sign up to Dribbble</h1>
                        <div className="w-full flex flex-row items-center gap-5">
                            <Inputs labelname="Name" onChange={handleChange} value={input.name} name="name" />
                            <Inputs labelname="User Name" name="username" onChange={handleChange} value={input.username} />
                        </div>
                        <Inputs labelname="Email" type="email" name="email" onChange={handleChange} value={input.email} />
                        <Inputs labelname="Password" type="password" placeholder="6+ characters" name="password" onChange={handleChange} value={input.password} />
                        <div className="agree flex flex-row items-center gap-3">
                            <input type="checkbox" />
                            <p>I agree with Dribbble's Terms of Service, Privacy Policy, and default Notification Settings.</p>
                        </div>
                        <Button w="w-full" py="py-4" onClick={handleCreate} isLoading={isLoading}>Create Account</Button>
                        <div className="text-neutral-600 text-[13px] cursor-pointer">Already have an account?
                            <Link to='/login' className="underline">Sign In</Link>
                        </div>
                        <p className="text-neutral-400 text-[10px]">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
                    </div>
                }
            </div>
        </div>
    );
};

export default Register;
