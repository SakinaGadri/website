import React from 'react';
import { Col } from 'react-bootstrap';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default class Notes extends React.Component {
    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
                <Header/>
                <div style={{display: 'flex', flex:1}}>
                    <Col>
                    <h3>Notes</h3>
                    <p>Coming Soon!</p>
                    </Col>
                </div>
                <Footer/>

            </div>
        );
    }
}