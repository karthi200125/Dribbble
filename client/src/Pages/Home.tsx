import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoMdArrowUp } from "react-icons/io";
import { useSelector } from "react-redux";
import Cards from "../Components/Cards";
import Categories from "../Components/Categories";
import FooterBtm from "../Components/FooterBtm";
import Input from "../Components/Inputs";
import Navbar from "../Components/Navbar";
import AxiosRequest from "../Utils/AxiosRequest";
import Search from "./Search";

const Home = () => {
    const [FilterOpen, setFilterOpen] = useState(false);
    const { search } = useSelector((state: any) => state.search);
    const [Allprojects, setAllprojects] = useState([]);
    const [cat, setCat] = useState("Discover")
    const { user } = useSelector((state: any) => state.user)

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

    const Projects = Allprojects.filter((pro: any) => cat === "Discover" ?
        pro?.isPublished === true && pro?.userId !== user?._id :
        pro?.category === cat)

    const filteredProjects = Projects?.filter(
        (project: any) =>
            project?.proTitle.toLowerCase().includes(search.toLowerCase()) ||
            project?.proDesc.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="w-full h-screen ">
            <Navbar />
            <div className="home w-100 h-100 ">
                {search && <Search />}
                <Categories onFilterOpen={() => setFilterOpen(!FilterOpen)} onCat={(cat: any) => setCat(cat)} />
                {FilterOpen && (
                    <div className="w-full px-[75px] mt-10 flex items-center flex-row gap-3 z-10">
                        <Input name="tages" labelname="Tags" placeholder="Its just show not working"/>
                        <Input name="Color" labelname="Colors" placeholder="Its just show not working"/>
                    </div>
                )}
                <Cards cards={filteredProjects} />
                <FooterBtm />

                <div className="absolute bottom-8 right-8 w-[50px] h-[50px] rounded-full bg-neutral-400 hover:bg-neutral-600 cursor-pointer flex items-center justify-center text-white">
                    <IoMdArrowUp size={25} />
                </div>
            </div>
        </div>
    );
};

export default Home;
