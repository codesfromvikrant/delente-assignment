import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import { Row, Col, Button } from "react-bootstrap";
import { Context } from "@/app/context";

const RelatedProducts = () => {
  // Access the productCars data from the Context
  const { productCars } = useContext(Context);
  const router = useRouter();

  // Map productCars to Col components representing each related product
  const productList = productCars?.map((product) => {
    // Define the background image style for each product
    const style = {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center",
    };
    return (
      <Col
        key={product.id}
        xs={12}
        md={6}
        lg={3}
        style={{ cursor: "pointer" }}
        className="shadow  py-3 rounded-1"
      >
        <div
          onClick={() => router.push(`/cars/${product.imageID}`)}
          style={{ width: "100%", height: "15rem" }}
          className="bg-light rounded-1"
        >
          <img
            src={`https://res.cloudinary.com/dvmhiqz6e/image/upload/v1628583889/${product.imageID}.jpg`}
            alt={`${product.name} image`}
            loading="lazy"
            style={style}
          />
        </div>
        <p className="mt-2 mb-1 fs-6 fw-bold">{product.name}</p>
        <p className="m-0 small">Rs. {product.exshowroom_price} Lakhs</p>
        <p className="m-0 small text-capitalize">{product.transmisson_type}</p>
        <Button className="detail-btn small text-black border-danger bg-light mt-2 w-100 tex-center">
          View Details
        </Button>
      </Col>
    );
  });

  // Render the list of related products
  return (
    <div className="mt-5">
      {" "}
      <h4 className="fs-3 color-heading fw-bolder text-center">
        Related Products
      </h4>
      <Row className="justify-content-center gap-lg-5 gap-md-2 gap-sm-3 gap-4">
        {productList}
      </Row>
    </div>
  );
};

export default RelatedProducts;
