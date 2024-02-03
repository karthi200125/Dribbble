import { useState } from "react"
import ProfileAbout from "./ProfileAbout"
import ProfileDrafts from "./ProfileDrafts"
import ProfileLikedPosts from "./ProfileLikedPosts"
import ProfileWorks from "./ProfileWorks"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import ProfileSavedPosts from "./ProfileSavedPosts"

const ProfileContents = () => {

    const { user } = useSelector((state: any) => state.user)
    const top = ["Work", "BoostedShots", "Collections", "LikedShots", "About", "Drafts"]
    const [option, setOption] = useState("Work")
    const params = useParams()

    return (
        <div className="w-full h-full mt-5 flex flex-col gap-10 ">
            <div className="flex flex-row gap-5 items-center">
                {top.map((item, i) => (
                    <div key={i} className={`font-semibold p-3 px-3 rounded-full hover:opacity-80 cursor-pointer hover:bg-neutral-130 transition ${item === option && "bg-neutral-100"}`} onClick={() => setOption(item)}>
                        {item}
                    </div>
                ))}
            </div>
            <span className="w-full h-[1px] bg-neutral-200 "></span>

            {/* content */}
            <div className=" w-full h-full flex items-center justify-center">
                {user?._id === params.id &&
                    option === 'Drafts' && <ProfileDrafts />
                }
                {option === 'About' && <ProfileAbout />}
                {option === 'LikedShots' && <ProfileLikedPosts />}
                {option === 'Collections' && <ProfileSavedPosts />}
                {option === 'Work' && <ProfileWorks />}
            </div>



        </div>
    )
}

export default ProfileContents