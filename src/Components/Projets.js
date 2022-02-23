import React, {useState, useEffect} from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardBody,
} from "reactstrap";

import gestionCabinet from "../Images/Project/gestionCabinet.png";
import yourblog from "../Images/Project/yourblog.png";
import ecommerce from "../Images/Project/ecommerce.png";
import sra from "../Images/Project/sra.png";
import quicksave from "../Images/Project/quicksave.png";
import gestionClinet from "../Images/Project/gestionClinet.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const pStyle = {
  color: "#DAA520",
};

const Projets = () => {
  const [isMobile, setIsMobile] = useState(null)
  useEffect(() => {

    if (window.matchMedia("(max-width: 600px)").matches) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [isMobile]);




  const projectsElements = [
    {
      name: "YourBlog",
      date: "Feb- 2022",
      img: `${yourblog}`,
      links: ["https://github.com/bilalbens/blog_Laravel_Reactjs"],
      linksDescriptions: ["Voir sur Github"],
      description:
        "Développement d’une web app de gestion de Blog.",
      details: [
        "Modélisation et conception de l'application",
        "Choix des technologies",
        "Création des différentes interfaces existent dans l'application",
        "Stack : ReactJs, Redux, Axios, Bootstrap, Laravel, Laravel API ",
      ],
    },
    
    {
      name: "Ecommerce",
      date: "Sep 2021",
      img: `${ecommerce}`,
      links: [
        "https://github.com/bilalbens/ecommerceApp_MERN_SATCK ",
      ],
      linksDescriptions: ["Voir sur Github"],
      description: "Développement d’une web app E-Commerce.",
      details: [
        "Conception et modélisation",
        "Front-End: ReactJs & React Hooks & Routes & Redux & Admin Dashboard & user Dashboard & Searching/Filtering par categories et prix & gestion des orders & LocalStorage(CRUD).",
        "Back-End: Nodejs,& ExpressJs & Sécurité & Gestion d'erreurs & Implementation de paiment en ligne carte de credit & paypal(Braintree).",
        "Base Donnée: MongoDB & Mongoose",
      ],
    },
    {
      name: "Smart Robotics Academy WebSite",
      date: "Juin 2021",
      img: `${sra}`,
      links: ["https://smartroboticsacademy.net/"],
      linksDescriptions: ["Voir le site"],
      description:
        "Développement du site web officiel de l'entreprise Smart Robotics Academy",
      details: [
        "Etude des besoins",
        "Rédaction du Contenu",
        "Développement front-end",
        "Réalisation d'un site web présentatif responsive et dynamique",
        "Stack : HTML / CSS / JS / Bootstrap / Airtable / Figma",
      ],
    },
    {
      name: "Gestion d'un Cabinet",
      date: "Fév 2021",
      img: `${gestionCabinet}`,
      links: [
        "https://github.com/bilalbens/Gesition_Cabinet_Java",
      ],
      linksDescriptions: ["Voir sur Github"],
      description:
        "Gestion d'un Cabinet Medical",
      details: [
        "Conception et scénarisation",
        "Création des différentes interfaces existent dans l'application",
        "Réalisation du design du jeu",
        "Stack : Android SDK - JAVA - SQLite",
      ],
    },
    {
      name: "Gestion des clients et commerciaux",
      date: "Nov 2021",
      img: `${gestionClinet}`,
      links: ["https://www.linkedin.com/posts/bilal-benslimane_amsa6-ensaabrfes-v2x-activity-6872686555807543296-_m2N"],
      linksDescriptions: ["Voir le site"],
      description:
        "Application mobile de gestion des clients et commerciaux en utilisant Android",
      details: [
        "Détection d’un accident et diffuser sa positon vers les différents conducteurs et les ambulanciers a travers le cloud",
        "Création d'un prototype",
        "Stack : ESP8266 - Arduino - Arduino IOT Cloud",
      ],
    },
    {
      name: "QuickSave",
      date: "Nov 2021",
      img: `${quicksave}`,
      links: ["https://www.linkedin.com/posts/bilal-benslimane_amsa6-ensaabrfes-v2x-activity-6872686555807543296-_m2N"],
      linksDescriptions: ["Voir le site"],
      description:
        "Participaion à Amsa6 de Alten avec le projet Quick Save",
      details: [
        "Détection d’un accident et diffuser sa positon vers les différents conducteurs et les ambulanciers a travers le cloud",
        "Création d'un prototype",
        "Stack : ESP8266 - Arduino - Arduino IOT Cloud",
      ],
    },

  ];


 
  return (
    <Container>
      <div data-aos="zoom-in">
        <h2 className="section-titles">Projets</h2>
      </div>

      <Row className="justify-content-center">
        {projectsElements.map((e, i) => (
          <Col
            xs="12"
            md="6"
            xl="4"
            className="my-2"
            data-aos="flip-left"
            data-aos-duration="500"
            data-aos-delay={(isMobile ? 0 : i % 3) * 100}
          >
            <Card body inverse className="projectCard">
              <a  style={pStyle} href={e.links[0]} target="_blank" rel="noopener noreferrer">
                <CardImg top width="100%" src={e.img} alt={e.name} />
              </a>
              <CardBody className="p-0">
                <CardTitle
                  style={{
                    textAlign: "center",
                  }}
                >
                  <h5>{e.name}</h5>
                  <h6>{e.date}</h6>
                </CardTitle>
                <CardText>
                  <p>
                    <em>{e.description}</em>
                  </p>
                  <ul>
                    {e.details.map((d) => (
                      <li>{d}</li>
                    ))}
                  </ul>
                  <p >
                    {e.links.map((l, i) => (
                      <div className="linkSection">
                        <a  href={l} target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faLink} />
                          &nbsp; &nbsp; &nbsp;{e.linksDescriptions[i]}
                        </a>
                        <br />
                      </div>
                    ))}
                  </p>
                </CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projets;
