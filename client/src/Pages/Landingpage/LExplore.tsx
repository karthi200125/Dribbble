import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import Cards from "../../Components/Cards";
import AxiosRequest from "../../Utils/AxiosRequest";

const LExplore = () => {

  const [Allprojects, setAllprojects] = useState([]);
  const navigate = useNavigate()

  // Fetch all projects of the user
  const getAllProjects = async () => {
    try {
      const res = await AxiosRequest.post(`/project/getallpro`);
      setAllprojects(res?.data);
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    getAllProjects()
  }, [])

  const publishedProjects = Allprojects?.filter((pro: any) => pro?.isPublished === true)

  return (
    <div className="w-full flex items-center flex-col justify-center bg-white pt-10 pb-20">
      <h1 className="w-full text-4xl md:text-6xl mb-8 text-center md:text-center ">Explore inspiring designs</h1>
      <Cards cards={publishedProjects} cardlength={12}/>
      <Button bg="transparent" border="border-black" py="py-4" onClick={()=> navigate('/login')}>Browse more inspiration</Button>
    </div>
  )
}

export default LExplore