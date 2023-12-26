import React from "react";
import { useSelector } from "react-redux";
import { MusicCardSkeleton } from "../../Components/LoadingSkeleton/MusicCardSkeleton";
import SongCard from "../../Components/SongCard";
import { useGetAllMusicQuery } from "../../feature/music/musicApiSlice";
const HomePage = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  console.log(isPlaying);
  const {
    data: musicData,
    isLoading,
    isSuccess,
    isError,
  } = useGetAllMusicQuery({}) || {};
  let content = null;
  if (!isLoading && isSuccess && !isError) {
    const { data } = musicData || {};
    content = (
      <>
        {data &&
          data.map((song, i) => (
            <SongCard
              key={i}
              song={song}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={data}
              i={i}
            />
          ))}
      </>
    );
  }
  if (isLoading && !isSuccess) {
    content = Array(8)
      .fill()
      .map((_, i) => (
        <>
          <MusicCardSkeleton key={i} />
        </>
      ));
  }
  return (
    <div className=" container text-center mt-8 grid grid-cols-5 items-center justify-center gap-3 overflow-auto">
      {content}
    </div>
  );
};

export default HomePage;
