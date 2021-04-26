import React from 'react';
import { Col } from 'react-bootstrap';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styled from 'styled-components';
/* images */
import leaves from '../gallery/autumn-leaves.jpg';
import autumnTrees from '../gallery/autumn-trees.jpg';

// https://www.w3schools.com/howto/howto_css_image_grid_responsive.asp
const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0 4px;
`;

const Column = styled.div`
    flex: 25%;
    max-width: 25%;
    padding: 0 4px;
`;

const StyledDiv = styled.div`
    display: flex;
    justify-items: center;
    justify-content: center;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 30px;
    flex: 1;
`;

const Image = styled.img`
    margin-top: 8px;
    vertical-align: middle;
    width: 100%;
`;

export default class Gallery extends React.Component {
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Header />
                <StyledDiv>
                    <Col>
                        <h3>
                            <img alt="clap" src="https://www.flaticon.com/svg/static/icons/svg/941/941590.svg" style={{ width: "40px", marginRight: "10px" }} />
                            Gallery
                        </h3>
                        <Row>
                            <Column>
                                <Image src={leaves} />
                                <Image src={autumnTrees} />
                            </Column>
                        </Row>
                    </Col>
                </StyledDiv>
                <Footer />

            </div>
        );
    }
}