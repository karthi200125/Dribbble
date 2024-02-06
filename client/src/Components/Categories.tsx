import { useState, useCallback, useMemo } from "react";
import { FiChevronDown } from "react-icons/fi";
import { RiFilter3Line } from "react-icons/ri";
import { TiTick } from "react-icons/ti";

const Categories = ({ onFilterOpen, onCat }: any) => {
  const categories = useMemo(() => [
    "Discover",
    "Animation",
    "Branding",
    "Illustration",
    "Mobile",
    "Print",
    "ProductDesign",
    "Typography",
    "WebDesign",
  ], []);

  const [option, setOption] = useState("Following");
  const [selectOpen, setSelectOpen] = useState(false);
  const [category, setCategory] = useState("Discover");

  const handleOpen = useCallback(() => {
    onFilterOpen(onFilterOpen);
  }, [onFilterOpen]);

  const handleCatSet = useCallback((data: any) => {
    onCat(data);
    setCategory(data);
  }, [onCat]);

  return (
    <div className="w-full px-[10px] md:px-[75px] h-full flex items-center justify-between gap-10 mt-10 pb-[20px] md:pb-[0px] border-b-[1px] border-solid border-neutral-150 md:border-none">
      <div className="flex items-center px-4 p-2 justify-center gap-4 border-[1px] border-solid border-neutral-200 rounded-md relative cursor-pointer shadow-md" onClick={() => setSelectOpen(!selectOpen)}>
        <span>{option}</span>
        <div className={`transition duration-300 ${selectOpen && "rotate-[180deg]"}`}>
          <FiChevronDown />
        </div>
      </div>
      {selectOpen &&
        <div className="absolute w-[150px] mt-[220px] flex items-start flex-col p-3 rounded-md border-[1px] border-solid border-neutral-100 bg-white z-10 gap-1 ">
          <span className={`p-2 ${option === "Following" && 'bg-neutral-100'} w-full rounded-md  cursor-pointer hover:bg-neutral-100 flex items-center justify-between`} onClick={() => setOption("Following")}>Following {option === "Following" && <TiTick />}</span>
          <span className={`p-2 ${option === "Popular" && 'bg-neutral-100'} w-full rounded-md  cursor-pointer hover:bg-neutral-100 flex items-center justify-between`} onClick={() => setOption("Popular")}>Popular {option === "Popular" && <TiTick />}</span>
          <span className={`p-2 ${option === "Note " && 'bg-neutral-100'} w-full rounded-md  cursor-pointer hover:bg-neutral-100 flex items-center justify-between`} onClick={() => setOption("Note")}>New {option === "Note" && <TiTick />}</span>
        </div>
      }
      <ul className="category hidden md:flex items-center w-full flex-row justify-center gap-2 overflow-y-scroll scrollbar-hide ">
        {categories.map((cat, i) => (
          <li key={i} className={`${cat === category && "bg-neutral-100"} font-semibold p-2 px-3 rounded-full hover:opacity-80 cursor-pointer hover:bg-neutral-130 transition text-sm`}
            onClick={() => handleCatSet(cat)}>
            {cat}
          </li>
        ))}
      </ul>
      <div className="flex items-center flex-row gap-2 p-2 border-[1px] border-solid border-neutral-100 rounded-full px-3 cursor-pointer" onClick={handleOpen}>
        <RiFilter3Line />
        <span>Filter</span>
      </div>
    </div>
  );
};

export default Categories;
