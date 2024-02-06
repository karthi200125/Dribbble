import { useCallback, useState } from "react";
import toast from "react-hot-toast";
import { RiArrowDropLeftLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import Inputs from "../Components/Inputs";
import Title from "../Components/Title";
import { login } from "../Redux/AuthSlice";
import AxiosRequest from "../Utils/AxiosRequest";
import { auth, provider } from "../Utils/FireBase";
import { signInWithPopup } from "firebase/auth";

const Register = () => {
    const [reOpen, setRegOpen] = useState(false);
    const [isLoading, setisLoading] = useState(false);
    const dispatch = useDispatch()
    const naivigate = useNavigate()
    const [input, setInputs] = useState({
        name: "",
        username: "",
        email: "",
        password: ""
    });
    const [showpassword, setshowpassword] = useState(false);

    const handleChange = useCallback((e: any) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }, []);

    const handleCreate = async () => {
        if (!input.password) return toast.error("enter password")
        if (!input.email) return toast.error("enter email")
        if (!input.name) return toast.error("enter name")
        if (!input.username) return toast.error("enter username")
        try {
            setisLoading(true)
            const res = await AxiosRequest.post('/auth/register', input)
            dispatch(login(res.data))
            toast.success("user has been created successfully")
            naivigate('/welcome')
            localStorage.setItem('access_token', res.data.token);
        } catch (error: any) {
            toast.error(error.response.data.message)
        } finally {
            setisLoading(false)
        }
    };

    // google login
    const signInWithGoole = useCallback(async () => {
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
                toast.success("Google login successfull")
            })
        }).catch(() => {
            toast.error("Google login failed")
        })
    }, [])

    return (
        <div className="w-full h-screen flex flex-row relative">
            <Title title="Sign up | Dribbble" />
            <video
                src="https://cdn.dribbble.com/uploads/48292/original/30fd1f7b63806eff4db0d4276eb1ac45.mp4?1689187515"
                autoPlay
                muted
                className="hidden md:block w-[400px] h-full object-cover"
            />
            <Link to='/' className="hidden md:block absolute text-white logo-font text-3xl cursor-pointer left-8 top-8">Dribbble</Link>
            {reOpen &&
                <div className="absolute left-[450px] top-[50px] w-10 h-10 flex items-center justify-center rounded-full border-[1px] border-solid border-neutral-300 cursor-pointer" onClick={() => setRegOpen(false)}>
                    <RiArrowDropLeftLine size={25} />
                </div>
            }

            <div className="w-full h-full flex items-start md:ml-[150px] justify-center flex-col p-5">
                {!reOpen ?
                    <div className="w-[100%] md:w-[400px] h-[380px] flex items-center flex-col justify-between ">
                        <h1 className="w-full text-start text-2xl font-bold">Sign up to Dribbble</h1>
                        <Button w="w-full" py="py-4" onClick={signInWithGoole}>
                            {/* <img src={google} alt="" className="w-[30px] h-[30px] object-contain" /> */}
                            <span>Sign Up With Google</span>
                        </Button>
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
                            <Link to='/login' className="underline ml-3 font-bold">Sign In</Link>
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
                        <Inputs labelname="Password" type={showpassword ? "text" : "password"} placeholder="6+ characters" name="password" onChange={handleChange} value={input.password} />
                        <div className="w-full flex items-center gap-5">
                            <input type="checkbox" onChange={() => setshowpassword(!showpassword)} className='cursor-pointer w-[15px] h-[15px]' />
                            <span className='font-bold'>show password</span>
                        </div>
                        
                        <Button w="w-full" py="py-4" onClick={handleCreate} isLoading={isLoading}>Create Account</Button>
                        <div className="text-neutral-600 text-[13px] cursor-pointer">Already have an account?
                            <Link to='/login' className="underline ml-3 font-bold">Sign In</Link>
                        </div>
                        <p className="text-neutral-400 text-[10px]">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
                    </div>
                }
            </div>
        </div>
    );
};

export default Register;
