import { useCallback, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import Button from "../Components/Button"
import Image from "../Components/Image"
import Input from "../Components/Inputs"
import Navbar from "../Components/Navbar"
import Title from "../Components/Title"
import UploadBar from "../Components/UploadBar"
import { login, logout } from "../Redux/AuthSlice"
import useHandleCrud from "../Utils/HanldeCrud"
import { useUplaod } from "../Utils/UplaodFile"

const Account = () => {

    const { user } = useSelector((state: any) => state.user)
    const location = useLocation()
    const edit = location.state?.edit
    const [file, setFile] = useState<any>()
    const [input, setInput] = useState({
        username: user?.username || "",
        email: user?.email || "",
        country: user?.country || "",
        profilePic: user?.profilePic || "",
        available: user?.available || false
    })
    const [isOn, setIsOn] = useState(user?.available || false);
    const navigate = useNavigate()

    const handleImageChange = useCallback((event: any) => {
        setFile(event.target.files?.[0]);
    }, []);


    const handleChange = useCallback((e: any) => {
        setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }, []);

    // edit profile
    const { UploadFile, donwlaodUrl, per } = useUplaod({ file, image: undefined })
    useEffect(() => { file && UploadFile(); }, [file]);

    const { isLoading, Crud } = useHandleCrud({
        url: `/user/userupdate/${user?._id}`,
        method: "PUT",
        data: { ...input, available: isOn ? true : false, profilePic: donwlaodUrl ? donwlaodUrl : user.profilePic },
        successmsg: "user updated succesfully",
        disp: login,
    });

    const { Crud: deleteUser } = useHandleCrud({
        url: `/user/userdelete/${user?._id}`,
        method: "DELETE",
        data: input,
        successmsg: "user Account deleted successfully deleted",
        disp: logout,
    });

    const handleUpdate = useCallback(async () => {
        await Crud();
        navigate(`/account/${user?._id}`);
        console.log({...input})
    }, [user, navigate]);

    const handleDelete = useCallback(async () => {
        await deleteUser();
        navigate("/");
    }, [navigate]);

    const handleClick = useCallback(() => {
        setIsOn((prevIsOn: any) => !prevIsOn);
    }, []);

    return (
        <div className="w-full h-screen">
            <Navbar />
            <Title title={edit ? `Edit profile | Dribbble` : "Account setting | Dribbble"} />
            <div className="flex items-center justify-start flex-col w-full h-full p-[20px] mt-[-70px] md:mt-[0px]">
                <div className="w-full md:w-[870px] h-full md:h-[450px] mt-20 flex flex-col gap-5 ">

                    <div className="flex items-center flex-col-reverse md:flex-row justify-between gap-5">
                        <div className="flex items-center gap-8 flex-row">
                            <Image src={user?.profilePic}
                                imgclass="w-[50px] h-[50px] object-cover rounded-full"
                            />
                            <div>
                                <h1 className="text-[20px] font-bold">{`${user?.username} / ${edit ? "Edit Profile" : "gereal"}`}</h1>
                                <p className="text-[15px] text-neutral-400">Update your username and manage your account</p>
                            </div>
                        </div>

                        <div className="w-full md:w-[250px] text-center px-10 py-2 border-[1px] border-solid border-neutral-200 hover:bg-gradient-to-r from-red-500 to-pink-500 group cursor-pointer">
                            <p className="font-bold group-hover:text-white transition duration-200">Go <span className="text-red-400 group-hover:text-white transition duration-200">Pro</span></p>
                            <p className="text-[12px] text-neutral-400 group-hover:text-white transition duration-200">Get 3X more portfolio views</p>
                        </div>
                    </div>

                    <div className="flex flex-row gap-5">
                        <div className="hidden md:flex flex-col gap-4 w-[33%] h-full">
                            <ul className="flex flex-col gap-2">
                                <li className="font-bold">General</li>
                                <li className="text-neutral-400">Edit Profile</li>
                                <li className="text-neutral-400">Password</li>
                                <li className="text-neutral-400">Social Profiles</li>
                                <li className="text-neutral-400">Email Notifications</li>
                                <li className="text-neutral-400">Billing</li>
                                <li className="text-neutral-400">Sessions</li>
                                <li className="text-neutral-400">Applications</li>
                                <li className="text-neutral-400">Data Export</li>
                            </ul>
                            <span className="h-[1px] bg-neutral-400"></span>
                            <span className="text-red-500 cursor-pointer"></span>
                            <Button onClick={handleDelete} bg="white" color="text-red-600">Delete Account</Button>
                        </div>

                        {edit ?
                            <div className="w-full h-full flex flex-col gap-5">
                                <div className="w-full flex items-center flex-row gap-5">
                                    <Image src={donwlaodUrl || user?.profilePic} imgclass="w-[100px] h-[100px] object-cover rounded-full" />
                                    <div className="flex flex-col gap-3">
                                        <input type="file" id="profileimg" onChange={handleImageChange} />
                                        {per && <UploadBar per={per} />}
                                    </div>
                                </div>
                                <div className="w-full h-full flex flex-col gap-5">
                                    <Input labelname="Username" value={input.username} name="username" onChange={handleChange} />
                                    <Input labelname="Location" value={input.country} name="country" onChange={handleChange} />
                                    <div className="flex items-center">
                                        <span className={`mr-2 w-[220px] ${isOn ? "text-green-500" : "text-red-500"} font-bold`}>{isOn ? 'user available on works' : 'user Not available on works'}</span>
                                        <label className="flex items-center cursor-pointer">
                                            <div className={`relative w-12 h-6 transition duration-300 ease-in-out ${isOn ? 'bg-green-500' : 'bg-blue-500'} rounded-full`}>
                                                <div
                                                    className={`absolute w-6 h-6 transition duration-300 ease-in-out transform ${isOn ? 'translate-x-full' : 'translate-x-0'} bg-white rounded-full shadow-md`}
                                                ></div>
                                            </div>
                                            <input type="checkbox" className="hidden" onClick={handleClick} />
                                        </label>
                                    </div>
                                    <div className="w-full text-end">
                                        <Button py="py-2" onClick={handleUpdate} isLoading={isLoading}>Save Profile</Button>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="w-full h-full flex gap-3 flex-col">
                                <Input labelname="Username" value={input.username} name="username" onChange={handleChange} />
                                <p className="w-full text-neutral-400">Your Dribbble URL: {`https://dribbble.com/${user?.username}`}</p>
                                <Input labelname="Email" value={input.email} name="email" onChange={handleChange} />
                                <div className="mt-8">
                                    <span>Disable Ads</span>
                                    <p className="text-[15px]">With a Pro account, you can disable ads across the site.</p>
                                    <div className="w-full text-end">
                                        <Button py="py-2" onClick={handleUpdate} isLoading={isLoading}>Save changes</Button>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Account