"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styles from "@/styles/custom.module.css";
import { Cloudinary } from "@cloudinary/url-gen";
import { Button } from "react-bootstrap";
const cld = new Cloudinary({
  cloud: {
    cloudName: "dvmhiqz6e",
  },
});

const Cars = ({ data }) => {
  const router = useRouter();
  const style = {
    background: `url(https://res.cloudinary.com/dvmhiqz6e/image/upload/v1628583889/${data.imageID}.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "15rem",
  };

  return (
    <div
      onClick={() => router.push(`./cars/${data.imageID}`)}
      className={styles.slide}
    >
      <div style={style} className=""></div>
      <p className="mt-2 mb-1 fs-6 fw-bold">{data.name}</p>
      <p className="m-0 small text-capitalize">{data.transmisson_type}</p>
      <p className="m-0 small">Rs. {data.exshowroom_price} Lakhs</p>
      <Button className="small text-black border-danger bg-light mt-2 w-100 tex-center">
        View Details
      </Button>
    </div>
  );
};

export default Cars;
