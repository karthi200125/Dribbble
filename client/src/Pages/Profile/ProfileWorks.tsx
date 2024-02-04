import { memo, useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useNavigate, useParams } from "react-router-dom"
import Button from "../../Components/Button"
import Cards from "../../Components/Cards"
import AxiosRequest from "../../Utils/AxiosRequest"
import traingle from '../../assets/traingle.png'
import { useSelector } from "react-redux"

const ProfileWorks = () => {

    const navigate = useNavigate()
    const { user } = useSelector((state: any) => state.user)

    const [Createdprojects, setCreatedprojects] = useState([])
    const params = useParams()

    const getcreatedProjects = async () => {
        try {
            const res = await AxiosRequest.post(`/project/getallpro`, { userId: params.id, create: true });
            setCreatedprojects(res?.data);
        } catch (error: any) {
            toast.error(error?.response?.data?.message);
        }
    }

    useEffect(() => {
        getcreatedProjects()
    }, [params.id])

    const publisheduserProjects = Createdprojects?.filter((pro: any) => pro?.isPublished === true)

    return (
        <div className="w-full h-full ">
            {Createdprojects?.length > 0 ?
                <Cards cards={publisheduserProjects} Delete={true} />
                :
                <div className="w-[450px] h-[300px] flex items-center justify-center flex-col gap-3 rounded-lg border-[1px] border-solid border-neutral-200 p-5">
                    <img src={traingle} alt="" className="w-[100px] h-[70px] object-fill" />
                    <h1 className="text-2xl font-bold">{params.id === user?._id ? "Upload your first shot" :"user haven't created any yet!"}</h1>
                    {params.id === user?._id &&
                        <>
                            <p>Show off your best work. Get feedback, likes</p>
                            <p>and be a part of a growing community.</p>
                        </>
                    }
                    {params.id === user?._id &&
                        <Button py="py-2" onClick={() => navigate(`/upload/${user?._id}`)}>Upload your first short</Button>
                    }
                </div>
            }
        </div>
    )
}

export default memo(ProfileWorks)