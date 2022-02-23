import React from "react";
// import INFO from "../data/info";
import ProfileCard from "./ProfileCard";
import SocialeMediaIcons from "./SocialeMediaIcons.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faGraduationCap,
  faChartArea,
  faPager,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";

const Slide = () => {
    const name = "Bilal Benslimane" //INFO["name"];
    const position = "Ingénieur d'état en Systèmes Embarquès"  //INFO["position"];

    return (
        <div className="cover-v1 jarallax" /*style={{backgroundImage: "url('images/cover_bg_2.jpg')"}} */ id="home-section">
        <div className="container">
          <div className="row align-items-center">
              
            <div className="col mx-auto text-center">
              <h1 className="heading gsap-reveal-hero">{name}</h1>
              <h4 className=" gsap-reveal-hero" style={{color:"#fff"}}><p>
                  <br />
                  <FontAwesomeIcon
                    icon={faGraduationCap}
                    style={{ fontSize: "1.1em" }}
                  />
                  &nbsp; Élève Ingénieur en Systèmes Embarquès
                  <br />
                  <br />
                  <FontAwesomeIcon
                    icon={faCode}
                    style={{ fontSize: "1em" }}
                  />
                  &nbsp;Dév. Web  React-Node.js
                  <br />
                  <br />
                  <FontAwesomeIcon
                    icon={faPager}
                    style={{ fontSize: "1em" }}
                  />
                  &nbsp;21 ans, Célibataire
                </p></h4>
              
              <div className="mt-3">
                <SocialeMediaIcons/>
              </div>
              
            </div>

            {/*<div className="col-md-4">
              <ProfileCard/>
            </div>*/}

          </div>
        </div>


        <a href="#experience" className="mouse-wrap smoothscroll">
          <span className="mouse">
            <span className="scroll"></span>
          </span>
          <span className="mouse-label">Scroll</span>
        </a>

      </div>
    );
}

export default Slide;
