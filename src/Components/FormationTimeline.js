import React from "react";
import { Container } from "reactstrap";
import LYCEE from "../Images/lyceeLogo.png";
import ENSA from "../Images/ensaLogo.png"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const FormationTimeline = () => {
  const formationItems = [
    {
      title: "Ecole Nationale des Sciences Appliquées - FES",
      date: "2020-2023",
      description: `Génie des Systèmes Embarqués`,
      img: `${ENSA}`,
    },
    {
      title: "Ecole Nationale des Sciences Appliquées - FES",
      date: "2018-2020",
      description: "Cycle préparatoire intégré",
      img: `${ENSA}`,
    },
    {
      title: "Bac - Mention Bien",
      date: "2018",
      description: "Sciences Math Option B",
      img: `${LYCEE}`,
    },
  ];

  return (
    <Container>
      <div data-aos="zoom-in">
        <h2 className="section-titles">Formation</h2>
      </div>

      <VerticalTimeline>
        {formationItems.map((e) => (
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
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Container>
  );
};

export default FormationTimeline;
