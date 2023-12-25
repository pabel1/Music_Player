import React, { useState } from "react";
import { useSelector } from "react-redux";
import SongCard from "../../Components/SongCard";

const HomePage = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const [data, setData] = useState();
  return (
    <div className=" container text-center mt-8 grid grid-cols-5 items-center justify-center gap-3 overflow-auto">
      {Array(8)
        .fill()
        .map((song, i) => (
          <SongCard
            key={i}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
    </div>
  );
};

export default HomePage;
