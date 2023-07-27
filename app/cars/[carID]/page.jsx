"use client";
import React, { useState, useEffect, useContext } from "react";
import RelatedProducts from "@/components/RelatedProducts";
import { BiSolidOffer } from "react-icons/bi";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import { Context } from "@/app/context";

const CarPage = ({ params }) => {
  const { productCars } = useContext(Context);
  const [cardata, setCardata] = useState(null);

  useEffect(() => {
    const data = productCars?.find((data) => data.imageID === params.carID);
    data && setCardata(data);
  }, [productCars, params.carID]);

  const style = {
    // fething image from cloudinary storage
    background: `url(https://res.cloudinary.com/dvmhiqz6e/image/upload/v1628583889/${params.carID}.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
  };

  return (
    <>
      <Container className="my-5">
        <h2 className="fw-bolder">{cardata?.name}</h2>
        <span className="fw-light small">
          ( <span className="color-primary fw-bolder"> {cardata?.reviews}</span>{" "}
          Reviews and{" "}
          <span className="color-primary fw-bolder">
            {" "}
            {cardata?.star_ratings} Star{" "}
          </span>
          Ratings )
        </span>

        <Row className="mt-3 bg-white ">
          <Col lg={6} md={12}>
            <div style={style} className=""></div>
          </Col>
          <Col>
            <h5 className="fw-bolder color-text">
              Rs. {cardata?.exshowroom_price} Lakhs
            </h5>
            <p className="color-text">Ex ShowRoom Price In India</p>

            <p className="small">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              iusto in optio modi! Temporibus quod hic quaerat ad! Quo facere
              accusamus dolorem deserunt inventore iure iusto quod. Beatae,
              aperiam dolores!
            </p>

            <Col lg={6} md={12} sm={12}>
              <Button className="w-100 bg-color-primary border-0 p-3 fw-medium">
                Get The July Offer <BiSolidOffer className="fs-4" />
              </Button>
            </Col>

            <Table className="mt-3">
              <thead>
                <tr>
                  <th scope="col">Key Specifications</th>
                  <th scope="col">Values</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Mileage</th>
                  <td>{cardata?.mileage}</td>
                </tr>
                <tr>
                  <th scope="row">Engine</th>
                  <td>{cardata?.engine}</td>
                </tr>
                <tr>
                  <th scope="row">Transmission Type</th>
                  <td className="text-capitalize">
                    {cardata?.transmisson_type}
                  </td>
                </tr>

                <tr>
                  <th scope="row">Fuel Type</th>
                  <td className="text-capitalize">{cardata?.fuel}</td>
                </tr>

                <tr>
                  <th scope="row">Safety</th>
                  <td>{cardata?.safety_rating}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col>
            <h3>{cardata?.name} Highlights</h3>
            <p className="small">{cardata?.highlights}</p>
          </Col>
        </Row>

        <RelatedProducts />
      </Container>
    </>
  );
};

export default CarPage;
