import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default class Credits extends React.Component {
    render() {
        return (
            <div style={{
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
                        <h3><img alt="clap" src="https://www.flaticon.com/svg/static/icons/svg/1616/1616567.svg" style={{width: "40px"}}/>Credits</h3>
                        <ul style={{ margin: "10px" }}>
                            {/* <a rel="noopener noreferrer" target="_blank" href=""></a> */}
                            <Row>
                                <Col>
                                    <li> <a rel="noopener noreferrer" target="_blank" href="http://reactjs.org/">ReactJs</a> for front-end.</li>
                                    <li> <a rel="noopener noreferrer" target="_blank" href="https://fonts.google.com/">Google Fonts</a>.</li>
                                    <li><a rel="noopener noreferrer" target="_blank" href="http://codepen.io/">Codepen.io </a></li>
                                    <li><a rel="noopener noreferrer" target="_blank" href="https://react-bootstrap.netlify.com/">Bootstrap for React</a>.</li>
                                    <li> <a rel="noopener noreferrer" target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API">MDN Web Documentation</a>.</li>
                                    <li>Icons made by <a rel="noopener noreferrer" href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a rel="noopener noreferrer" href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></li>

                                    <li> <a rel="noopener noreferrer" target="_blank" href="https://css-tricks.com">CSS Tricks</a> and <a rel="noopener noreferrer" target="_blank" href="https://www.tutorialspoint.com/">Tutorials Point</a> for all the help on perfecting my CSS.</li>
                                    {/* <li> <a rel="noopener noreferrer" target="_blank" href=""></a></li>
                                    <li> <a rel="noopener noreferrer" target="_blank" href=""></a> </li> */}
                                </Col>
                                <Col>
                                    <li> <a rel="noopener noreferrer" target="_blank" href="https://stackoverflow.com/">Stack Overflow</a> to help us with debugging.</li>
                                    <li> Many <a rel="noopener noreferrer" target="_blank" href="https://hackernoon.com">Hackernoon</a>, <a rel="noopener noreferrer" target="_blank" href="https://codeburst.io/">Codeburst</a> and <a rel="noopener noreferrer" target="_blank" href="http://medium.com/"> Medium </a> Articles.</li>
                                    <li> <a rel="noopener noreferrer" target="_blank" href="https://netlify.com/">Netlify</a> and <a rel="noopener noreferrer" target="_blank" href="https://community.netlify.com/">Netlify Forum</a> for deployment</li>
                                </Col>
                            </Row>
                        </ul>
                    </Col>
                </div>
                <Footer />
            </div>
        );
    }
}

/*
https://scotch.io/@micwanyoike/how-to-add-fonts-to-a-react-project
https://hdtuto.com/article/react-js-get-current-date-and-time-example
*/