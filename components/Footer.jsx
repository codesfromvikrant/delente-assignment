"use client";
import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#e2e8f0" }} className="py-3">
      <Container>
        <Row className="">
          <Col md={6} xs={12} className="">
            <span className="color-text fs-5 fw-bolder">CarBike360 </span>
            <span className="small color-text">
              @2023 Copyright. All Right Reserved
            </span>
          </Col>

          <Col
            md={6}
            xs={12}
            className="d-flex justify-content-end gap-2 align-item-center"
          >
            <FaGlobe className="fs-5 text-primary" />
            <span className="text-primary"> www.carbike360.com</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
