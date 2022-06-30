import React from "react";
import { GoSearch } from "react-icons/go";
const style = {
  wrapper: "",
  input: "",
};
const SearchBar = () => {
  return (
    <div className="flex items-center p-2 space-x-3 rounded-md  bg-[#38434f] ">
      <GoSearch size={20} className="text-white" />
      <input
        type="text"
        placeholder="Search"
        className="border-none bg-transparent w-full outline-none  text-white"
      />
    </div>
  );
};

export default SearchBar;
