import React from "react";
import myPic from "../Images/myProfile.jpeg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Slide from "./Slide"


import {
  faCode,
  faGraduationCap,
  faChartArea,
  faPager,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import {Container, Row, Col} from "reactstrap";

const Header = () => {
  return (
    <div className="header">
      <Container>
        <div className="header-contents" data-aos="zoom-in">
          <Row className="justify-content-between">
            <Slide />
             {/* <Col xs="12" md="4">
            <div className="header-img">
              <img src={myPic} alt="Axel Bizel's Avatar" />
              </div>
            </Col> */}
            {/* <Col  xs="12" md="6">
              <div className="header-text">
                <h1 className="header-title">Taha  Jadid</h1>
                <p>
                  <br />
                  <FontAwesomeIcon
                    icon={faGraduationCap}
                    style={{ fontSize: "1.4em" }}
                  />
                  &nbsp;Ingénieur d'état en Systèmes Embarquès
                  <br />
                  <br />
                  <FontAwesomeIcon
                    icon={faCode}
                    style={{ fontSize: "1.4em" }}
                  />
                  &nbsp;Dév. Web  React-Node.js
                  <br />
                  <br />
                  <FontAwesomeIcon
                    icon={faPager}
                    style={{ fontSize: "1.4em" }}
                  />
                  &nbsp;23 ans, Célibataire
                </p>
              </div>
            </Col>
            <Col xs="12" md="2">
            <div className="header-text">
            <a style={{color:"#daa520ab" }}
              href="https://drive.google.com/file/d/1wJJLucFJAR4MnnBY3CYFbI_WNSvOFtcQ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              alt="Mon CV au format PDF"
            >
            <p >
                <FontAwesomeIcon
                  icon={faDownload}
                  style={{ fontSize: "1.4em", color:"#daa520ab" }}
                />
                &nbsp;PDF
              </p>  
            </a>
            </div>
            </Col>  */}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Header;
