import React from "react";
import { useParams } from "react-router-dom";
import ImageView from "../../Components/IndividualMisic/ImageView";
import MusicDetais from "../../Components/IndividualMisic/MusicDetais";
import { useSingleMusicQuery } from "../../feature/music/musicApiSlice";

const IndividualMusicPage = () => {
  const { id } = useParams();
  console.log(id);
  const {
    data: music,
    isLoading,
    isSuccess,
    isError,
  } = useSingleMusicQuery({ id }) || {};

  let imageViewContent = null;
  if (!isLoading && isSuccess && !isError) {
    const { data } = music || {};
    imageViewContent = (
      <>
        {" "}
        <ImageView data={data} />
      </>
    );
  }
  return (
    <div className=" container mt-10 grid  grid-cols-3">
      <div>{imageViewContent}</div>
      <div className=" col-span-2">
        <MusicDetais />
      </div>
    </div>
  );
};

export default IndividualMusicPage;