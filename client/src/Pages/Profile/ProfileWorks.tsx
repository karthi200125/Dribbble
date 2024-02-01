import { memo } from "react"
import Cards from "../../Components/Cards"
import { useSelector } from "react-redux"
import useCustomFetch from "../../Utils/CustomFetch"
import Button from "../../Components/Button"
import traingle from '../../assets/traingle.png'
import { useNavigate } from "react-router-dom"

const ProfileWorks = () => {
    const { user } = useSelector((state: any) => state.user)
    const navigate = useNavigate()

    // const { fetchResult } = useCustomFetch({
    //     url: '/project/getallpro',
    //     data: { likedIds: user?.likedProjects }
    // })

    const fetchResult = [];

    return (
        <div className="w-full h-full ">
            {fetchResult?.length > 0 ?
                <Cards cards={fetchResult} profile={true} />
                :
                <div className="w-[450px] h-[300px] flex items-center justify-center flex-col gap-3 rounded-lg border-[1px] border-solid border-neutral-200 p-5">
                    <img src={traingle} alt="" className="w-[100px] h-[70px] object-fill" />
                    <h1 className="text-2xl font-bold">Upload your first shot</h1>
                    <p>Show off your best work. Get feedback, likes</p>
                    <p>and be a part of a growing community.</p>
                    <Button py="py-2" onClick={() => navigate('/upload/12')}>Upload your first short</Button>
                </div>
            }
        </div>
    )
}

export default memo(ProfileWorks)