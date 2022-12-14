import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/IIlogo.svg";
import navIcon1 from "../assets/img/linkedin.svg";
import navIcon2 from "../assets/img/github.svg";
import navIcon3 from "../assets/img/file-earmark-person-fill.svg";
import Pdf from "../documents/Ian_Irwin_Resume.pdf";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/ian-irwin-b92b78233/"
                target="blanks"
              >
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://github.com/Ianirwin18" target="blanks">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href={Pdf} target="blanks">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
