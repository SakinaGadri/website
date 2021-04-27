import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';

const Main = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const SubDiv = styled.div`
    display: flex;
    justify-items: center;
    justify-content: center;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 30px;
    flex: 1 1 0%;
`;

const Image = styled.img`
    width: 40px;
`;

const List = styled.ul`
    margin: 10px;
`;

const Credits = () => {
    return (
        <Main>
            <Header />
            <SubDiv>
                <Col>
                    <h3>
                        <Image src="https://www.flaticon.com/svg/static/icons/svg/1616/1616567.svg" />
                        Credits
                    </h3>
                    <List>
                        {/* <a rel="noopener noreferrer" target="_blank" href=""></a> */}
                        <Row>
                            <Col>
                                <li>
                                    <a rel="noopener noreferrer" target="_blank" href="http://reactjs.org/">
                                        ReactJs
                                    </a> for front-end.</li>
                                <li>
                                    <a rel="noopener noreferrer" target="_blank" href="https://fonts.google.com/">
                                        Google Fonts
                                    </a>.</li>
                                <li>
                                    <a rel="noopener noreferrer" target="_blank" href="http://codepen.io/">
                                        Codepen.io
                                    </a></li>
                                <li>
                                    <a rel="noopener noreferrer" target="_blank" href="https://react-bootstrap.netlify.com/">
                                        Bootstrap for React
                                    </a>.</li>
                                <li>
                                    <a rel="noopener noreferrer" target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API">
                                        MDN Web Documentation
                                    </a>.</li>
                                <li>
                                    Icons made by
                                    <a rel="noopener noreferrer" href="http://www.freepik.com/" title="Freepik">
                                        Freepik
                                    </a> from
                                    <a rel="noopener noreferrer" href="https://www.flaticon.com/" title="Flaticon">
                                        www.flaticon.com
                                    </a></li>

                                <li>
                                    <a rel="noopener noreferrer" target="_blank" href="https://css-tricks.com">
                                        CSS Tricks
                                    </a> and
                                    <a rel="noopener noreferrer" target="_blank" href="https://www.tutorialspoint.com/">
                                        Tutorials Point
                                    </a> for all the help on perfecting my CSS.</li>
                                {/* <li> <a rel="noopener noreferrer" target="_blank" href=""></a></li>
                                    <li> <a rel="noopener noreferrer" target="_blank" href=""></a> </li> */}
                            </Col>
                            <Col>
                                <li>
                                    <a rel="noopener noreferrer" target="_blank" href="https://stackoverflow.com/">
                                        Stack Overflow</a> to help us with debugging.
                                </li>
                                <li> Many
                                    <a rel="noopener noreferrer" target="_blank" href="https://hackernoon.com">
                                        Hackernoon
                                    </a>,
                                    <a rel="noopener noreferrer" target="_blank" href="https://codeburst.io/">
                                        Codeburst
                                    </a> and <a rel="noopener noreferrer" target="_blank" href="http://medium.com/">
                                        Medium </a> Articles.</li>
                                <li>
                                    <a rel="noopener noreferrer" target="_blank" href="https://netlify.com/">
                                        Netlify</a> and
                                        <a rel="noopener noreferrer" target="_blank" href="https://community.netlify.com/">
                                        Netlify Forum</a> for deployment</li>
                            </Col>
                        </Row>
                    </List>
                </Col>
            </SubDiv>
            <Footer />
        </Main>
    );
}

export default Credits;

/*
https://scotch.io/@micwanyoike/how-to-add-fonts-to-a-react-project
https://hdtuto.com/article/react-js-get-current-date-and-time-example
*/