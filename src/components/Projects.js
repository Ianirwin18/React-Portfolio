import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/colorGen.png";
import projImg2 from "../assets/img/shmup.png";
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
      description: (
        <a
          class="links"
          href="https://mxhuisken.github.io/colorGenerator/"
          target="blanks"
        >
          Deployed Page
        </a>
      ),
      imgUrl: projImg1,
    },
    {
      title: "Shmup",
      description: (
        <a class="links" href="https://shmup.herokuapp.com/" target="blanks">
          Deployed Page
        </a>
      ),
      imgUrl: projImg2,
    },
    {
      title: "Star wars Quiz",
      description: (
        <a
          class="links"
          href="https://ianirwin18.github.io/Ian-I-codeQuiz/"
          target="blanks"
        >
          Deployed Page
        </a>
      ),
      imgUrl: projImg3,
    },
    {
      title: "Password Generator",
      description: (
        <a
          class="links"
          href="https://ianirwin18.github.io/Ian-I-Homework3/"
          target="blanks"
        >
          Deployed Page
        </a>
      ),
      imgUrl: projImg4,
    },
    {
      title: "Daily Planner",
      description: (
        <a
          class="links"
          href="https://ianirwin18.github.io/Daily_Planner_hw5/"
          target="blanks"
        >
          Deployed Page
        </a>
      ),
      imgUrl: projImg5,
    },
    {
      title: "Note Taker",
      description: (
        <a
          class="links"
          href="https://notetaker-challenge-11.herokuapp.com/"
          target="blanks"
        >
          Deployed Page
        </a>
      ),
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
                  <p> </p>
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
