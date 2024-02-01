import { CiLocationOn } from "react-icons/ci"
import Button from "../../Components/Button"
import { GoPerson } from "react-icons/go"
import { useSelector } from "react-redux"

const ProfileAbout = () => {

    const { user } = useSelector((state: any) => state.user)

    return (
        <div className="w-[60%] h-full flex flex-row gap-10 ">
            <div className="w-full flex items-start flex-col gap-2 ">
                <ul className="flex flex-col gap-5">
                    <li>Biography</li>
                    <li>Add Bio</li>
                    <li className="mt-5">Skills</li>
                    <li>Add Skills</li>
                </ul>
                <span className="w-full h-[1px] bg-neutral-200 mt-10"></span>
                <div className="flex flex-row gap-5 mt-10">
                    <span className="text-neutral-400">{user?.followers?.length || 0} followers</span>
                    <span className="text-neutral-400">{user?.followed?.length || 0} following</span>
                </div>
            </div>
            <div className="w-full h-full flex flex-col gap-5">
                <div className="flex flex-row gap-5">
                    <Button bg="transparent" border="neutral-200" py="py-2">share</Button>
                    <Button bg="transparent" border="neutral-200" py="py-2">tweet</Button>
                    <Button bg="transparent" border="neutral-200" py="py-2">copt</Button>
                </div>
                <div className="w-full p-10 bg-neutral-100 rounded-lg flex flex-col gap-3">
                    <div className="flex flex-row gap-2 items-center"><CiLocationOn />{user?.country}</div>
                    <div className="flex flex-row gap-2 items-center"><GoPerson />member since sep 2023</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileAbout