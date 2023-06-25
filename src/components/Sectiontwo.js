import { Col, Container, Row } from "react-bootstrap";
import "./Sectiontwo.css";
import { Product } from "./Products";
import { Link } from "react-router-dom";
import Footer from "./footer";

const Pagetwo = ({ filterbyCat, allproducts }) => {
  const all = ["All", ...new Set(Product.map((i) => i.category))];
  localStorage.setItem("x", null);
  const edit = (src) => {
    localStorage.setItem("x", src);
  };
  return (
    <div>
      <p
        className=" text-center mt-5 fw-bold"
        style={{ color: "#dc3545", fontSize: "35px" }}
      >
        CLOTHES
      </p>
      <hr style={{ width: "70%", margin: "auto" }}></hr>
      <Row>
        <Col className="categorys d-flex justify-content-center flex-wrap">
          {all.length >= 1 ? (
            all.map((cat) => {
              return (
                <p
                  key={Math.random()}
                  onClick={() => {
                    filterbyCat(cat);
                  }}
                  className=" px-4 py-2 text"
                >
                  {cat}
                </p>
              );
            })
          ) : (
            <p>Not Found</p>
          )}
        </Col>
      </Row>
      <Container>
        <Row>
          {allproducts.length >= 1 ? (
            allproducts.map((s) => {
              return (
                <Col
                  key={Math.random()}
                  lg="3"
                  md="6"
                  sm="12"
                  className=" d-flex justify-content-center flex-wrap"
                >
                  <Link to="/Details" style={{ textDecoration: "none" }}>
                    <div className="mt-5 item">
                      <img
                        src={s.img}
                        onClick={() => edit(s.img)}
                        alt="none"
                        className="card-img"
                      />
                      <div className="d-flex justify-content-between mt-2">
                        <p style={{ color: "#dc3545" }}>{s.title}</p>
                        <p>{s.price}</p>
                      </div>
                    </div>
                  </Link>
                </Col>
              );
            })
          ) : (
            <h3>Not Found</h3>
          )}
        </Row>

        <Footer />
      </Container>
    </div>
  );
};

export default Pagetwo;
