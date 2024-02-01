import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Button from "../../Components/Button";
import Cards from "../../Components/Cards";
import AxiosRequest from "../../Utils/AxiosRequest";

const LExplore = () => {

  const [Allprojects, setAllprojects] = useState([]);

  // Fetch all projects of the user
  const getAllProjects = async () => {
    try {
      const res = await AxiosRequest.get(`/project/getallpro`);
      setAllprojects(res?.data);
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    getAllProjects()
  }, [])


  return (
    <div className="w-full flex items-center flex-col justify-center bg-white pt-10 pb-20">
      <h1 className="w-full text-5xl mb-8 text-center md:text-center ">Explore inspiring designs</h1>
      <Cards cards={Allprojects} />
      <Button bg="transparent" border="border-black" py="py-4" >Browse more inspiration</Button>
    </div>
  )
}

export default LExplore