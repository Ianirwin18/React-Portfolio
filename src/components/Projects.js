import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/colorGen.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/Quiz.png";
import projImg4 from "../assets/img/password.png";
import projImg5 from "../assets/img/DailyPlanner.png";
import projImg6 from "../assets/img/NoteTaker.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Color Generator",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Shmup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Star wars Quiz",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Password Generator",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Daily Planner",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "Note Taker",
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background img"
      ></img>
    </section>
  );
};
