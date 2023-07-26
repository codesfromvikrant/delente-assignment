import React from "react";

import { AdvancedImage } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { Cloudinary } from "@cloudinary/url-gen";
const cld = new Cloudinary({
  cloud: {
    cloudName: "dvmhiqz6e",
  },
});

const Slides = ({ slidesID }) => {
  const style = {
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
