import { Carousel } from "react-bootstrap";
import "./Home.css";
import Pagetwo from "./Sectiontwo";

const Home = ({ Photo, filterbyCat, allproducts }) => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="clothes1.jpg" alt="First slide" />
          <Carousel.Caption>
            <h3>Men Clothes</h3>
            <p>
              Discover the latest styles in men’s fashion with our exclusive
              collection.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="clothes3.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Kids Clothes</h3>
            <p>
              Discover the latest styles in kids’ fashion with our exclusive
              collection.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="clothes2.jpg" alt="Third slide" />

          <Carousel.Caption>
            <h3>Women Clothes</h3>
            <p>
              Discover the latest styles in women’s fashion with our exclusive
              collection.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Pagetwo
        Photo={Photo}
        filterbyCat={filterbyCat}
        allproducts={allproducts}
      />
    </div>
  );
};

export default Home;
