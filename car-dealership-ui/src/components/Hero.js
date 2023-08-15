import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import CarSlider from "./CarSlider";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Hero() {
  return (
    <div className="hero-radial-bg">
      <Row>
        <Col lg="6">
          <Stack gap={3}>
            <div className="p-2">
              <p class="usp-header">Best Car For Your Performance</p>
            </div>
            <div className="p-2">
              <p class="usp-subheading">
                We will serve you to get dream car here easily and quickly that
                is reliable
              </p>
            </div>
            <div className="p-2">
              <Form>
                <Form.Group
                  className="mb-3 d-flex flex-row"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    type="text"
                    className="flex-fill"
                    placeholder="search"
                    style={{ borderRadius: "8px 0 0 8px" }}
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
              <p class="car-name">BMW Series 3 BLUE</p>
            </div>
            <div className="text-align-start p-2">
              <div class="d-flex flex-row mb-3">
                <div class="p-2">
                  <div class="d-flex flex-column mb-3">
                    <div className="car-spec-name">Base Price</div>
                    <div className="car-spec-value">$ 41.87k</div>
                  </div>
                </div>
                <div class="p-2">
                  <div class="d-flex flex-column mb-3">
                    <div className="car-spec-name">Power</div>
                    <div className="car-spec-value">365 HP</div>
                  </div>
                </div>
                <div class="p-2">
                  <div class="d-flex flex-column mb-0">
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
          <div className="d-flex flex-column position-relative">
            <p
              className="position-absolute top-0 start-50 translate-middle"
              style={{ margin: "15% 0" }}
            >
              Best Car For Your Performance
            </p>
            <CarSlider className="car-slider " />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Hero;
