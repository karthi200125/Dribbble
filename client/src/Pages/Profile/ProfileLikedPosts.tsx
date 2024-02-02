import { memo, useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useParams } from "react-router-dom"
import Cards from "../../Components/Cards"
import AxiosRequest from "../../Utils/AxiosRequest"

const ProfileLikedPosts = () => {
    const [Likedprojects, setLikedprojects] = useState([])
    const params = useParams()    

    const getLikedProjects = async () => {
        try {
            const res = await AxiosRequest.post(`/project/getallpro`, { userId: params.id, like: true });
            setLikedprojects(res?.data);
        } catch (error: any) {
            toast.error(error?.response?.data?.message);
        }
    }

    useEffect(() => {
        getLikedProjects()
    }, [params.id])


    return (
        <div className="w-full h-full flex items-center justify-center">
            {Likedprojects?.length > 0 ?
                <Cards cards={Likedprojects} profile={true} />
                :
                <div className="w-full h-full flex items-center justify-center flex-col">
                    <img src="https://cdn.dribbble.com/assets/art-banners/new-style-47a1a2dcf248bdb9f33d8d2504081ccc29b5814e593707c043bc03e8aecba04f.png" alt=""
                        className="w-[350px] h-[350px] object-cover"
                    />
                    <h1 className="text-2xl font-bold">Express your appreciation</h1>
                    <p className="text-center w-[40%] text-neutral-400">Show your appreciation for other's work by liking the shots you love. We'll collect all of your likes here for you to revisit anytime.</p>
                </div>
            }
        </div>
    )
}

export default memo(ProfileLikedPosts)