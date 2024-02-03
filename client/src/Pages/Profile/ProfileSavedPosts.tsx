import { memo, useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useParams } from "react-router-dom"
import Cards from "../../Components/Cards"
import AxiosRequest from "../../Utils/AxiosRequest"

const ProfileSavedPosts = () => {
    const [Savedprojects, setSavedprojects] = useState([])
    const params = useParams()    

    const getSavedProjects = async () => {
        try {
            const res = await AxiosRequest.post(`/project/getallpro`, { userId: params.id, save: true });
            setSavedprojects(res?.data);
        } catch (error: any) {
            toast.error(error?.response?.data?.message);
        }
    }

    useEffect(() => {
        getSavedProjects()
    }, [params.id])


    return (
        <div className="w-full h-full flex items-center justify-center">
            {Savedprojects?.length > 0 ?
                <Cards cards={Savedprojects} profile={true} />
                :
                <div className="w-full h-full flex items-center justify-center flex-col">
                    <img src="https://cdn.dribbble.com/assets/art-banners/new-style-47a1a2dcf248bdb9f33d8d2504081ccc29b5814e593707c043bc03e8aecba04f.png" alt=""
                        className="w-[350px] h-[350px] object-cover"
                    />                    
                </div>
            }
        </div>
    )
}

export default memo(ProfileSavedPosts)