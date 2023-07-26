"use client";
import React from "react";
import Link from "next/link";
import SearchBar from "../SearchBar";
// bootstrap
import { Navbar, Container, Row, Col } from "react-bootstrap";
import styles from "./styles.module.css";

const NavbarHeader = () => {
  return (
    <header>
      <Navbar className="py-2">
        <Container className="mx-auto">
          <Row className="w-100">
            <Col md={6} xs={12} className="">
              <Navbar.Brand className={styles.logo}>
                <Link href="/">CarBike360</Link>
              </Navbar.Brand>
            </Col>
            <Col
              md={6}
              xs={12}
              className="d-flex justify-content-end align-items-center"
            >
              <SearchBar />
            </Col>
          </Row>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavbarHeader;
