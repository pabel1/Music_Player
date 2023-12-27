import React from "react";

const ImageView = ({ data }) => {
  return (
    <div>
      <img
        className=" rounded-lg"
        src={data?.coverImg?.secure_url}
        alt="cover-image"
      />
    </div>
  );
};

export default ImageView;
