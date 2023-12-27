import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FiSearch } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { setSearchTearm } from "../../feature/search/searchSlice";

const Searchbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    dispatch(setSearchTearm({ searchTerm: newSearchTerm }));
  };

  return (
    <>
      {/* <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="p-2 text-gray-400 focus-within:text-gray-600"
      >
        <label htmlFor="search-field" className="sr-only">
          Search all files
        </label> */}
      <div className="flex flex-row justify-start items-center">
        <FiSearch aria-hidden="true" className="w-5 h-5 ml-4" />
        <input
          name="search-field"
          autoComplete="off"
          id="search-field"
          className="flex-1 bg-transparent border-none placeholder-gray-500 outline-none text-base text-white p-4"
          placeholder="Search"
          type="search"
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      {/* </form> */}
      {/* <div
        className={`${
          search ? "flex" : "hidden"
        } absolute w-full md:w-[50%] h-auto min-h-72 top-full left-0 right-0 md:left-[14.5%] md:right-full  rounded-md shadow-md bg-white z-50
         flex-col border px-2 pt-2 pb-6 max-w-[1632px] mx-auto`}
      >
        <div
          className="w-full mt-2 overflow-y-auto scroll-smooth 
    scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-white 
    scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-w-1"
        ></div>
      </div> */}
    </>
  );
};

export default Searchbar;
