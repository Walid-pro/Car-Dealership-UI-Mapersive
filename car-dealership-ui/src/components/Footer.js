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

function Footer({ Link }) {


  const socialLinks = [
    {
      id: "1",
      href: Link,
      icon: twitterIcon,
    },
    {
      id: "2",
      href: Link,
      icon: facebookIcon,
    },
    {
      id: "3",
      href: Link,
      icon: linkedinIcon,
    },
    {
      id: "4",
      href: Link,
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
          <div className="d-flex flex-column mb-3">
            <div className="p-2">
              <Image src={Logo} />
            </div>
            <div className="p-2">
              As an upsale and exclusive chauffeur and limousine service near
              Indonesia, we have been ensuring for more than 15 years that you
              get to your destination on time and safely.
            </div>
            <div className="p-2 pt-4">
              <div className="d-flex flex-row mb-3 justify-content-start">
                {socialLinks.map((link) => (
                  <a key={link.id} href={link.href}>
                    <Image src={link.icon} className="me-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Col>
        <Col xs={12} md={4} lg={3}>
          <div className="d-flex flex-column mb-3">
            <div className="p-2 footer-section">Buy Vehicle</div>
            <div className="p-2">
              <a className="footer-link" href={Link}>
                Find new car
              </a>
            </div>
            <div className="p-2">
              <a className="footer-link" href={Link}>
                Current vehicle offers
              </a>
            </div>
            <div className="p-2">
              <a className="footer-link" href={Link}>
                Price lists & brochures
              </a>
            </div>
          </div>
        </Col>
        <Col xs={12} md={4} lg={3}>
          <div className="d-flex flex-column mb-3">
            <div className="p-2 footer-section">Purchase advice</div>
            <div className="p-2">
              <a className="footer-link" href={Link}>
                Book a test drive
              </a>
            </div>
            <div className="p-2">
              <a className="footer-link" href={Link}>
                Find a dealer near you
              </a>
            </div>
            <div className="p-2">
              <a className="footer-link" href={Link}>
                Find used vehicles
              </a>
            </div>
          </div>
        </Col>
        <Col xs={12} md={4} lg={3}>
          <div className="d-flex flex-column mb-3">
            <div className="p-2 footer-section">Customer Service</div>
            <div className="p-2">
              <a className="footer-link" href={Link}>
                Current service offers
              </a>
            </div>
            <div className="p-2">
              <a className="footer-link" href={Link}>
                Online service campaign VIN-checker
              </a>
            </div>
            <div className="p-2">
              <a className="footer-link" href={Link}>
                5 Year staf service
              </a>
            </div>
            <div className="p-2">
              <a className="footer-link" href={Link}>
                24h roadside assistance
              </a>
            </div>
            <div className="p-2">
              <a className="footer-link" href={Link}>
                New and events
              </a>
            </div>
            <div className="p-2">
              <a className="footer-link" href={Link}>
                Press relase
              </a>
            </div>
          </div>
        </Col>
      </Row>
      <hr style={{ border: "0", borderTop: "2px solid white" }} />

      <Row className="align-items-stretch">
        <Col xs={12} md={12} lg={4}>
          <div className="d-flex flex-column mb-3">
            <div id="lg-copyright" className="p-2 footer-section">
              <span className="footer-link">Copyright 2023 Mobiling Co.</span>
            </div>
          </div>
        </Col>
        <Col xs={6} md={3} lg={2}>
          <div className="d-flex flex-column mb-3">
            <div className="p-2 footer-section">
              <a className="footer-link" href={Link}>
                Terms of Service
              </a>
            </div>
          </div>
        </Col>
        <Col xs={6} md={3} lg={2}>
          <div className="d-flex flex-column mb-3">
            <div className="p-2 footer-section">
              <a className="footer-link" href={Link}>
                Privacy Policy
              </a>
            </div>
          </div>
        </Col>
        <Col xs={6} md={3} lg={2}>
          <div className="d-flex flex-column mb-3">
            <div className="p-2 footer-section">
              <a className="footer-link" href={Link}>
                Cookies
              </a>
            </div>
          </div>
        </Col>
        <Col xs={6} md={3} lg={2}>
          <div className="d-flex flex-column mb-3">
            <div className="p-2 footer-section">
              <span className="footer-link">
                <a className="footer-link" href={Link}>
                  <Image src={globeIcon} className="me-2" />
                </a>
                <span>English</span>
                <a className="footer-link" href={Link}>
                  <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                </a>
              </span>
            </div>
          </div>
        </Col>

        <Col id="sm-copyright" xs={12} lg={4}>
          <div className="d-flex flex-column mb-3">
            <div className="p-2 footer-section">
              <span className="footer-link">Copyright 2023 Mobiling Co.</span>
            </div>
          </div>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
