import React from "react";

const Slides = ({ slidesID }) => {
  const style = {
    // fetching images from cloudinary storage
    background: `url(https://res.cloudinary.com/dvmhiqz6e/image/upload/v1628583889/${slidesID}.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "30rem",
  };

  return <div style={style}></div>;
};

export default Slides;
