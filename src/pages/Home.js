import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import smile from '../images/smile.png';
import Roles from '../components/Roles';

const style = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
};

const name = {
    display: 'flex',
    padding: "30px",
    flexDirection: "column",
    // alignItems: "center",
    marginLeft: "100px",
    marginRight: "100px",
    marginTop: "10px",
};

const smile_style = {
    width:"30px",
    verticalAlign: "baseline",
};

export default class Home extends React.Component {
    render() {
        return (
            <div className="App"
                style={style} >
                <Header />
                <div style={name}>
                    <h1> Hi, my name is Sakina! <img src={smile} style={smile_style} alt="smiley!"/> </h1>
                    <Roles />
                </div>

                <Footer />

            </div>);
    }
}