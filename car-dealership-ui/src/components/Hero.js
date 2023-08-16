import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import CarSlider from "./CarSlider";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Image from "react-bootstrap/Image";
import star from "../Assets/svg/star.svg";
import { useEffect } from "react";

function Hero() {
  useEffect(() => {
    // Get text
    const text = document.querySelector(".curved-text p");
    // Assign a new value of text with rotated chars
    text.innerHTML = text.innerText
      .split("")
      .map(
        (char, i) =>
          // Style each char with a rotation angle
          `<span style="transform:rotate(${i * 14}deg)">${char}</span>`
      )
      .join("");
  });

  return (
    <div className="hero-section">
      <Row>
        <Col lg="6">
          <Stack gap={3}>
            <div className="p-2">
              <p className="usp-header">Best Car For Your Performance</p>
            </div>
            <div className="p-2">
              <p className="usp-subheading">
                We will serve you to get dream car here easily and quickly that
                is reliable
              </p>
            </div>
            <div className="p-2">
              <Form id="search-form">
                <Form.Group
                  className="mb-3 d-flex flex-row"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    type="text"
                    id="search-input"
                    className="flex-fill"
                    placeholder="search"
                    style={{
                      borderRadius: "8px 0 0 8px",
                      padding: "10px 20px",
                    }}
                  />
                  <Button
                    variant="primary"
                    className="flex-fill"
                    type="submit"
                    style={{ borderRadius: "0 8px 8px 0" }}
                  >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </Button>
                </Form.Group>
              </Form>
            </div>
            <div className="p-2">
              <p className="car-name">BMW Series 3 BLUE</p>
            </div>
            <div className="text-align-start p-2">
              <div className="d-flex flex-row mb-3">
                <div className="p-2">
                  <div className="d-flex flex-column mb-3">
                    <div className="car-spec-name">Base Price</div>
                    <div className="car-spec-value">$ 41.87k</div>
                  </div>
                </div>
                <div className="p-2">
                  <div className="d-flex flex-column mb-3">
                    <div className="car-spec-name">Power</div>
                    <div className="car-spec-value">365 HP</div>
                  </div>
                </div>
                <div className="p-2">
                  <div className="d-flex flex-column mb-0">
                    <div className="car-spec-name">Engine</div>
                    <div className="car-spec-value">362 V6</div>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          </Stack>
        </Col>
        <Col lg="6" className="car-container">
          <div className="d-flex flex-column justify-content-center position-relative">
            <p
              className="position-absolute top-0 start-50 translate-middle"
              style={{ margin: "5% 0" }}
            >
              {/* <Image src={curvedText} /> */}
              <div className="circle-bg">
                <Image src={star} className="star-icon" />
                <div className="curved-text">
                  <p>FOR TIME ROAD AHEAD BUILT</p>
                </div>
              </div>
            </p>
            <CarSlider className="car-slider z-5" />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Hero;
