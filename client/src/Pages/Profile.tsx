import Button from "../Components/Button"
import Input from "../Components/Inputs"
import Navbar from "../Components/Navbar"

const Profile = () => {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <div className="flex items-center justify-start flex-col w-full h-full">
        <div className="w-[870px] h-[450px] mt-20 flex flex-col gap-5 ">

          <div className="flex items-center flex-row justify-between">
            <div className="flex items-center gap-8 flex-row">
              <img src="https://cdn.dribbble.com/users/17579883/avatars/small/0e6cb604f97f1d9236d3089156e7121f.jpg?1695134966" alt=""
                className="w-[50px] h-[50px] object-cover rounded-full"
              />
              <div>
                <h1 className="text-[20px]">karthikeyan/gereal</h1>
                <p className="text-[15px] text-neutral-400">Update your username and manage your account</p>
              </div>
            </div>

            <div className="text-center px-10 py-2 border-[1px] border-solid border-neutral-200 hover:bg-gradient-to-r from-red-500 to-pink-500 group cursor-pointer">
              <p className="font-bold group-hover:text-white transition duration-200">Go <span className="text-red-400 group-hover:text-white transition duration-200">Pro</span></p>
              <p className="text-[12px] text-neutral-400 group-hover:text-white transition duration-200">Get 3X more portfolio views</p>
            </div>
          </div>

          <div className="flex flex-row gap-5">
            <div className="flex flex-col gap-4 w-[33%] h-full">
              <ul className="flex flex-col gap-2">
                <li className="font-bold">General</li>
                <li className="text-neutral-400">Edit Profile</li>
                <li className="text-neutral-400">Password</li>
                <li className="text-neutral-400">Social Profiles</li>
                <li className="text-neutral-400">Email Notifications</li>
                <li className="text-neutral-400">Billing</li>
                <li className="text-neutral-400">Sessions</li>
                <li className="text-neutral-400">Applications</li>
                <li className="text-neutral-400">Data Export</li>
              </ul>
              <span className="h-[1px] bg-neutral-400"></span>
              <span className="text-red-500 cursor-pointer">Delete Account</span>
            </div>
            <div className="w-full h-full flex gap-3 flex-col">
              <Input labelname="Username" />
              <p className="text-neutral-400">Your Dribbble URL: https://dribbble.com/Karthick25</p>
              <Input labelname="Email" />
              <div className="mt-8">
                <span>Disable Ads</span>
                <p className="text-[15px]">With a Pro account, you can disable ads across the site.</p>
                <div className="w-full text-end">
                  <Button title="Save chnages" py="py-2" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Profile