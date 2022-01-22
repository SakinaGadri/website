import React from 'react';
import { device } from '../sizes';
import styled from 'styled-components';

const Header = () => {
    return (
        <NavBarStyle id="header-nav-bar">
            <a href="#home-page">
                <ButtonStyle>Home</ButtonStyle>
            </a>

            <a href="#resume">
                <ButtonStyle>Resume</ButtonStyle>
            </a>

            <a href="#idea-box">
                <ButtonStyle>Idea Box</ButtonStyle>
            </a>

            <a href="#gallery">
                <ButtonStyle>Gallery</ButtonStyle>
            </a>
        </NavBarStyle>
    )
}

export default Header;

const ButtonStyle = styled.button`
    background-color: #ed668824;
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

const NavBarStyle = styled.div`
    display: flex;
    margin: 2%;
    width: 90%;
    flex-direction: row-reverse;
    position: sticky;
    top: 0px;
    @media ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
        display: none;
    }
`;

