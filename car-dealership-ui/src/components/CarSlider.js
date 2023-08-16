import Carousel from "react-bootstrap/Carousel";
import Car from "../Assets/bmw-car.png";

function CarSlider() {
  const carouselItems = [
    {
      id: "1",
      alt: "slide 01",
      src: Car,
    },
    {
      id: "2",
      alt: "slide 02",
      src: Car,
    },
  ];
  return (
    <Carousel data-bs-theme="dark">
      {carouselItems.map((item) => (
        <Carousel.Item key={item.id}>
          <img className="d-block w-100" src={item.src} alt={item.alt} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarSlider;
