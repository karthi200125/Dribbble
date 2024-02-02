import { memo, useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Button from "../../Components/Button"
import Cards from "../../Components/Cards"
import AxiosRequest from "../../Utils/AxiosRequest"
import traingle from '../../assets/traingle.png'

const ProfileDrafts = () => {
    const { user } = useSelector((state: any) => state.user)
    const navigate = useNavigate()
    const [Allprojects, setAllprojects] = useState([]);

    const getAllProjects = async () => {
        try {
            const res = await AxiosRequest.post(`/project/getallpro`, { userId: user?._id });
            setAllprojects(res?.data);
        } catch (error: any) {
            toast.error(error?.response?.data?.message);
        }
    }

    useEffect(() => {
        getAllProjects()
    }, [user?._id])

    const getDreaftedprojectsOnly = Allprojects.filter((pro: any) => pro?.isPublished === false)

    return (
        <div className="w-full h-full">
            {Allprojects?.length > 0 ?
                <Cards cards={getDreaftedprojectsOnly} Delete={true} />
                :
                <div className="w-[450px] h-[300px] flex items-center justify-center flex-col gap-3 rounded-lg border-[1px] border-solid border-neutral-200 p-5">
                    <img src={traingle} alt="" className="w-[100px] h-[70px] object-fill" />
                    <h1 className="text-2xl font-bold">Create your first project</h1>
                    <p>Show off your best work. Get feedback, likes</p>
                    <p>and be a part of a growing community.</p>
                    <Button py="py-2" onClick={() => navigate('/upload/12')}>create your first projet</Button>
                </div>
            }
        </div>
    )
}

export default memo(ProfileDrafts)