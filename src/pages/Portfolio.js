import React from 'react';
import { Col } from 'react-bootstrap';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default class Portfolio extends React.Component {
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
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
                        <h3><img alt="clap" src="https://www.flaticon.com/svg/static/icons/svg/941/941590.svg" style={{ width: "40px", marginRight: "10px" }} />Portfolio</h3>
                        <p>Coming Soon!</p>
                    </Col>
                </div>
                <Footer />

            </div>
        );
    }
}