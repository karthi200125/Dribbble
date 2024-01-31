import { useState } from "react"
import Cards from "../Components/Cards"
import Categories from "../Components/Categories"
import Navbar from "../Components/Navbar"
import Input from "../Components/Inputs"
import FooterBtm from "../Components/FooterBtm"
import { IoMdArrowUp } from "react-icons/io";
import { CARDS } from "../Cardsdata"
import Search from "./Search"
import Button from "../Components/Button"

const Home = () => {

    const [FilterOpen, setFilterOpen] = useState(false)

    return (
        <div className="w-full h-screen ">
            <Navbar />
            <div className="home w-100 h-100 ">
                {/* <Search /> */}
                <Categories onFilterOpen={() => setFilterOpen(!FilterOpen)} />
                {FilterOpen &&
                    <div className="w-full px-[75px] mt-10 flex items-center flex-row gap-3 z-10">
                        <Input name="tages" labelname="Tages" />
                        <Input name="Color" labelname="Colors" />
                    </div>
                }
                <Cards cards={CARDS} />
                <FooterBtm />
                
                <div className="absolute bottom-8 right-8 w-[50px] h-[50px] rounded-full bg-neutral-400 hover:bg-neutral-600 cursor-pointer flex items-center justify-center text-white">
                    <IoMdArrowUp size={25} />
                </div>
            </div>
        </div>
    )
}

export default Home