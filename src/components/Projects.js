import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import wagesImg from "../assets/img/wages.webp";
import dayplannerImg from "../assets/img/dayplanner.png";
import teamsImg from "../assets/img/teams.png";
import websiteImg from "../assets/img/website.png";
import gptImg from "../assets/img/chatgpt.jpeg";
import ragImg from "../assets/img/rag.png";
import vectordbImg from "../assets/img/vectordb.png";
import textSummImg from "../assets/img/text-summarization.png";
import TextGenImg from "../assets/img/textGen-edit.png"
import sentImg from "../assets/img/sent.webp";
import p2pImg from "../assets/img/p2p.webp";
import sepImg from "../assets/img/25th-hour.png";
import stockImg from "../assets/img/stock.jpg";
import bstImg from "../assets/img/bst-edit.png";
import skincareImg from "../assets/img/skincare.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const fullstack_projects = [
    {
      title: "Wages Program Enhancement",
      description: "",
      languages: "Languages: Javascript",
      frameworks: "Frameworks: React, Node.js",
      imgUrl: wagesImg,
    },
    {
      title: "Day Planner Mobile App",
      description: "",
      languages: "Languages: Java",
      frameworks: "Frameworks/Technologies: Android Studio, Firebase, JUnit, Espresso, Google Maps API",
      imgUrl: dayplannerImg,
    },
    {
      title: "Feedback and Rating Platform for Teams",
      description: "",
      languages: "Languages: Java, Javascript, SQL",
      frameworks: "Frameworks: React, SpringBoot, MySQL, Google Sign-in API",
      imgUrl: teamsImg,
    },
    {
      title: "Personal Website",
      description: "",
      languages: "Languages: Javascript",
      frameworks: "Frameworks: React, Node.js",
      imgUrl: websiteImg,
    },
    {
      title: "Skincare Product Finder",
      description: "",
      languages: "Languages: Python, Javascript",
      frameworks: "Frameworks/Technologies: Django, React, Node.js, Selenium",
      imgUrl: skincareImg,
    },
  ];

  const ml_projects = [
    {
      title: "Fine-Tune GPT",
      description: "",
      languages: "Languages: Python",
      frameworks: "Frameworks/Technologies: ChatGPT API",
      imgUrl: gptImg,
    },
    {
      title: "Retrieval Augmented Generation",
      description: "",
      languages: "Languages: Python",
      frameworks: "Frameworks/Technologies: PyTorch, Keras, Sci-Kit Learn, ChatGPT API",
      imgUrl: ragImg,
    },
    {
      title: "Intelligent Semantic Search System",
      description: "",
      languages: "Languages: Python",
      frameworks: "Frameworks: Keras, Sci-Kit Learn",
      imgUrl: vectordbImg,
    },
    {
      title: "Natural Language Processing for Text Summarization with T5",
      description: "",
      languages: "Languages: Python",
      frameworks: "Frameworks: Tensorflow, PyTorch",
      imgUrl: textSummImg,
    },
    {
      title: "Advanced Text Generation using LSTM & Keras",
      description: "",
      languages: "Languages: Python",
      frameworks: "Frameworks: Keras",
      imgUrl: TextGenImg,
    },
    {
      title: "Text Classification for Sentiment Analysis",
      description: "",
      languages: "Languages: Python",
      frameworks: "Frameworks: Sci-Kit Learn",
      imgUrl: sentImg,
    },
  ];

  const other_projects = [
    {
      title: "Peer-to-Peer Messaging Network",
      description: "",
      languages: "Languages: C++",
      frameworks: "",
      imgUrl: p2pImg,
    },
    {
      title: "25th Hour Startup",
      description: "Design & Development",
      languages: "",
      frameworks: "",
      imgUrl: sepImg,
    },
    {
        title: "Mock Stock Market Day Exchange",
        description: "",
        languages: "Languages: Java",
        frameworks: "Technologies: Stock API",
        imgUrl: stockImg,
      },
      {
        title: "Binary Search Tree Map Implementation",
        description: "",
        languages: "Languages: C++",
        frameworks: "",
        imgUrl: bstImg,
      },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>As a late bloomer to the field of Computer Science and Software Engineering, I don't have the same professional experience that many of my peers do. So instead, I've listed some of the projects I've worked on below demonstrating my technical aptitude and expertise in lieu of professional experience.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Full-Stack Development</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">AI/Machine Learning</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Other</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          fullstack_projects.map((project, index) => {
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
                        <Row>
                            {
                                ml_projects.map((project, index) => {
                                    return (
                                    <ProjectCard
                                        key={index}
                                        {...project}
                                        isLeftCentered={index === 4}/>
                                    )
                                })
                            }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                        <Row>
                            {
                                other_projects.map((project, index) => {
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