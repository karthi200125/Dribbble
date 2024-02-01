import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { searchredux } from "../Redux/SearchSlice";

const SearchBar = () => {

  const { search } = useSelector((state: any) => state.search)
  const dispatch = useDispatch()

  // console.log("search", search)

  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();
  const [query, setQuery] = useState(search || "");


  const handleClick = () => {
    navigate(`/home`);
    dispatch(searchredux(query))
  };

  return (
    <div className={`hidden md:flex flex items-center ${pathname !== '/' ? "bg-neutral-100" : "bg-white"} p-3 rounded-full gap-2`}>
      <CiSearch className="" size={25} />
      <input
        type="text"
        value={query}
        placeholder="Search"
        className={`focus:outline-none ${pathname !== '/' ? "bg-neutral-100" : "bg-white"}`}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleClick()} />
    </div>
  );
};

export default SearchBar;
