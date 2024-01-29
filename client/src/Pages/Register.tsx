import { useState } from "react"
import Button from "../Components/Button"
import { RiArrowDropLeftLine } from "react-icons/ri";
import Inputs from "../Components/Inputs";
import { Link } from "react-router-dom";

const Register = () => {

    const [reOpen, setRegOpen] = useState(false)

    return (
        <div className="w-full h-screen flex flex-row relative">
            <video
                src="https://cdn.dribbble.com/uploads/48292/original/30fd1f7b63806eff4db0d4276eb1ac45.mp4?1689187515"
                autoPlay
                className="w-[400px] h-full object-cover"
            />
            <span className="absolute text-white logo-font text-3xl cursor-pointer left-8 top-8">Dribbble</span>
            {reOpen &&
                <div className="absolute left-[450px] top-[50px] w-10 h-10 flex items-center justify-center rounded-full border-[1px] border-solid border-neutral-300 cursor-pointer" onClick={() => setRegOpen(false)}>
                    <RiArrowDropLeftLine size={25} />
                </div>
            }

            <div className="w-[0%] h-full flex items-start ml-[150px] justify-center flex-col">
                {!reOpen ?
                    <div className="w-[400px] h-[380px] flex items-center flex-col justify-between ">
                        <h1 className="w-full text-start text-2xl font-bold">Sign up to Dribbble</h1>
                        <div className="google">goole</div>
                        <div className="relative w-full h-[1px] bg-neutral-300">
                            <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-3">or</span>
                        </div>
                        <Button title="continue with email" bg="transparent" border="neutral-300" w="w-full" py="py-4" onClick={() => setRegOpen(true)} />
                        <p className="text-[11.7px] text-center text-neutral-600">By creating an account you agree with our
                            <span className="underline">Terms of Service, Privacy Policy,</span>
                            and our default <span className="underline">Notification Settings.</span>
                        </p>
                        <div className="text-neutral-600 text-[13px] cursor-pointer">Already have an account?
                            <Link to='/login' className="underline">Sign In</Link>
                        </div>
                    </div>
                    :
                    <div className="w-[450px] h-[620px]  flex items-center flex-col justify-between p-2 relative">
                        <h1 className="w-full text-start text-2xl font-bold">Sign up to Dribbble</h1>
                        <div className="w-full flex flex-row items-center gap-5">
                            <Inputs labelname="Name" />
                            <Inputs labelname="User Name" />
                        </div>
                        <Inputs labelname="Email" type="email" />
                        <Inputs labelname="Password" type="password" placeholder="6+ charecters" />
                        <div className="agree flex flex-row items-center gap-3">
                            <input type="checkbox" />
                            <p>I agree with Dribbble's Terms of Service, Privacy Policy, and default Notification Settings.</p>
                        </div>
                        <Button title="Create Account" w="w-full" py="py-4" />
                        <div className="text-neutral-600 text-[13px] cursor-pointer">Already have an account?
                            <Link to='/login' className="underline">Sign In</Link>
                        </div>
                        <p className="text-neutral-400 text-[10px]">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
                    </div>
                }
            </div>


        </div>
    )
}

export default Register