import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Logo from "../Assets/logo/light-logo.png";
import twitterIcon from "../Assets/icons/twitter.png";
import facebookIcon from "../Assets/icons/facebook.png";
import linkedinIcon from "../Assets/icons/linkedin.png";
import instagramIcon from "../Assets/icons/instagram.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import globeIcon from "../Assets/icons/globe.png";
import { useEffect } from "react";

function Footer() {
  const socialLinks = [
    {
      key: "1",
      href: "/",
      icon: twitterIcon,
    },
    {
      key: "2",
      href: "/",
      icon: facebookIcon,
    },
    {
      key: "3",
      href: "/",
      icon: linkedinIcon,
    },
    {
      href: "/",
      icon: instagramIcon,
    },
  ];

  useEffect(() => {

    // Move copyright to normal position on lg breakpoint
    if (window.matchMedia("(min-width: 992px)").matches) {
      document.getElementById("lg-copyright").classList.remove("d-none");
      document.getElementById("sm-copyright").classList.add("d-none");
    }
    // Move copyright to bottom position on sm & md breakpoints
    if (window.matchMedia("(max-width: 991px)").matches) {
      document.getElementById("sm-copyright").classList.remove("d-none");
      document.getElementById("lg-copyright").classList.add("d-none");
    }
  });

  return (
    <footer>
      <Row className="align-items-stretch">
        <Col xs={12} md={12} lg={3}>
          <div class="d-flex flex-column mb-3">
            <div class="p-2">
              <Image src={Logo} />
            </div>
            <div class="p-2">
              As an upsale and exclusive chauffeur and limousine service near
              Indonesia, we have been ensuring for more than 15 years that you
              get to your destination on time and safely.
            </div>
            <div class="p-2 pt-4">
              <div class="d-flex flex-row mb-3 justify-content-start">
                {socialLinks.map((link) => (
                  <a href={link.href}>
                    <Image src={link.icon} className="me-4" />
                  </a>
                ))}

                {/* <div class="p-2">2</div>
                <div class="p-2">2</div>
                <div class="p-2">2</div> */}
              </div>
            </div>
          </div>
        </Col>
        <Col xs={12} md={4} lg={3}>
          <div class="d-flex flex-column mb-3">
            <div class="p-2 footer-section">Buy Vehicle</div>
            <div class="p-2">
              <a className="footer-link" href="/">
                Find new car
              </a>
            </div>
            <div class="p-2">
              <a className="footer-link" href="/">
                Current vehicle offers
              </a>
            </div>
            <div class="p-2">
              <a className="footer-link" href="/">
                Price lists & brochures
              </a>
            </div>
          </div>
        </Col>
        <Col xs={12} md={4} lg={3}>
          <div class="d-flex flex-column mb-3">
            <div class="p-2 footer-section">Purchase advice</div>
            <div class="p-2">
              <a className="footer-link" href="/">
                Book a test drive
              </a>
            </div>
            <div class="p-2">
              <a className="footer-link" href="/">
                Find a dealer near you
              </a>
            </div>
            <div class="p-2">
              <a className="footer-link" href="/">
                Find used vehicles
              </a>
            </div>
          </div>
        </Col>
        <Col xs={12} md={4} lg={3}>
          <div class="d-flex flex-column mb-3">
            <div class="p-2 footer-section">Customer Service</div>
            <div class="p-2">
              <a className="footer-link" href="/">
                Current service offers
              </a>
            </div>
            <div class="p-2">
              <a className="footer-link" href="/">
                Online service campaign VIN-checker
              </a>
            </div>
            <div class="p-2">
              <a className="footer-link" href="/">
                5 Year staf service
              </a>
            </div>
            <div class="p-2">
              <a className="footer-link" href="/">
                24h roadside assistance
              </a>
            </div>
            <div class="p-2">
              <a className="footer-link" href="/">
                New and events
              </a>
            </div>
            <div class="p-2">
              <a className="footer-link" href="/">
                Press relase
              </a>
            </div>
          </div>
        </Col>
      </Row>
      <hr style={{ border: "0", borderTop: "2px solid white" }} />

      <Row className="align-items-stretch">
        <Col xs={12} md={12} lg={4}>
          <div class="d-flex flex-column mb-3">
            <div id="lg-copyright" class="p-2 footer-section">
              <span className="footer-link">Copyright 2023 Mobiling Co.</span>
            </div>
          </div>
        </Col>
        <Col xs={6} md={3} lg={2}>
          <div class="d-flex flex-column mb-3">
            <div class="p-2 footer-section">
              <a className="footer-link" href="/">
                Terms of Service
              </a>
            </div>
          </div>
        </Col>
        <Col xs={6} md={3} lg={2}>
          <div class="d-flex flex-column mb-3">
            <div class="p-2 footer-section">
              <a className="footer-link" href="/">
                Privacy Policy
              </a>
            </div>
          </div>
        </Col>
        <Col xs={6}  md={3} lg={2}>
          <div class="d-flex flex-column mb-3">
            <div class="p-2 footer-section">
              <a className="footer-link" href="/">
                Cookies
              </a>
            </div>
          </div>
        </Col>
        <Col xs={6} md={3} lg={2}>
          <div class="d-flex flex-column mb-3">
            <div class="p-2 footer-section">
              <span className="footer-link">
                <a className="footer-link" href="/">
                  <Image src={globeIcon} className="me-2" />
                </a>
                <span>English</span>
                <a className="footer-link" href="/">
                  <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                </a>
              </span>
            </div>
          </div>
        </Col>

        <Col id="sm-copyright" xs={12} lg={4}>
          <div class="d-flex flex-column mb-3">
            <div class="p-2 footer-section">
              <span className="footer-link">Copyright 2023 Mobiling Co.</span>
            </div>
          </div>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
