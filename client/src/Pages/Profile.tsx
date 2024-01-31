import { useNavigate } from "react-router-dom"
import Button from "../Components/Button"
import Navbar from "../Components/Navbar"
import noprofile from '../assets/noprofile.png'
import { useSelector } from "react-redux"

const Profile = () => {

  const { user } = useSelector(state => state.user)

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/account/123')
  }

  return (
    <div className="w-full h-screen">
      <Navbar />
      <div className="w-full h-screen p-20">
        <div className="h-[200px] w-full  flex items-center justify-center flex-row gap-10">
          <img src={user?.profilePic || noprofile} alt="" className="w-[120px] h-[120px] object-cover rounded-full" />
          <div className="flex items-start flex-col gap-3">
            <h1 className="text-3xl font-bold">{user?.username}</h1>
            <span>india</span>
            <div className="flex flex-row items-center">
              <Button bg="transparent" border="neutral-200" color="black" onClick={handleClick}>
                Edit profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile