import React from "react";

const ImageView = ({ data }) => {
  return (
    <div>
      <img src={data?.coverImg?.secure_url} alt="cover-image" />
    </div>
  );
};

export default ImageView;
