import logo from '../images/sakina.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar { background-color: #f9d8ce; display: flex; align-items: baseline; padding: 10px}
  a, .navbar-nav, .navbar-light .nav-link {
    color: #447e86;
    &:hover { color: #052226; }
    font-size: 110%;
    font-family: 'Baloo Tammudu 2', cursive;
    
  }
`;

const icon = {
    width: "45px",
    padding: "5px"
}

export default class Header extends React.Component {
    render() {
        return (
            <Styles>
                <Navbar sticky="top" expand="lg">
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            width="100px"
                            style={{
                                marginLeft: "5px",
                                padding: "10px"
                            }}
                            alt="name"
                        />
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/resume"> <img alt= "resume" src="https://www.flaticon.com/svg/static/icons/svg/941/941565.svg" style={icon}/> Resume</Nav.Link>
                        <Nav.Link href="/notes"> <img alt= "notes" src="https://www.flaticon.com/svg/static/icons/svg/3209/3209265.svg" style={icon}/> Course Notes</Nav.Link>
                        <Nav.Link href="/portfolio"> <img alt= "portfolio" src="https://www.flaticon.com/svg/static/icons/svg/941/941590.svg" style={icon}/> Portfolio</Nav.Link>
                        <Nav.Link href="/ideabox"> <img alt= "idea" src="https://www.flaticon.com/svg/static/icons/svg/3176/3176298.svg" style={icon}/> Idea Box</Nav.Link>

                    </Nav>
                </Navbar>
            </Styles>
        );
    }
}