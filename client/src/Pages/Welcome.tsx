import { IoCameraOutline } from "react-icons/io5"
import Button from "../Components/Button"
import useHandleCrud from "../Utils/HanldeCrud";
import { useSelector } from "react-redux";
import { useUplaod } from "../Utils/UplaodFile";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { login } from "../Redux/AuthSlice";
import { useNavigate } from "react-router-dom";

const Welcome = () => {

    const { user } = useSelector((state: any) => state.user)
    const [file, setFile] = useState<any>()
    const [country, setcountry] = useState<string>()
    const navigate = useNavigate()

    const handleImageChange = (event: any) => {
        setFile(event.target.files?.[0])
    };

    const { UploadFile, donwlaodUrl, per } = useUplaod({ file, image: undefined })
    useEffect(() => { file && UploadFile(); }, [file]);

    console.log(donwlaodUrl, per)

    const { Crud, isLoading } = useHandleCrud({
        url: `/user/userupdate/${user?._id}`,
        method: "PUT",
        data: { profilePic: donwlaodUrl ? donwlaodUrl : user?.profilePic, country: country },
        successmsg: "Profile has been uploaded",
        disp: login
    });


    const HanldeProfileUpdate = async () => {
        if (!user?.profilePic && !donwlaodUrl) return toast.error("Select a profile image");
        if (!country) return toast.error("write country name")
        await Crud();
        navigate('/home')
    };

    return (
        <div className="w-full h-screen flex items-center justify-center relative">
            <div className="logo-font absolute top-10 left-10 text-3xl mr-4 hover:opacity-50 transition cursor-pointer">Dribbble</div>
            <div className="w-[600px] h-[600px]  flex flex-col gap-3 ">
                <h1 className="text-[35px] font-bold">Welcome! Let’s create your profile</h1>
                <p className="text-neutral-400">Let others get to know you better!</p>
                <h1 className="font-bold text-2xl mt-5">Add an avatar</h1>
                <div className="w-full flex flex-row gap-10 h-[230px] ">
                    <input type="file" id="profileimg" className="hidden" onChange={handleImageChange} />
                    {donwlaodUrl ?
                        <img src={donwlaodUrl} alt="" className="w-[180px] h-[180px] object-cover rounded-full" />
                        :
                        <label className="w-[180px] h-[180px] rounded-full border-[3px] border-solid border-neutral-200 flex items-center justify-center mt-5 cursor-pointer hover:border-red-400" htmlFor="profileimg">
                            {per ? <span className="font-bold">Image upload {per}%</span>
                                :
                                <>
                                    {user?.profilePic ?
                                        <img src={user?.profilePic} alt="" className="w-[180px] h-[180px] object-contain rounded-full" />
                                        :
                                        <IoCameraOutline size={25} className="text-neutral-400" />
                                    }
                                </>
                            }
                        </label>
                    }
                    <label htmlFor="profileimg" className="p-5 px-6 h-[50px] py-6 border-[1px] border-solid border-neutral-200 rounded-full flex items-center justify-center cursor-pointer mt-[90px]">Choose Image</label>
                </div>
                <h1 className="text-2xl font-bold">Add your location</h1>
                <input type="text" className="w-full p-4 border-b-[2px] border-solid border-neutral-200" placeholder="Enter a Location" onChange={(e) => setcountry(e.target.value)} />
                <div className="w-full text-end">
                    <Button onClick={HanldeProfileUpdate} isLoading={isLoading}>continue</Button>
                </div>
            </div>
        </div>
    )
}

export default Welcome