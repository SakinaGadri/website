import React from 'react';
import styled from 'styled-components';
import { device } from '../sizes';

// https://www.web-eau.net/blog/10-best-footer-html-css-snippets > Bootstrap basic footer

const Footer = () => {
    return (
        <FooterStyle>
            <ul id="list-inline">
                <li id="list-inline-item"><a href="/">Home</a></li>
                <li id="list-inline-item"><a href="/resume">Resume</a></li>
                <li id="list-inline-item"><a href="/ideabox">Idea Box</a></li>
                <li id="list-inline-item"><a href="/gallery">Gallery</a></li>
            </ul>
            <p id="copyright">
                Sakina Gadriwala © {new Date().getFullYear()}
            </p>
        </FooterStyle>
    );
}

export default Footer;

const FooterStyle = styled.footer`
    align-self: center;
    color: #c90d52;
    font-weight: 900;
    margin-bottom: 2%;
    ul {
        display: flex;
        padding: 0;
        list-style: none;
        text-align: center;
        font-size: 110%;
        line-height: 1.6;
        margin-bottom: 0;
        @media ${device.mobileS} {
            font-size: 90%;
        }
        a {
            color: inherit;
            text-decoration: none;
            opacity: 0.8;
            :hover {
                opacity: 1;
            }
        }
    }
    li {
        padding: 0 10px;
    }

    #copyright {
        margin-top: 15px;
        text-align: center;
        font-size: 100%;
        color: #aaa;
        margin-bottom: 0;
        @media ${device.mobileS} {
            font-size: 85%;
        }
      }
`;

