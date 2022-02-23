import React, {useState, useEffect} from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardTitle,
  CardBody
} from "reactstrap";
import BootstrapLogo from "../Images/Stack/BootstrapLogo.svg";
import CSS3Logo from "../Images/Stack/CSS3Logo.svg";
import GitLogo from "../Images/Stack/GitLogo.svg";
import HTML5Logo from "../Images/Stack/HTML5Logo.svg";
import JSLogo from "../Images/Stack/JavascriptLogo.svg";
import MySQLLogo from "../Images/Stack/MysqlLogo.svg";
import ANDROID from "../Images/Stack/android.png";
import KOTLIN from "../Images/Stack/kotlin.png";
import java from "../Images/Stack/java.png";
import MONGODB from "../Images/Stack/mongodb.png";
import Python from "../Images/python.png";
import JIRA from "../Images/Stack/jira.png";
import Figma from "../Images/Stack/figma.png";
import CPP from "../Images/Stack/c_cpp.png";
import node from "../Images/Stack/NodeLogo.svg";
import php from "../Images/Stack/php.png";
import laravel from "../Images/Stack/laravel.png";
import ReactLogo from "../Images/Stack/ReactLogo.svg";
import ReduxLogo from "../Images/Stack/ReduxLogo.svg";


const Stack = () => {
const [isMobile, setIsMobile] = useState(null)
  useEffect(() => {
  
    if (window.matchMedia("(max-width: 600px)").matches) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [isMobile]);


  const stackElements = [
    {
      name: "HTML5",
      img: `${HTML5Logo}`,
      id: 1
    },
    {
      name: "CSS3",
      img: `${CSS3Logo}`,
      id: 2
    },
    {
      name: "Javascript",
      img: `${JSLogo}`,
      id: 3
    },
    {
      name: "React",
      img: `${ReactLogo}`,
      id: 4
    },
    {
      name: "Redux",
      img: `${ReduxLogo}`,
      id: 5
    },
    {
      name: "Bootstrap",
      img: `${BootstrapLogo}`,
      id: 6
    },
    {
      name: "NodeJS",
      img: `${node}`,
      id: 7
    },
    {
      name: "Java",
      img: `${java}`,
      id: 8
    },
    {
      name: "Android",
      img: `${ANDROID}`,
      id: 9
    },
    {
      name: "Php",
      img: `${php}`,
      id: 10
    },
    {
      name: "Laravel",
      img: `${laravel}`,
      id: 11
    },
    
    {
      name: "MongoDB",
      img: `${MONGODB}`,
      id: 12
    },
    {
      name: "MySQL",
      img: `${MySQLLogo}`,
      id: 13
    },
    {
      name: "Python",
      img: `${Python}`,
      id: 14
    },
    {
      name: "C/C++",
      img: `${CPP}`,
      id: 15
    },
    {
      name: "Git Workflow",
      img: `${GitLogo}`,
      id: 16
    },
    // {
    //   name: "Scrum/Agile",
    //   img: `${ScrumLogo}`,
    //   id: 16
    // },
    // {
    //   name: "Outil JIRA",
    //   img: `${JIRA}`,
    //   id: 17
    // },
    {
      name: "Figma",
      img: `${Figma}`,
      id: 15
    }
  ];

  return (
    <Container>
     
      <div data-aos="zoom-in">
        <h2 className="section-titles">Stack</h2>
      </div>
      
  
        <Row className="justify-content-center">
          {stackElements.map((e,i) => (
            <Col
              xs="6"
              sm="4"
              md="3"
              xl="2"
              className="my-2"
              data-aos="flip-left"
              data-aos-duration="500"
              data-aos-delay={isMobile ? (200*(i % 2)): ((i % 6) * 100)}
            >
              <Card
                body
                inverse
                style={{ backgroundColor: "#ffffff1d", borderColor: "#333" }}
              >
                <CardImg top width="100%" src={e.img} alt={e.name} />
                <CardBody className="p-0">
                  <CardTitle
                    style={{
                      margin: "0",
                      paddingTop: "3vh",
                      textAlign: "center",
                      fontFamily: "Roboto Mono"
                    }}
                  >
                    {e.name}
                  </CardTitle>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
    
    </Container>
  );
};

export default Stack;
