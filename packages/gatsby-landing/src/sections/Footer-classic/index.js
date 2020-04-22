import React from "react";
import Link from "next/link";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaEnvelope,
  FaPinterestP,
  FaInstagram
} from "react-icons/fa";

import { Container, Row, Col } from "common/src/reusecore/Layout";
import Button from "common/src/reusecore/Button";
import ParticleComponent from "common/src/reusecore/Particle";

import logo from "common/src/assets/images/app/footer/footer-logo-two.png";

import FooterBGTwo from "common/src/assets/images/app/footer/footer-particle-two.png";

import FotterWrapper from "./footer.style";

const FooterClassic = () => {
  return (
    <FotterWrapper>
      <img src={FooterBGTwo} alt="img" className="section__particle one" />
      <ParticleComponent />
      <Container>
        <Row>
          <Col xs={12} sm={6} lg={3}>
            <div className="footer-widgets first">
              <Link href="#">
                <a className="footer-logo">
                  <img src={logo} alt="logo" />
                </a>
              </Link>
              <form className="subscribe-form">
                <input type="text" placeholder="Search here..." />
                <Button>
                  <FaEnvelope />
                </Button>
              </form>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={2}>
            <div className="footer-widgets">
              <h3 className="widget-title">Download</h3>
              <ul className="widget-catagory">
                <li>
                  <Link href="#">
                    <a> Company </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a> Android App </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a> ios App </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a> Desktop </a>
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <div className="footer-widgets">
              <h3 className="widget-title">Help</h3>
              <ul className="widget-catagory">
                <li>
                  <Link href="#">
                    <a> FAQ </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a> Privecy </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a> Reporting </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a> Terms & Condition </a>
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={4}>
            <div className="footer-widgets">
              <h3 className="widget-title">Follow US</h3>
              <ul className="social">
                <li>
                  <Link href="#">
                    <a>
                      <FaFacebookF />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>
                      <FaTwitter />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>
                      <FaInstagram />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>
                      <FaLinkedinIn />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>
                      <FaPinterestP />
                    </a>
                  </Link>
                </li>
              </ul>
              <p className="copyright-text">
                Copyright &#169; 2020 Design By
                <Link href="#">
                  <a> devscorn </a>
                </Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </FotterWrapper>
  );
};

export default FooterClassic;
