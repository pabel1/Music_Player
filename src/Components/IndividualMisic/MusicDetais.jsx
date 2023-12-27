import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { playPause, setActiveSong } from "../../feature/player/playerSlice";
import PlayPause from "../PlayPause";

const MusicDetais = ({ data }) => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song: data, data: [data], i: 0 }));
    dispatch(playPause(true));
  };
  return (
    <div className=" text-white space-y-2">
      <h1 className=" text-3xl">{data.title}</h1>
      <span className=" flex items-center gap-2">
        <p>{data.Album}</p>
        <p>{data.releaseYear}</p>
        <p>{data.artist}</p>
      </span>
      <p>{data.musicDetails}</p>
      <PlayPause
        isPlaying={isPlaying}
        activeSong={activeSong}
        song={data}
        handlePause={handlePauseClick}
        handlePlay={handlePlayClick}
      />
    </div>
  );
};

export default MusicDetais;
