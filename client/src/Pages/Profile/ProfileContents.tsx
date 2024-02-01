import { useState } from "react"
import ProfileAbout from "./ProfileAbout"
import ProfileDrafts from "./ProfileDrafts"
import ProfileLikedPosts from "./ProfileLikedPosts"
import ProfileWorks from "./ProfileWorks"

const ProfileContents = () => {

    const top = ["Work", "Boosted Shots", "Collections", "Liked Shots", "About", "Drafts"]
    const [option, setOption] = useState("Work")


    return (
        <div className="w-full h-full mt-5 flex flex-col gap-10 ">
            <div className="flex flex-row gap-5 items-center">
                {top.map((item, i) => (
                    <div key={i} className={`font-semibold p-2 px-3 rounded-full hover:opacity-80 cursor-pointer hover:bg-neutral-130 transition ${item === option && "bg-neutral-100"}`} onClick={() => setOption(item)}>
                        {item}
                    </div>
                ))}
            </div>
            <span className="w-full h-[1px] bg-neutral-200 "></span>

            {/* content */}
            <div className=" w-full h-full flex items-center justify-center">
                {option === 'Drafts' && <ProfileDrafts />}
                {option === 'About' && <ProfileAbout />}
                {option === 'Liked Shots' && <ProfileLikedPosts />}
                {option === 'Work' && <ProfileWorks />}
            </div>



        </div>
    )
}

export default ProfileContents