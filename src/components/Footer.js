import React, { useState } from 'react';
import styled from 'styled-components';

const FooterStyle = styled.footer`
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #e2e2e2;
    color: black;
    text-align: center;
    padding: 5px;
    margin-top: auto;
`;

const Text = styled.div`
    flex-direction: column;
    text-align: center;
`;

const Main = styled.div`
    margin-top: auto;
    padding-top: 10px;
`;

const Footer = () => {
    const [currentYear] = useState(new Date());
    return (
        <Main>
            <FooterStyle>
                <Text>
                    © Sakina Gadriwala, {currentYear.getFullYear()}
                    <a rel="noopener noreferrer" target="_blank" href="https://github.com/SakinaGadri">
                        <img src="https://clipart.info/images/ccovers/1499794873github-logo-png.png" style={{ width: '65px', paddingLeft: '5px' }} alt="github url" />
                    </a> |
                    <a rel="noopener noreferrer" target="_blank" href="https://linkedin.com/in/sakina-gadriwala">
                        <img alt="linkedin url" src="https://img.icons8.com/fluent/48/000000/linkedin.png" style={{ width: '35px', paddingLeft: '5px' }} />
                    </a> |
                    <a href="/credits"> <img alt="clap" src="https://www.flaticon.com/svg/static/icons/svg/1616/1616567.svg" style={{ width: "25px" }} /> Credits</a>
                </Text>
            </FooterStyle>
        </Main>
    )
}

export default Footer;