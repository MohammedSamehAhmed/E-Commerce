import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <Container className="mt-5">
        <hr></hr>
        <Row>
          <Col
            className=" d-flex justify-content-center align-items-center"
            style={{ color: "white", fontSize: "16px", marginBottom: "20px" }}
          >
            copyright &copy;2023 Created By Mohammed Sameh.
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
