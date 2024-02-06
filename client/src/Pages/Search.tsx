import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FiChevronDown } from "react-icons/fi";
import { IoIosCloseCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { searchredux } from "../Redux/SearchSlice";

const Search = () => {

  const { search } = useSelector((state: any) => state.search)
  const dispatch = useDispatch()
  const [option, setOption] = useState("Shots")
  const [selectOpen, setselectOpen] = useState(false)
  const [searchItem, setsearchItem] = useState(search || '')

  const handleClick = () => {
    dispatch(searchredux(searchItem))
  }

  return (
    <div className="w-full h-full flex items-center  justify-center relative flex-col px-5">
      <div className="absolute top-0 left-0 h-[80px] w-full bg-gradient-to-r from-purple-100  to-cyan-100 z-[-1]"></div>
      <div className="w-full md:w-[600px] rounded-xl h-[65px] shadow-lg bg-white flex items-center justify-between px-5 flex-row mt-10">
        <CiSearch size={25} />
        <input
          type="text"
          className="w-[350px] h-full"
          placeholder="Search"
          value={searchItem}
          onChange={(e) => setsearchItem(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleClick()}
        />

        {search &&
          <IoIosCloseCircle size={25} onClick={() => setsearchItem("")} className="text-neutral-300" />
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
          <div className="absolute w-[150px] bg-white mt-[250px] ml-[150px] md:ml-[400px] flex items-start flex-col p-3 rounded-md border-[2px] border-solid border-neutral-100  z-10 gap-1">
            <span className={`p-2  w-full rounded-md  cursor-pointer hover:bg-neutral-100 `} onClick={() => setOption("Shorts")}>Shorts</span>
            <span className={`p-2  w-full rounded-md  cursor-pointer hover:bg-neutral-100 `} onClick={() => setOption("Members")}>Members</span>
            <span className={`p-2  w-full rounded-md  cursor-pointer hover:bg-neutral-100 `} onClick={() => setOption("teams")}>Teams</span>
          </div>
        }

      </div>

      <div className="mt-10 text-center">
        <h1 className="font-bold text-3xl capitalize">{searchItem}</h1>
        <p className="text-neutral-400">Inspirational {searchItem} designs</p>
      </div>
    </div>
  )
}

export default Search