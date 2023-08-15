import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";
import carIcon from "../Assets/icons/car.png";
import clockIcon from "../Assets/icons/clock.png";
import locationIcon from "../Assets/icons/location-pin.png";
import touchScreenIcon from "../Assets/icons/touch-screen.png";

function About() {
  return (
    <div className="about-section">
      <Row>
        <Col lg="6">
          <Stack>
            <div className="px-2">
              <span className="about-title">About Us</span>
            </div>
            <div className="px-2 mb-4">
              <span className="about-subheading">
                Find out briefly but informatively
              </span>
            </div>
            <div className="px-2">
              <p className="about-text">
                As an upsale and exclusive chauffeur and limousine service near
                Indonesia, we have been ensuring for more than 15 years that you
                get to your destination on time and safely. We sell in around
                Indonesia, as well as beyond to destinations throughout World.
                From the Indonesia to shuttle service, you can look forward to a
                professional team and comfort of our car service.
              </p>
            </div>
          </Stack>
        </Col>
        <Col lg="6" className="p-3">
          <div
            class="container"
            style={{
              fontSize: "14px",
              height: "100%",
              background: "#e3e6e9",
              borderRadius: "30px",
              color: "#344054",
              fontWeight: "600",
              padding: "10%"
            }}
          >
            <div class="row align-items-center h-50">
              <div class="col-6 mb-2">
                <div class="flexbox-item text-center">
                  <Image src={carIcon} />
                </div>
                <div class="flexbox-item text-center">
                  From business <br /> to luxuaryclass
                </div>
              </div>
              <div class="col-6 mb-2">
                <div class="flexbox-item text-center">
                  <Image src={locationIcon} />
                </div>
                <div class="flexbox-item text-center">
                  125 Location
                  <br />
                  in Indonesia
                </div>
              </div>
            </div>
            <div class="row align-items-center h-50">
              <div class="col-6 mb-2">
                <div class="flexbox-item text-center">
                  <Image src={touchScreenIcon} />
                </div>
                <div class="flexbox-item text-center">
                  Convenient <br />
                  Online Book
                </div>
              </div>
              <div class="col-6 mb-2">
                <div class="flexbox-item text-center">
                  <Image src={clockIcon} />
                </div>
                <div class="flexbox-item text-center">
                  24/7 Exclusive
                  <br />
                  On the road
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default About;
