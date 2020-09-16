// https://theideaboxkids.com/whats-an-idea-box/

import React from 'react';
import { Col } from 'react-bootstrap';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default class IdeaBox extends React.Component {
    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
                <Header/>
                <div style={{display: 'flex', flex:1}}>
                    <Col>
                    <h3><img alt="clap" src="https://www.flaticon.com/svg/static/icons/svg/3176/3176298.svg" style={{ width: "40px", marginRight: "10px" }} />Idea Box</h3>
                    <p>Coming Soon!</p>
                    </Col>
                </div>
                <Footer/>

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