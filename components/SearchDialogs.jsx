import React, { useState, useEffect, useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { useRouter } from "next/navigation";
import { Context } from "@/app/context";

const SearchDialogs = ({ search }) => {
  const { productCars } = useContext(Context);
  const router = useRouter();

  const searchDialogsList = productCars
    ?.filter((data) => data.name.includes(search))
    .map((data) => {
      return (
        <Col
          onClick={() => router.push(`/cars/${data.imageID}`)}
          key={data.id}
          style={{ cursor: "pointer" }}
          className="col-12 bg-white my-1"
        >
          <div className=" d-flex justify-content-between align-items-center">
            <div className="">
              <p className="m-0 fw-bold">{data.name}</p>
              <p className="m-0">Rs. {data.exshowroom_price} Lakhs</p>
            </div>

            <p>Rs. {data.exshowroom_price} Lakhs</p>
          </div>
        </Col>
      );
    });

  return (
    <Row
      style={{
        backgroundColor: "white",
        zIndex: "1000",
        top: "3.5rem",
        right: "0rem",
      }}
      className="search-comp position-absolute p-2 shadow rounded-3"
    >
      {searchDialogsList}
    </Row>
  );
};

export default SearchDialogs;
