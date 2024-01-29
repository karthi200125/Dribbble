import { CiSearch } from "react-icons/ci";
import { useLocation } from "react-router-dom";

const SearchBar = () => {

  const loaction = useLocation()
  const pathname = loaction.pathname

  return (
    <div className={`hidden md:flex flex items-center ${pathname === '/home' ? "bg-neutral-100" : "bg-white"} p-3 rounded-full gap-2`}>
      <CiSearch className="" size={25} />
      <input type="text" placeholder="Search" className={`focus:outline-none ${pathname === '/home' ? "bg-neutral-100" : "bg-white"}`} />
    </div>
  )
}

export default SearchBar