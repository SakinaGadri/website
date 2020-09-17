import React from 'react';
import { Col, Tabs, Tab } from 'react-bootstrap';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default class IdeaBox extends React.Component {
    render() {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}>
                <Header />
                <div style={{
                    display: 'flex',
                    justifyItems: 'center',
                    justifyContent: 'center',
                    marginLeft: '10%',
                    marginRight: '10%',
                    marginTop: '30px',
                    flex: 1,
                }}>
                    <Col>
                        <h3 style={{ color: "#D75A20" }}><img alt="clap" src="https://www.flaticon.com/svg/static/icons/svg/3176/3176298.svg" style={{ width: "40px", marginRight: "10px" }} />Idea Box</h3>
                        <div style={{ margin: "20px", fontSize: "20px", }}>
                            <p>
                                An idea that was inspired by <a rel="noopener noreferrer" target="_blank" href="https://theideaboxkids.com/whats-an-idea-box/">The Idea Box</a>.
                                My Idea Box contains all the project ideas I've thought of doing, but haven't done yet. My goal is to complete at least 2 of them a year, and
                                add as many as I can think of every year.
                            </p>
                            <p>Here is my collection of ideas so far:</p>
                        </div>
                        <Tabs defaultActiveKey="sign" id="uncontrolled-tab-example">
                            <Tab eventKey="morse" title="Morse Code">
                                <div style={{ marginTop: "2%", marginLeft: "2%" }}>
                                    <img alt="question" style={{ width: "2%", marginRight: "5px" }} src="https://www.flaticon.com/svg/static/icons/svg/1500/1500427.svg" />
                                    <em>Description:</em>
                                    <p>
                                        Decipher Morse Code, where the user is able to send morse code signal
                                        and the application translates it into English phrases. The application should also be able
                                        to process the other way around, i.e. given English text, translate it into morse code.
                                    </p>

                                    <img alt="question" style={{ width: "2%", marginRight: "5px" }} src="https://www.flaticon.com/svg/static/icons/svg/1828/1828940.svg" />
                                    <em>Why?</em>
                                    <p>
                                        I've always been fascinated with the military: their technology, techniques and the resources.
                                        Understanding morse code makes me feel like I know a secret language that I can use to communicate
                                        to a certain crowd. I've also found detective work really interesting; if I had the option to choose
                                        another career, I'd choose to be a detective
                                        <img alt="haha" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/65/smiling-face-with-open-mouth-and-smiling-eyes_1f604.png" style={{ width: "20px", marginBottom: "5px" }} />.
                                    </p>

                                </div>
                            </Tab>
                            <Tab eventKey="sign" title="Sign Language">
                                <div style={{ marginTop: "2%", marginLeft: "2%" }}>
                                    <img alt="question" style={{ width: "2%", marginRight: "5px" }} src="https://www.flaticon.com/svg/static/icons/svg/1500/1500427.svg" />
                                    <em>Description:</em>
                                    <p>
                                        Decipher Sign Language, where the user is able to do sign actions, and the application is able to process it
                                        and give the user the English meaning of the gestures. The application should also be able translate English text into Sign Language gestures.
                                        For my first go at this application, I will probably stick to just English, but probably want to expand to other languages in the future.
                                    </p>

                                    <p>
                                        Developing this application will probably have a lot to do with neural networks and machine learning. Love the challenge in this idea!
                                        <img alt="heart" src="https://www.flaticon.com/svg/static/icons/svg/929/929417.svg" style={{ width: "20px", marginLeft: "5px", marginBottom: "5px" }} />
                                    </p>


                                    <img alt="question" style={{ width: "2%", marginRight: "5px" }} src="https://www.flaticon.com/svg/static/icons/svg/1828/1828940.svg" />
                                    <em>Why?</em>
                                    <p>
                                        I've think that technology, as it exists today, is not very accessible. There aren't many tools out there to help the blind, deaf and dumb.
                                        This idea came to me when walking through my campus and seeing brail encoding of each room, and thinking to myself, "How would a blind person interact
                                        with a computer? Is there any software or hardware developed to make their usage easy?".
                                    </p>

                                </div>
                            </Tab>
                            <Tab eventKey="task" title="Stay on Task">
                                <div style={{ marginTop: "2%", marginLeft: "2%" }}>
                                    <img alt="question" style={{ width: "2%", marginRight: "5px" }} src="https://www.flaticon.com/svg/static/icons/svg/1500/1500427.svg" />
                                    <em>Description:</em> <br></br>
                                    <p>
                                        An application (chrome plugin or extension) that keeps me on task, and doesn't let me procrastinate my life away.
                                    </p>

                                    <img alt="question" style={{ width: "2%", marginRight: "5px" }} src="https://www.flaticon.com/svg/static/icons/svg/1828/1828940.svg" />
                                    <em>Why?</em>
                                    <p>
                                        The amount of times I end up procrastinating instead of finishing the task I'm on, is insaanee! I understand that I need to use my time
                                        more effectively, but there is a world out there for me to discover, sitting at the tips of my fingers! Its hard to resist..
                                    </p>
                                    <p>I also want to get some experience developing a Chrome extention or a plugin :)</p>
                                </div>
                            </Tab>
                            <Tab eventKey="art" title="Synchronize Your Art">
                                <div style={{ marginTop: "2%", marginLeft: "2%" }}>
                                    <img alt="question" style={{ width: "2%", marginRight: "5px" }} src="https://www.flaticon.com/svg/static/icons/svg/1500/1500427.svg" />
                                    <em>Description:</em> <br></br>
                                    <p>
                                        An application that lets users concurrently maintain their designs. Similar to Github, but this solution will be tailored for
                                        our amazing designers.
                                    </p>

                                    <img alt="question" style={{ width: "2%", marginRight: "5px" }} src="https://www.flaticon.com/svg/static/icons/svg/1828/1828940.svg" />
                                    <em>Why?</em>
                                    <p>
                                        Since I'm into art (Photoshop and all), I get to meet a lot of creative designers, and they all complain about how
                                        there isn't a way for them to concurrently create their designs, the way developers are able to concurrently
                                        code via Github. Now, there are tools out there that get close to what I have in mind, but its not it! There
                                        is a lot we can do in this area and I'm super excited for this project.
                                    </p>
                                </div>
                            </Tab>
                        </Tabs>
                    </Col>
                </div>
                <Footer />

            </div>
        );
    }
}

/*
inspired by the link, I thought of creating my own idea box. These contain all the project ideas
ive thought of doing, but haven't done yet. Goal is to complete at least 2 of them a year, and
add as many as I can every year.
    * decipher morse code (input morse - output english) and vice versa (input english - output morse)
    * deciphering sign language (from sign language to english and vice versa) prbbaly have to do a lot with neural networks and machine learning
    * chrome plugin/extention that helps me keep on task
    * creating a way to synchronize art designs (github for art people)

*/