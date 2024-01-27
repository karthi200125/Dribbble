import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className="flex items-center bg-white p-3 rounded-full gap-2">
      <CiSearch className="" size={25} />
      <input type="text" placeholder="Search" className="focus:outline-none"/>
    </div>
  )
}

export default SearchBar