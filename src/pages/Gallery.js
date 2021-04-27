import React from 'react';
import { Col } from 'react-bootstrap';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styled from 'styled-components';
/* images */
import leaves from '../gallery/autumn-leaves.jpg';
import autumnTrees from '../gallery/autumn-trees.jpg';
import beach from '../gallery/beach.jpg';
import book from '../gallery/Book.jpg';
import esclator from '../gallery/esclator.jpg';
import finger from '../gallery/finger.jpg';
import grass from '../gallery/grass.jpg';
import shoes from '../gallery/hello.jpg';
import husnEyusuf from '../gallery/Husn-e-Yusuf.jpg';
import keyboard from '../gallery/keyboard.jpg';
import lakeAndSun from '../gallery/LakeAndSun.jpg';
import mountains from '../gallery/mountains.jpg';
import omw from '../gallery/omw.jpg';
import oyster from '../gallery/oyster.jpg';
import park from '../gallery/park.jpg';
import pcarnival from '../gallery/pcarnival.jpg';
import snail from '../gallery/snail.jpg';
import symmtericalTrees from '../gallery/symmetrical-trees.jpg';

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

const Icon = styled.img`
    width: 40px;
    margin-right: 10px;
`;

export default class Gallery extends React.Component {
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Header />
                <StyledDiv>
                    <Col>
                        <h3>
                            <Icon src="https://www.flaticon.com/svg/static/icons/svg/941/941590.svg" />
                            Gallery
                        </h3>
                        <Row>
                            <Column>
                                <Image src={leaves} />
                                <Image src={autumnTrees} />
                                <Image src={beach} />
                                <Image src={pcarnival} />
                                <Image src={park} />
                            </Column>
                            <Column>
                                <Image src={shoes} />
                                <Image src={esclator} />
                                <Image src={finger} />
                                <Image src={snail} />
                                <Image src={symmtericalTrees} />
                            </Column>
                            <Column>
                                <Image src={book} />
                                <Image src={grass} />
                                <Image src={omw} />
                                <Image src={husnEyusuf} />
                            </Column>
                            <Column>
                                <Image src={keyboard} />
                                <Image src={lakeAndSun} />
                                <Image src={mountains} />
                                <Image src={oyster} />
                            </Column>
                        </Row>
                    </Col>
                </StyledDiv>
                <Footer />
            </div>
        );
    }
}