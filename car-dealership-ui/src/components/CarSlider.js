import Carousel from 'react-bootstrap/Carousel';
import Car from "../Assets/bmw-car.png"

function CarSlider() {
  const carouselItems = [
    {
      key: 1,
      alt: "slide 01",
      src: Car
    },
    {
      key: 2,
      alt: "slide 02",
      src: Car
    }
  ]
  return (
    <Carousel data-bs-theme="dark">
    { carouselItems.map((item) => (
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={item.src}
            alt={item.alt}
          />
        </Carousel.Item>
    ))}
    </Carousel>
  );
}

export default CarSlider;