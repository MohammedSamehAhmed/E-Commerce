import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const Order = () => {
  return (
    <div>
      <Container>
        <Row
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <Col>
            <img
              src={localStorage.getItem("x")}
              alt="none"
              style={{
                height: "500px",
                borderRadius: "10px",
              }}
            ></img>
          </Col>
          <Col>
            <p>Total : 80$</p>
            <Button variant="danger">Buy</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Order;
