import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import smile from '../images/smile.png';
import Roles from '../components/Roles';
import Image from 'react-bootstrap/Image';
import me from '../images/twotrysq.jpg';

const style = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
};

const name = {
    display: 'flex',
    padding: "15px",
    alignItems: "center",
    marginLeft: "100px",
    marginRight: "100px",
    marginTop: "10px",
};

const smile_style = {
    width: "30px",
    verticalAlign: "baseline",
};

const interest_style = {
    display: "flex",
    flexDirection: "column",
    fontSize: "130%",
    paddingLeft: "30px",
    marginLeft: "100px",
    marginRight: "100px",
}

const interest_icon = {
    marginRight: "10px",
    width: "35px"
}

const icon_div_style = {
    display: "flex",
    marginLeft: "150px",
}

const icon_style = {
    marginLeft: "10px",
    width: "55px"
}

export default class Home extends React.Component {
    render() {
        return (
            <div className="App"
                style={style} >
                <Header />
                <div style={name}>
                    <Image src={me} style={{ width: "18%"}} thumbnail />
                    <div style={{marginLeft: "10px"}}>
                        <h1> Hi, my name is Sakina! <img src={smile} style={smile_style} alt="smiley!" /> </h1>
                        <Roles />
                    </div>
                </div>
                <div style={interest_style}>
                    I like to
                    <div style={{
                        paddingLeft: "30px",
                        color: "#9e07f0"
                    }}>
                        <img alt="cook" style={interest_icon} src="https://www.flaticon.com/svg/static/icons/svg/2917/2917633.svg" />
                        cook </div>
                    <div style={{
                        paddingLeft: "50px",
                        paddingRight: "2px",
                        color: "#f07807"
                    }}>
                        <img alt="eat" style={interest_icon} src="https://www.flaticon.com/svg/static/icons/svg/3468/3468397.svg" />
                        eat </div>
                    <div style={{
                        paddingLeft: "70px",
                        paddingRight: "2px",
                        color: "#00bf33"
                    }}>
                        <img alt="plant" style={interest_icon} src="https://www.flaticon.com/svg/static/icons/svg/3043/3043782.svg" />
                        plant </div>
                    <div style={{
                        paddingLeft: "90px",
                        paddingRight: "2px",
                        color: "#0000bf"
                    }}>
                        <img alt="world" style={interest_icon} src="https://www.flaticon.com/svg/static/icons/svg/2531/2531042.svg" />
                        explore the world one bit at a time </div>
                </div>
                <p style={{ marginTop: "1rem", marginLeft: "150px", marginBottom: "0px", fontSize: "130%" }}>Find me on:</p>
                <div style={icon_div_style}>
                    <a rel="noopener noreferrer" target="_blank" href="https://github.com/SakinaGadri">
                        <img alt="github" src="https://cdn.iconscout.com/icon/free/png-512/github-brand-logo-47401.png" style={icon_style} />
                    </a>
                    <a rel="noopener noreferrer" target="_blank" href="https://linkedin.com/in/sakina-gadriwala">
                        <img alt="linkedin" src="https://www.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-circle-512.png" style={icon_style} />
                    </a>
                    <a href="/resume">
                        <img alt="resume" src="https://static.thenounproject.com/png/543772-200.png" style={icon_style} />
                    </a>
                </div>
                <Footer />

            </div>);
    }
}