"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styles from "@/styles/custom.module.css";
import { Button } from "react-bootstrap";

const Cars = ({ data }) => {
  const router = useRouter();
  const style = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  };

  return (
    <div
      onClick={() => router.push(`./cars/${data.imageID}`)}
      className={styles.slide}
    >
      <div style={{ width: "100%", height: "15rem" }} className="">
        <img
          src={`https://res.cloudinary.com/dvmhiqz6e/image/upload/v1628583889/${data.imageID}.jpg`}
          alt={`${data.name} image`}
          loading="lazy"
          style={style}
        />
      </div>
      <p className="mt-2 mb-1 fs-6 fw-bold">{data.name}</p>
      <p className="m-0 small text-capitalize">{data.transmisson_type}</p>
      <p className="m-0 small">Rs. {data.exshowroom_price} Lakhs</p>
      <Button className="detail-btn small text-black border-danger bg-light mt-2 w-100 tex-center">
        View Details
      </Button>
    </div>
  );
};

export default Cars;
