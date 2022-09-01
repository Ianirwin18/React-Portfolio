import html5logo from "../assets/img/html5.svg";
import csslogo from "../assets/img/css.svg";
import jslogo from "../assets/img/js.svg";
import reactjslogo from "../assets/img/reactjs.svg";
import mongodblogo from "../assets/img/mongodb.svg";
import mysqllogo from "../assets/img/mysql.svg";
import nodejslogo from "../assets/img/nodejs.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                I am proficient in the following technologies and languages.
                <br></br> I have also used Github, Heroku, Insomia, and Slack.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={html5logo} alt="Image" />
                  <h5>Html5</h5>
                </div>
                <div className="item">
                  <img src={csslogo} alt="Image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={jslogo} alt="Image" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={reactjslogo} alt="Image" />
                  <h5>ReactJs</h5>
                </div>
                <div className="item">
                  <img src={nodejslogo} alt="Image" />
                  <h5>NodeJs</h5>
                </div>
                <div className="item">
                  <img src={mongodblogo} alt="Image" />
                  <h5>Mongodb</h5>
                </div>
                <div className="item">
                  <img src={mysqllogo} alt="Image" />
                  <h5>Mysql</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
