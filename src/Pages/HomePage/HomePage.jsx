import React from "react";
import { useSelector } from "react-redux";
import { MusicCardSkeleton } from "../../Components/LoadingSkeleton/MusicCardSkeleton";
import NoDataFound from "../../Components/NoData/NoDataFound";
import SongCard from "../../Components/SongCard";
import { useGetAllMusicQuery } from "../../feature/music/musicApiSlice";
const HomePage = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { searchTerm } = useSelector((state) => state.search);

  const {
    data: musicData,
    isLoading,
    isSuccess,
    isError,
  } = useGetAllMusicQuery({ searchTerm }) || {};
  let content = null;
  if (!isLoading && isSuccess && !isError) {
    const { data } = musicData || {};
    if (data.length === 0) {
      content = (
        <div className="flex items-center justify-center w-screen h-screen">
          <NoDataFound />
        </div>
      );
    } else {
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
  }
  if (isLoading && !isSuccess) {
    content = Array(10)
      .fill()
      .map((_, i) => (
        <>
          <MusicCardSkeleton key={i} />
        </>
      ));
  }
  return (
    <div className=" container text-center mt-8 grid grid-cols-5 items-start justify-center gap-3 ">
      {content}
    </div>
  );
};

export default HomePage;
