import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { RiFilter3Line } from "react-icons/ri";
import Input from "./Inputs";

const Categories = ({ onFilterOpen }: any) => {
  const categories = [
    "Discover",
    "Animation",
    "Branding",
    "Illustration",
    "Mobile",
    "Print",
    "ProductDesign",
    "Typography",
    "WebDesign",
  ];
  const [option, setOption] = useState("Following")
  const [selectOpen, setselectOpen] = useState(false)

  const HandleOpen = () => {
    onFilterOpen(onFilterOpen)
  }


  return (
    <div className="w-full px-[75px] h-full flex items-center justify-between gap-20 mt-10">
      <div className="flex items-center px-4 p-2 justify-center gap-4 border-[1px] border-solid border-neutral-200 rounded-md relative cursor-pointer" onClick={() => setselectOpen(!selectOpen)}>
        <span>{option}</span>
        <div className={`transition duration-300 ${selectOpen && "rotate-[180deg]"}`}>
          <FiChevronDown />
        </div>
      </div>
      {selectOpen &&
        <div className="absolute mt-[220px] flex items-start flex-col p-3 rounded-md border-[1px] border-solid border-neutral-100 bg-white z-10 gap-1">
          <span className={`p-2  w-full rounded-md  cursor-pointer hover:bg-neutral-100 `} onClick={() => setOption("Following")}>Following</span>
          <span className={`p-2  w-full rounded-md  cursor-pointer hover:bg-neutral-100 `} onClick={() => setOption("Popular")}>Popular</span>
          <span className={`p-2  w-full rounded-md  cursor-pointer hover:bg-neutral-100 `} onClick={() => setOption("Note & not worthy")}>New & Note worthy</span>
        </div>
      }
      <ul className="category flex items-center w-full flex-row justify-center gap-5 overflow-y-scroll scrollbar-hide">
        {categories.map((cat, i) => (
          <li key={i} className={`font-semibold p-2 px-3 rounded-full hover:opacity-80 cursor-pointer hover:bg-neutral-130 transition`}>
            {cat}
          </li>
        ))}
      </ul>
      <div className="flex items-center flex-row gap-2 p-2 border-[1px] border-solid border-neutral-100 rounded-full px-3 cursor-pointer" onClick={HandleOpen}>
        <RiFilter3Line />
        <span>Filter</span>
      </div>
    </div>
  );
};

export default Categories;
