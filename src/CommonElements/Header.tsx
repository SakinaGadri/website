import React from 'react';
import { device } from '../sizes';
import styled from 'styled-components';
import logo from '../logo.png';

const Header = () => {
    return (
        <OuterDivStyle id="header-nav-bar">
            <NavBarStyle>
                <a href="/">
                    <ButtonStyle>Home</ButtonStyle>
                </a>

                <a href="/resume">
                    <ButtonStyle>Resume</ButtonStyle>
                </a>

                <a href="/ideabox">
                    <ButtonStyle>Idea Box</ButtonStyle>
                </a>

                <a href="/gallery">
                    <ButtonStyle>Gallery</ButtonStyle>
                </a>
            </NavBarStyle>
            <img src={logo} style={{margin: "1%"}} alt='logo' />
        </OuterDivStyle>
    )
}

export default Header;

const ButtonStyle = styled.button`
    background-color: white;
    border: 0 solid #e2e8f0;
    box-sizing: border-box;
    color: #0d172a;
    cursor: pointer;
    font-family: "Karla", sans-serif;
    font-size: 1.1rem;
    font-weight: 600;
    line-height: 1;
    padding: 1rem 1.6rem;
    text-align: center;
    text-decoration: none #0d172a solid;
    text-decoration-thickness: auto;
    transition: all .5s ease;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    :hover {
        background-color: #1e293b;
        color: #fff;
    }
`;

const OuterDivStyle = styled.div`
    background-color: white;
    border-bottom: 5px pink solid;
    border-radius: 5px;
    display: flex;
    margin: 1% 2% 0;
    width: 95%;
    flex-direction: row-reverse;
    position: sticky;
    justify-content: space-between;
    top: 0px;
    @media ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
        align-items: center;
        display: flex;
        flex-direction: column;
    }
`;

const NavBarStyle = styled.div`
    margin: 1% 0 0;
    @media ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
        display: none;
    }
`;

