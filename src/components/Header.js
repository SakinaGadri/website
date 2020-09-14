import logo from '../images/name300.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar { background-color: #f9d8ce; display: flex; align-items: baseline }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #447e86;
    &:hover { color: #052226; }
    font-size: 110%;
    font-family: 'Baloo Tammudu 2', cursive;
    
  }
`;

export default class Header extends React.Component {
    render() {
        return (
            <Styles>
                <Navbar sticky="top" expand="lg">
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            width="120px"
                            alt="name"
                        />
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/resume">Resume</Nav.Link>
                        <Nav.Link href="/notes">Course Notes</Nav.Link>
                        <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="/ideabox">Idea Box</Nav.Link>

                    </Nav>
                </Navbar>
            </Styles>
        );
    }
}