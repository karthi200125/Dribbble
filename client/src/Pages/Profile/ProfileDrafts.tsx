import { memo, useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import Button from "../../Components/Button"
import Cards from "../../Components/Cards"
import AxiosRequest from "../../Utils/AxiosRequest"
import traingle from '../../assets/traingle.png'

const ProfileDrafts = () => {
    const { user } = useSelector((state: any) => state.user)
    const navigate = useNavigate()
    const [Allprojects, setAllprojects] = useState([]);
    const params = useParams()

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
                <div className="md:w-[450px] w-full md:h-[300px] h-max flex items-center justify-center flex-col gap-3 rounded-lg border-[1px] border-solid border-neutral-200 p-5">
                    <img src={traingle} alt="" className="w-[100px] h-[70px] object-fill" />
                    <h1 className="text-2xl font-bold text-center">Create your first project</h1>
                    <p className="text-center">Show off your best work. Get feedback, likes</p>
                    <p className="text-center">and be a part of a growing community.</p>
                    {params.id === user?._id &&
                        <Button py="py-2" onClick={() => navigate(`/upload/${user?._id}`)}>create your first projet</Button>
                    }
                </div>
            }
        </div>
    )
}

export default memo(ProfileDrafts)