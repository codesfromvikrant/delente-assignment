import React from "react";

const Slides = ({ slidesID }) => {
  const style = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  };

  return (
    <div style={{ width: "100%", height: "30rem" }}>
      <img
        src={`https://res.cloudinary.com/dvmhiqz6e/image/upload/v1628583889/${slidesID}.jpg`}
        alt="Banner Image"
        loading="lazy"
        style={style}
      />
    </div>
  );
};

export default Slides;
