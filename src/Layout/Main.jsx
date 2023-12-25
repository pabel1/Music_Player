import React from "react";
import { Outlet } from "react-router-dom";

import MusicPlayer from "../Components/MusicPlayer";
import Topbar from "../Components/Navbar/Topbar";
import Searchbar from "../Components/Search/Searchbar";
const Main = () => {
  return (
    <section className="relative flex">
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
        <div className=" container flex items-center justify-between">
          <Topbar />
          <Searchbar />
        </div>

        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <Outlet />
          {/* <div className="xl:sticky relative top-0 h-fit">
            <TopPlay />
          </div> */}
        </div>
      </div>

      {/* {activeSong?.title && ( */}
      <div className="absolute h-32 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-xl z-10">
        <MusicPlayer />
      </div>
      {/* )} */}
    </section>
  );
};

export default Main;
