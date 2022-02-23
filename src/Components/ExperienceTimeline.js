import React from "react";
import { Container } from "reactstrap";
import sra from "../Images/sra.png"
import chufes from "../Images/chufes.png"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import "react-vertical-timeline-component/style.min.css";

const pStyle = {
  color: "#DAA520",
};

const Experience = () => {
  return (
    <Container>
      <div data-aos="zoom-in">
        <h2 className="section-titles"> Expérience</h2>
      </div>

      <VerticalTimeline>

        <VerticalTimelineElement
          date="Septembre - Décembre, 2020"
          iconStyle={{
            backgroundImage: `url(${sra})`,
            backgroundColor: "#fff",
            color: "#666666",
            backgroundSize: "cover",
          }}
        >
          <h3>Développeur Freelance - Fes</h3>

          <p>
            <em>
              Développement du site web officiel de l'entreprise Smart Robotics Academy 
            </em>
          </p>
          <br />
          <ul>
            <li> Etude des besoins </li>
            <li>
              Rédaction du Contenu
            </li>
            <li>
              Réalisation d'un site web présentatif responsive et dynamique
            </li>
            <li>
              <b> Stack : </b> HTML / CSS / JS / Bootstrap / Airtable / Figma
            </li>
          </ul>
          <p> 
            <a style={pStyle} href="https://smartroboticsacademy.net/"> 
              <FontAwesomeIcon
                icon={faLink}
                style={{ fontSize: "1em" }}
              />
              &nbsp;Voir le Site
            </a>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="Juillet, 2019"
          iconStyle={{
            backgroundImage: `url(${chufes})`,
            backgroundColor: "#fff",
            color: "#666666",
            backgroundSize: "cover",
          }}
        >
          <h3>Stage d’initiation au sein du centre hospitalier universitaire  - Fès</h3>
          <p>
            <em>
              Etude Théorique et Pratique d'un scanner tdm
            </em>
          </p>
          <br />
          <ul>
            <li>
              Etude des composantes électroniques
            </li>
            <li>
              Etude de transformation des données
            </li>
          </ul>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jan 2020 - Présent"
          iconStyle={{
            backgroundImage: `url(${sra})`,
            backgroundColor: "#fff",
            color: "#666666",
            backgroundSize: "cover",
          }}
        >
          <h3>Coach Formateur en Robotique - Smart Robotics Academy -Fès.</h3>

          <p>
            <em>
              Enseigner la robotique aux enfants
            </em>
          </p>
          <br />

          <ul>
            <li>
              <b>Robot: </b> EV3 / Spike Prime / Wedo 2.0
            </li>
            <li>
              <b>Robot: </b> Vex IQ / Vex Go
            </li>
            <li>
                Arduino
            </li>
            <li>
              <b> Compétition : </b> FLL Maroc / WRO
            </li>
          </ul>
        </VerticalTimelineElement>

        
        
      </VerticalTimeline>
    </Container>
  );
};

export default Experience;
