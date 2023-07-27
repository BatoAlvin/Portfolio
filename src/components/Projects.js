import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/pos.PNG";
import projImg2 from "../assets/img/gmf.PNG";
import projImg3 from "../assets/img/land.PNG";
import projImg4 from "../assets/img/medical.PNG";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "POS System",
      description: "Keeps track of sales and purchases of business operations",
      imgUrl: projImg1,
    },
    {
      title: "Savings System",
      description: "Keeps track of individuals savings",
      imgUrl: projImg2,
    },
    {
      title: "Property Management System",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Medical Management System",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>
                Throughout my professional career, I have had the privilege of contributing my expertise and skills to several noteworthy projects, demonstrating my commitment to delivering high-quality results. Some of the key projects I have been involved in include.
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Property Management Demo</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Possprime Demo</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">GMF Savings System Demo</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fifth">Medical Demo</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="sixth">Vivo Demo</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <p>Tenure system is a customized built user friendly that helps to keep track of sales and purchases, it covers
                        small businesses.
                        </p>
                        <p>Demo link: https://possprime.nebbicatholicdiocese.org</p>
                        <p>Email: lee@gmail.com</p>
                        <p>Password: 1234</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>POS prime system is a customized built user friendly that helps to keep track of sales and purchases, it covers
                        small businesses.
                        </p>
                        <p>Demo link: https://possprime.nebbicatholicdiocese.org</p>
                        <p>Email: lee@gmail.com</p>
                        <p>Password: 1234</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      <p>GMF is a savings system that empowers individuals to cultivate a disciplined approach to saving money, build financial resilience, and work towards a more secure and prosperous future.
                        </p>
                        <p>Demo link: https://muwoya.nebbicatholicdiocese.org/</p>
                        <p>Email: test@gmail.com</p>
                        <p>Password: 1234</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
