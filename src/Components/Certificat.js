import React from "react";
import { Container } from "reactstrap";
import brightcoding from "../Images/brightcoding.png";
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


const Certificat = () => {
  const certifItem = [
    // {
    //   title: "React JS-Complete Guide for Frontend Web Development",
    //   date: "8 Août 2021",
    //   description: `Udemy`,
    //   link :"https://drive.google.com/file/d/10JB-YaQJcYSLRe8UvKevcLlPNCFPcNmg/view?usp=sharing",
    //   img: `${UDEMY}`,
    // },
    // {
    //   title: "Developing Android App with Kotlin",
    //   date: "26 Juillet 2021",
    //   description: `Udemy`,
    //   link :"https://drive.google.com/file/d/1LJOJJi0dgNzFbzhNSiM8tYbGkLNyjtCh/view?usp=sharing",
    //   img: `${UDEMY}`,
    // },
    // {
    //   title: "Fundamentals of Scalable Data Science",
    //   date: "05 Mai 2020",
    //   description: "IBM, Coursera",
    //   link :"https://drive.google.com/file/d/1w79OwcdKvY8oWzD5mCHJqoj2P34b29kl/view?usp=sharing",
    //   img: `${COURSERA}`,
    // },
    {
      title: "NodeJS ExpressJS MongoDB Mongoose, Développer une Application de A à Z avec MERN Stack",
      date: "2021",
      description: "Bright Coding",
      link :"https://drive.google.com/file/d/10A9h1qvjgTqNQ3yolNHGiBBlmbJ3DjBM/view?usp=sharing",
      img: `${brightcoding}`,
    },
    {
      title: "ReactJS + Redux",
      date: "2021",
      description: "Bright Coding",
      link :"https://drive.google.com/file/d/1prpEgdr6j3FGOEHxseN59GRZhWGMxjY1/view?usp=sharing",
      img: `${brightcoding}`,
    }
  ];

  return (
    <Container>
      <div data-aos="zoom-in">
        <h2 className="section-titles">Certificats</h2>
      </div>

      <VerticalTimeline>
        {certifItem.map((e) => (
          <VerticalTimelineElement
            date={e.date}
            iconStyle={{
              backgroundImage: `url(${e.img})`,
              backgroundColor: "#fff",
              color: "#666666",
              backgroundSize: "cover",
            }}
          >
            <h3>{e.title}</h3>
            <p>
              <em>{e.description}</em>
            </p>
            <p> 
              <a style={pStyle} href={e.link}> 
                <FontAwesomeIcon
                  icon={faLink}
                  style={{ fontSize: "1em" }}
                />
                &nbsp;Voir la certificat 
              </a>
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Container>
  );
};

export default Certificat;
