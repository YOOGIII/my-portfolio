import { Container, Row, Col, Tab, Nav, Button, Modal } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import React from "react";
import projImg1 from "../assets/img/velarist v1.png";
import projImg2 from "../assets/img/e-commerce ui.png";
import projImg3 from "../assets/img/GOTjob.id.png";
import projImg15 from "../assets/img/mandiri.png";
import projImg16 from "../assets/img/reactjs.png";
import projImg17 from "../assets/img/laravel.png";
import projImg18 from "../assets/img/native.png";
import projImg11 from "../assets/img/joco.jpg";
import projImg13 from "../assets/img/master.jpg";
import projImg12 from "../assets/img/intro.jpg";
import projImg4 from "../assets/img/astra.jpg";
import projImg5 from "../assets/img/kopsis.jpg";
import projImg6 from "../assets/img/pio1.jpg";
import projImg7 from "../assets/img/astra1.jpg";
import projImg8 from "../assets/img/lptyel.jpg";
import projImg9 from "../assets/img/lpt23.jpg";
import projImg10 from "../assets/img/pkl.jpg";
import projImg14 from "../assets/img/data.jpg";
import projImg19 from "../assets/img/pro.png";
import projImg20 from "../assets/img/prot.png";
import projImg21 from "../assets/img/odoo.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Asset Management",
      description: "Design & Development UI",
      imgUrl: projImg1,
    },
    {
      title: "e-Commerce",
      description: "Design & Development UI",
      imgUrl: projImg2,
    },
    {
      title: "GOTjob.id",
      description: "Design & Development UI",
      imgUrl: projImg3,
    },
    {
      title: "Odoo Helpdesk",
      description: "Design & Development UI",
      imgUrl: projImg21,
    },
    
    {
      title: "Independent Project",
      description: "Development Laravel",
      imgUrl: projImg17,
    },
    
    {
      title: "Independent Project",
      description: "Development React.js",
      imgUrl: projImg16,
    },
    {
      title: "Independent Project",
      description: "Development React Native",
      imgUrl: projImg18,
    },
    {
      title: "Prototyping",
      description: "Creating Interactive Design",
      imgUrl: projImg20,
    },
    {
      title: "Prototyping",
      description: "Creating Interactive Design",
      imgUrl: projImg19,
    },
    {
      title: "Practice",
      description: "Design & Development UI",
      imgUrl: projImg15,
    },
  ];

  const achievements = [
    {
      title: "UI/UX Design",
      description: "Mini Course Luarsekolah",
      imgUrl: projImg11,
    },
    {
      title: "UI/UX Design Mastery",
      description: "Skilvul (Gold Medal)",
      imgUrl: projImg13,
    },
    {
      title: "Intro UI/UX Design",
      description: "Skilvul (Gold Medal)",
      imgUrl: projImg12,
    },
    {
      title: "Training",
      description: "IT Programmer (Fullstack)",
      imgUrl: projImg4,
    },
    {
      title: "Training",
      description: "IT Programmer (Fullstack)",
      imgUrl: projImg7,
    },
    {
      title: "Business Plan",
      description: "Participating in the East Java student cooperative competition",
      imgUrl: projImg5,
    },
    {
      title: "Scout Competition",
      description: "Winner of the 1st Place in Scout Festival",
      imgUrl: projImg6,
    },
    {
      title: "Scout Competition",
      description: "Winner of the 2nd Place in Scout Festival",
      imgUrl: projImg8,
    },
    {
      title: "Scout Competition",
      description: "Overall Champion in Scouting Competition",
      imgUrl: projImg9,
    },
    {
      title: "PKL",
      description: "Staf IT Programmer",
      imgUrl: projImg10,
    },
    {
      title: "Looker Data",
      description: "Myskill Shortclass",
      imgUrl: projImg14,
    },
  ];

  const experiences = [
    {
      title: "UI/UX Designer",
      description: "PT Global Service Indonesia",
      year: "Aug 2024 - Saat ini ",
      fullDescription: `
        Designed the UI for an asset management web application with a focus on functionality and aesthetics. 
        Improved the UI design for the gotjob.id website to enhance the user experience. 
        Conducted in-depth user needs analysis to create an intuitive UX. 
        Tested interfaces to ensure optimal performance and usability. 
        Designed interfaces that are visually appealing, efficient, and user-friendly.
      `,
    },
    {
      title: "IT Programmer",
      description: "UT School",
      year: "May 2024 - Jul 2024",
      fullDescription: `Developed a library website using PHP Laravel, React.js, and React Native for the mobile application as a final competency project.
        Learned frontend development using HTML, CSS, JavaScript, and Bootstrap.
        Involved in a website project with a focus on creating responsive and engaging UI designs.
        Studied algorithms, databases, and backend development using ASP.Net and Node.js to support application development.
        Gained proficiency in key technologies such as Git.`,
    },
    {
      title: "Web Developer",
      description: "CV NATUSI",
      year: "Jan 2023 - Apr 2023",
      fullDescription: `Contributed to a website development project, including the creation of a personal CV and a coffee shop website.
        Created an easy-to-understand user manual and produced tutorial videos to help users optimize features.
        Conducted comprehensive application testing to ensure functionality and optimal UX.`,
    },
  ];

  const [showModal, setShowModal] = React.useState(false);
  const [selectedExperience, setSelectedExperience] = React.useState(null);

  const handleShowModal = (experience) => {
    setSelectedExperience(experience);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedExperience(null);
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Highlights</h2>
                  <p>A glimpse of my work, growth, and milestones</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Project</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Experience</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Achievement</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {experiences.map((experience, index) => (
                            <Col md={4} sm={6} key={index}>
                              <div className="experience-card">
                                <h5>{experience.title}</h5>
                                <p>{experience.description}</p>
                                <p>{experience.year}</p>
                                <Button style={{ height: '45px', width: '100%', borderRadius: '100px' }} variant="light" onClick={() => handleShowModal(experience)}>
                                  View Details
                                </Button>
                              </div>
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {achievements.map((achievement, index) => (
                            <ProjectCard key={index} {...achievement} />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      {/* Modal for Experience Details */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedExperience?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{selectedExperience?.fullDescription}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
};