import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Information = () => {
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
              style={{ height: "500px", borderRadius: "10px" }}
            ></img>
          </Col>
          <Col>
            <h3>About :</h3>
            <p>
              T-shirt with a round neckline and short sleeves. Contrast
              @Inigo_Studio graphic details on the front and back.
            </p>
            <Link to="/Order">
              <Button variant="danger">Add To Bag</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Information;
