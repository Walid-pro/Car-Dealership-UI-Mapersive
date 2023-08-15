import Carousel from 'react-bootstrap/Carousel';
import Car from "../Assets/bmw-car.png"

function CarSlider() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Car}
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Car}
          alt="Second slide"
        />

      </Carousel.Item>
    </Carousel>
  );
}

export default CarSlider;