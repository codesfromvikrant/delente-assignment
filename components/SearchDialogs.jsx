import React, { useState, useEffect, useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { useRouter } from "next/navigation";
import { Context } from "@/app/context";

const SearchDialogs = ({ search }) => {
  // Access the productCars data from the Context
  const { productCars } = useContext(Context);
  const router = useRouter();

  // Filter productCars based on the search query and map them to Col components
  const searchDialogsList = productCars
    ?.filter((data) => data.name.toLowerCase().includes(search.toLowerCase()))
    .map((data) => {
      return (
        // Each Col component represents a search result item
        <Col
          onClick={() => router.push(`/cars/${data.imageID}`)}
          key={data.id}
          style={{ cursor: "pointer" }}
          className="col-12 bg-white my-1"
        >
          <div className=" d-flex justify-content-between align-items-center">
            <div className="">
              <p className="m-0 fw-bold">{data.name}</p>
              <p className="m-0 text-capitalize">{data.transmisson_type}</p>
            </div>

            <p className="color-text m-0">Rs. {data.exshowroom_price} Lakhs</p>
          </div>
        </Col>
      );
    });

  // Render the searchDialogsList in a Row container
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
