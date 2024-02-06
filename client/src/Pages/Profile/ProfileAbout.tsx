import { useEffect, useState } from "react"
import { CiLocationOn } from "react-icons/ci"
import { GoPerson } from "react-icons/go"
import { useParams } from "react-router-dom"
import Button from "../../Components/Button"
import AxiosRequest from "../../Utils/AxiosRequest"
import { formatDistanceToNow } from "date-fns"

interface User {
    followers: [];
    followed: [];
    country: string;
    createdAt: any;
}

const ProfileAbout = () => {
    const [abourUser, setabourUser] = useState<User>()
    const params = useParams()

    // Fetch the user details
    const getUser = async () => {
        try {
            const res = await AxiosRequest.get<User>(`/user/getuser/${params.id}`);
            setabourUser(res?.data);
        } catch (error: any) {
            console.log(error)
        }
    };

    useEffect(() => {
        getUser()
    }, [params])

    const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "June",
        "July", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const date = new Date(abourUser?.createdAt)
    const month = date.getMonth();
    const year = date.getFullYear()    

    return (
        <div className="w-full md:w-[60%] h-full flex flex-col-reverse md:flex-row gap-10 ">
            <div className="w-full flex items-start flex-col gap-2 ">
                <ul className="flex flex-col gap-5">
                    <li>Biography</li>
                    <li>Add Bio</li>
                    <li className="mt-5">Skills</li>
                    <li>Add Skills</li>
                </ul>
                <span className="w-full h-[1px] bg-neutral-200 mt-10"></span>
                <div className="flex flex-row gap-5 mt-10">
                    <span className="text-neutral-400">{abourUser?.followers?.length || 0} followers</span>
                    <span className="text-neutral-400">{abourUser?.followed?.length || 0} following</span>
                </div>
            </div>
            <div className="w-full h-full flex flex-col gap-5">
                <div className="flex flex-row gap-5">
                    <Button bg="transparent" border="neutral-200" py="py-2">share</Button>
                    <Button bg="transparent" border="neutral-200" py="py-2">tweet</Button>
                    <Button bg="transparent" border="neutral-200" py="py-2">copt</Button>
                </div>
                <div className="w-full p-10 bg-neutral-100 rounded-lg flex flex-col gap-3">
                    <div className="flex flex-row gap-2 items-center"><CiLocationOn />{abourUser?.country}</div>
                    <div className="flex flex-row gap-2 items-center"><GoPerson />Member since {monthNames[month]} ,  {year}</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileAbout