import logo from '../images/sakina.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        background-color: #f9d8ce;
        display: flex;
        align-items: baseline;
        padding: 10px;
    }
    a, .navbar-nav, .navbar-light .nav-link {
        color: #447e86;
        &:hover { color: #052226; }
        font-size: 110%;
    }
`;

const Icon = styled.img`
    width: 45px;
    padding: 5px;
`;

const Brand = styled.img`
  margin-left: 5px;
  padding: 10px;
  width: 100px;
`;

const Header = () => {
    return (
        <Styles>
            <Navbar sticky="top" expand="lg">
                <Navbar.Brand href="/">
                    <Brand src={logo} />
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/resume">
                        <Icon src="https://www.flaticon.com/svg/static/icons/svg/941/941565.svg" />
                        Resume
                    </Nav.Link>
                    <Nav.Link href="/ideabox">
                        <Icon src="https://www.flaticon.com/svg/static/icons/svg/3176/3176298.svg" />
                        Idea Box
                    </Nav.Link>
                    <Nav.Link href="/notes">
                        <Icon src="https://www.flaticon.com/svg/static/icons/svg/3209/3209265.svg" />
                        Course Notes
                    </Nav.Link>
                    <Nav.Link href="/gallery">
                        <Icon src="https://www.flaticon.com/svg/static/icons/svg/941/941590.svg" />
                        Gallery
                    </Nav.Link>
                </Nav>
            </Navbar>
        </Styles>
    );
}

export default Header;