import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FiChevronDown } from "react-icons/fi";
import { IoIosCloseCircle } from "react-icons/io";

const Search = () => {

  const [option, setOption] = useState("Shots")
  const [selectOpen, setselectOpen] = useState(false)
  const [search, setsearch] = useState("test")

  const handleChnage = (e: any) => {
    setsearch(e.target.value)
  }

  return (
    <div className="w-full h-full flex items-center  justify-center relative flex-col">
      <div className="absolute top-0 left-0 h-[80px] w-full bg-gradient-to-r from-purple-100  to-cyan-100 z-[-1]"></div>
      <div className="w-[600px] rounded-xl h-[70px] shadow-lg bg-white flex items-center justify-between px-5 flex-row border-[1px] border-solid border-neutral-200 mt-10">
        <CiSearch size={25} />
        <input type="text" className="w-[350px] h-full" placeholder="Search" value={search} onChange={handleChnage} />
        {search &&
          <IoIosCloseCircle size={25} onClick={() => setsearch("")} className="text-neutral-300"/>
        }
        <span className="border-r-[3px] border-solid border-neutral-200 text-white">.</span>

        {/* serach select */}
        <div className="flex items-center px-4 p-2 justify-between gap-4 rounded-md relative cursor-pointer" onClick={() => setselectOpen(!selectOpen)}>
          <span>{option}</span>
          <div className={`transition duration-300 ${selectOpen && "rotate-[180deg]"}`}>
            <FiChevronDown />
          </div>
        </div>
        {selectOpen &&
          <div className="absolute mt-[220px] ml-[400px] flex items-start flex-col p-3 rounded-md border-[1px] border-solid border-neutral-100 bg-white z-10 gap-1">
            <span className={`p-2  w-full rounded-md  cursor-pointer hover:bg-neutral-100 `} onClick={() => setOption("Following")}>Following</span>
            <span className={`p-2  w-full rounded-md  cursor-pointer hover:bg-neutral-100 `} onClick={() => setOption("Popular")}>Popular</span>
            <span className={`p-2  w-full rounded-md  cursor-pointer hover:bg-neutral-100 `} onClick={() => setOption("Note & not worthy")}>New & Note worthy</span>
          </div>
        }

      </div>

      <div className="mt-10 text-center">
        <h1 className="font-bold text-3xl capitalize">{search}</h1>
        <p className="text-neutral-400">Inspirational {search} designs</p>
      </div>
    </div>
  )
}

export default Search