import React from "react";
import ImageView from "./ImageView";
import MusicDetais from "./MusicDetais";

const index = () => {
  return (
    <div className=" grid  grid-cols-3">
      <div>
        <ImageView />
      </div>
      <div className=" col-span-2">
        <MusicDetais />
      </div>
    </div>
  );
};

export default index;
