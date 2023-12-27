import React, { useState } from "react";

import { FiSearch } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { setSearchTearm } from "../../feature/search/searchSlice";

const Searchbar = () => {
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    dispatch(setSearchTearm({ searchTerm: newSearchTerm }));
  };

  return (
    <>
      <div className="flex flex-row justify-start items-center ">
        <FiSearch aria-hidden="true" className="w-5 h-5 ml-4 text-white " />
        <input
          name="search-field"
          autoComplete="off"
          id="search-field"
          className="flex-1 bg-transparent border-none placeholder-gray-500 outline-none text-base text-white p-4 "
          placeholder="Search"
          type="search"
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default Searchbar;
