import React from 'react';
import { Accordion, Button, Row, Col, Card } from 'react-bootstrap';
import Footer from '../components/Footer';
import Header from '../components/Header';



export default class Resume extends React.Component {
    render() {
        return (
            <div className="resume" style={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}>
                <Header />
                <div
                    style={{
                        display: 'flex',
                        justifyItems: 'center',
                        justifyContent: 'center',
                        marginLeft: '10%',
                        marginRight: '10%',
                        marginTop: '30px',
                        flex: 1,
                    }}>
                    <Col>
                        <h3 style={{ color: "#D75A20" }}><img alt="clap" src="https://www.flaticon.com/svg/static/icons/svg/941/941565.svg" style={{ width: "40px", marginRight: "10px" }} />Resume</h3>
                        <Row>
                            <Col>
                                {/* Education */}
                                <Accordion>
                                    <Card>
                                        <Card.Header style={{ padding: ".75rem 1.25rem 5px" }}>
                                            <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{ fontSize: "110%" }}>
                                                Education
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <p style={{ marginBottom: "5px", color: "grey" }}>September 2017 - Present</p>
                                                <p style={{ marginBottom: "5px" }}>Candidate, Honours Bachelor of Science Computer Science Specialist Co-op 3rd year - University of Toronto, Scarborough</p>
                                                <p style={{ marginBottom: "5px", fontSize: "90%", marginLeft: "10px" }}>Recognition of Exceptional Academic Achievement "Dean's List" in 2018</p>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                                <div style={{ marginTop: "10px" }}></div>
                                {/* Professional Experiences */}
                                <Accordion>
                                    <Card>
                                        <Card.Header style={{ padding: ".75rem 1.25rem 5px" }}>
                                            <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{ fontSize: "110%" }}>
                                                Professional Experiences
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                {/* TA Experiences */}
                                                <Card.Title><img alt="fc_logo" src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Utoronto_coa.svg/1200px-Utoronto_coa.svg.png" style={{ width: "45px", marginRight: "10px" }} />Teaching Assistant</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">University of Toronto</Card.Subtitle>
                                                <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "95%" }}>September 2018 - Current</Card.Subtitle>
                                                <Card.Text>
                                                    <ul>
                                                        <li>Taught the following courses:
                                                            <ul>
                                                                <li>MATA30/36: Introduction to Calculus for Physical Science (part I and II)</li>
                                                                <li>CSCA48: Introduction to Computer Science (part II)</li>
                                                                <li>CSCB07: Software Design</li>
                                                                <li>CSCB20: Introduction to Databases and Web Applications</li>
                                                            </ul>
                                                        </li>
                                                        <li>Lead weekly tutorials and office hours to help students with the course material, and improve their problem solving skills.</li>
                                                        <li>Facilitated in grading weekly assignments, exercise, midterms and final exam.</li>
                                                    </ul>
                                                </Card.Text>

                                                <hr></hr>
                                                {/* Fleet Complete */}
                                                <div style={{ marginTop: "10px" }}></div>
                                                <Card.Title><img alt="fc_logo" src="https://lh3.googleusercontent.com/Z4-CNqfRtEtSmbVwq0uHSw5gbvKwKuLr13aCHVDT7Mc4fiIADjuJDhgSbGedLMPZ_XE" style={{ width: "40px", marginRight: "10px" }} /> Automation Developer</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">Fleet Complete</Card.Subtitle>
                                                <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "95%" }}>January 2019 - August 2019</Card.Subtitle>
                                                <Card.Text>
                                                    <ul>
                                                        <li>Refactored UI Automation using Xamarin UI Testing framework in C# which decreased the overall testing time by 20% and increased the success rate by 10%.</li>
                                                        <li>Developed UI Automation project using Node.js and Javascript assertion libraries, Appium and WDIO framework which increased the efficiency of the tests 45%.</li>
                                                        <li>Developed API Automation project using Node.js and fetch Javascript libraries for API calls and assertions which increased the efficiency of the tests 80%.</li>
                                                    </ul>
                                                </Card.Text>
                                                <hr></hr>
                                                {/* TEDxUTSC */}
                                                <div style={{ marginTop: "10px" }}></div>
                                                <Card.Title><img alt="tedxutsc_logo" src="https://logodix.com/logo/1810577.png" style={{ width: "40px", marginRight: "10px" }} />Chair</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">TEDxUTSC</Card.Subtitle>
                                                <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "95%" }}>June 2018 - April 2019</Card.Subtitle>
                                                <Card.Text>
                                                    <ul>
                                                        <li>Lead, plan and execute the TEDxUTSC 2019 conference for 300+ attendees</li>
                                                        <li>Recruited, trained and lead a team of 20+ people maintaining consistent and professional TEDxUTSC brand reputation.</li>
                                                        <li>Recruit and train host, performers and speakers for the day of the conference.</li>
                                                        <li>Create and maintain faculty and sponsors relationships.</li>
                                                        <li>Supervised in approaching sponsors and increased funding by 15%.</li>
                                                        <li>Created and executed marketing plan to increase ticketing sales by 20%.</li>
                                                    </ul>
                                                    <div style={{ marginBottom: "20px" }}></div>
                                                </Card.Text>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Col>
                            <Col>
                                <Accordion>
                                    <Card>
                                        <Card.Header style={{ padding: ".75rem 1.25rem 5px" }}>
                                            <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{ fontSize: "110%" }}>
                                                On-Going Projects
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                {/* Rainbows and Rabbits */}
                                                <Card.Title style={{ color: "crimson" }}>Rainbows and Rabbits</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">A Unity Project</Card.Subtitle>
                                                <Card.Text>
                                                    <p style={{ marginBottom: "5px" }}>Tech Stack: Unity</p>
                                                    <p style={{ marginBottom: "5px" }}>Description: Allow users to create a three dimensional landscape
                                                    with graphical objects like buildings or plants and stuff, and allow other users to view or 'walk'
                                                    through those landscapes in VR.</p>
                                                    <Card.Link href="https://github.com/SakinaGadri/RnR/">Github: TBA</Card.Link>
                                                </Card.Text>
                                                <hr></hr>
                                                {/* Blueprint Project */}
                                                <Card.Title style={{ color: "#2b4ce2" }}>Blueprint Project</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">Developer</Card.Subtitle>
                                                <Card.Text>
                                                    <p style={{ marginBottom: "5px" }}>Tech Stack: ReactJs, Firebase</p>
                                                    <p style={{ marginBottom: "5px" }}>Description: Creating high-impact software
                                                    solutions free of charge for nonprofit organizations.</p>
                                                    <Card.Link href="https://github.com/SakinaGadri/RnR/">Github: TBA</Card.Link>
                                                </Card.Text>
                                                <hr></hr>
                                                {/* This website! */}
                                                <Card.Title style={{ color: "#ef284b" }}>This website!</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">Personal Website</Card.Subtitle>
                                                <Card.Text>
                                                    <p style={{ marginBottom: "5px" }}>Tech Stack: ReactJs</p>
                                                    <p style={{ marginBottom: "5px" }}>Description: A website to showcase my skills and interests.</p>
                                                    <Card.Link href="https://github.com/SakinaGadri/website/">Github</Card.Link>
                                                </Card.Text>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                                <div style={{ marginTop: "10px" }}></div>
                                <Accordion>
                                    <Card>
                                        <Card.Header style={{ padding: ".75rem 1.25rem 5px" }}>
                                            <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{ fontSize: "110%" }}>
                                                Completed Projects
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                {/* Physical Comedy */}
                                                <Card.Title style={{color:"rgb(23, 162, 184)"}}>Physical Comedy</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">An Express-React Project</Card.Subtitle>
                                                <Card.Text>
                                                    <p style={{ marginBottom: "5px" }}>Tech Stack: ReactJs, Heroku</p>
                                                    <p style={{ marginBottom: "5px" }}>Description: Physical Comedy is a web application that allows users
                                                    to play full body charades and pictionary with people around the world, by 'drawing' on their stream by
                                                    moving their hands in the air in front of their camera. As the player moves their hands in the air, they
                                                    draw on their screen, allowing other players to guess what has been drawn, or written. It supports play
                                                      with two players and the rules are the same as anytime else you've played the game: have fun!</p>
                                                    <Card.Link href="https://github.com/SeeminSyed/project-physicalcomedy">Github</Card.Link>
                                                    <Card.Link href="http://physicalcomedy.herokuapp.com">Website</Card.Link>
                                                </Card.Text>
                                                <hr></hr>
                                                {/* Planit */}
                                                <Card.Title style={{color:"#2fc42f"}}>Planit</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">A Flutter Application</Card.Subtitle>
                                                <Card.Text>
                                                    <p style={{ marginBottom: "5px" }}>Tech Stack: Flutter, Java, MongoDB</p>
                                                    <p style={{ marginBottom: "5px" }}>Description: Allow users to create a three dimensional landscape
                                                    with graphical objects like buildings or plants and stuff, and allow other users to view or 'walk'
                                                    through those landscapes in VR.</p>
                                                    <Card.Link href="https://github.com/SakinaGadri/Planit">Github</Card.Link>
                                                </Card.Text>
                                                <hr></hr>

                                                {/* BE projects > Course Finder, SeeminSakina */}
                                                <Card.Title style={{color:"#ff8c00"}}>Backend Projects</Card.Title>
                                                {/* <Card.Subtitle className="mb-2 text-muted">Java Projects</Card.Subtitle> */}
                                                <Card.Text>
                                                    <ul>
                                                        <li>
                                                            <Card.Subtitle className="mb-2 text-muted">Course Finder</Card.Subtitle>
                                                            <p style={{ marginBottom: "5px" }}>Tech Stack: Java, Neo4j</p>
                                                            <p style={{ marginBottom: "5px" }}>Description: A backend project that keeps track
                                                            of Students and Courses, built with Java and Neo4j. </p>
                                                            <Card.Link href="https://github.com/SakinaGadri/CourseFinder">Github</Card.Link>
                                                        </li>
                                                        <hr></hr>
                                                        <li>
                                                        <Card.Subtitle className="mb-2 text-muted">Course Finder</Card.Subtitle>
                                                            <p style={{ marginBottom: "5px" }}>Tech Stack: Java, Neo4j</p>
                                                            <p style={{ marginBottom: "5px" }}>Description: The project has two microservices: profile and songs.
                                                            The profiles data is stored in Neo4j and the songs data is stored in MongoDB.</p>
                                                            <Card.Link href="https://github.com/SakinaGadri/Neo4jMongoDB-Project">Github</Card.Link>
                                                        </li>
                                                    </ul>
                                                </Card.Text>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Col>
                        </Row>
                    </Col>
                </div>
                <Footer />
            </div>
        );
    }
}