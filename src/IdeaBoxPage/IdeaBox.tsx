import React from 'react';
import styled from 'styled-components';
import { Language, Code, TaskAlt, Sync } from '@mui/icons-material';
import { device } from '../sizes';
import SignLang from './SignLang';
import MorseCode from './MorseCode';
import StayOnTask from './StayOnTask';
import SyncArt from './SyncArt';
import { Header, Footer } from '../CommonElements';

const IdeaBox = () => {

  // https://theideaboxkids.com/whats-an-idea-box/
  // https://getcssscan.com/css-buttons-examples (button 52)
  return (
    <div id="ideabox-outerdiv" style={{ display: "flex", flexDirection: "column", fontFamily: "Karla, sans-serif" }}>
      <Header />
      <div id="idea-box" style={{ display: "flex", fontFamily: "Karla, sans-serif", padding: "1% 3%", flexDirection: "row" }}>
        {/* Nav Menu */}
        <SideBar>
          <ATag href="#sign-lang">
            <ButtonDiv>
              <Language /> Sign Language
            </ButtonDiv>
          </ATag>

          <ATag href="#morse-code">
            <ButtonDiv>
              <Code /> Morse Code
            </ButtonDiv>
          </ATag>

          <ATag href="#stay-on-task">
            <ButtonDiv>
              <TaskAlt /> Stay on Task
            </ButtonDiv>
          </ATag>

          <ATag href="#sync-your-art">
            <ButtonDiv>
              <Sync /> Sync your Art
            </ButtonDiv>
          </ATag>
        </SideBar>

        {/* Starter Page */}
        <div>
          <TitleDiv> My Idea Box </TitleDiv>
          <IdeaBoxBlobDiv>
            <p style={{ margin: "1% 0%" }}>
              An idea that was inspired by <a rel="noopener noreferrer" href="https://theideaboxkids.com/whats-an-idea-box/">The Idea Box</a>.
              My Idea Box contains all the project ideas
              I've thought of doing, but haven't done yet. My goal is to complete at least 2 of them
              a year, and add as many as I can think of every year.
              <br /> <br />
              <ScrollSentence>
                Keep scrolling or use the navigation bar on the left to read more about these ideas!
              </ScrollSentence>
            </p>
          </IdeaBoxBlobDiv>

          {/* Idea Pages */}
          <SignLang />
          <MorseCode />
          <StayOnTask />
          <SyncArt />

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IdeaBox;

const ButtonDiv = styled.button`
  font-size: 16px;
  font-family: "Karla", sans-serif;
  margin: 10px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 13px 20px 13px;
  outline: 0;
  border: 1px solid black;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  :after {
    content: "";
    background-color: #fb82a166;
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    top: 7px;
    left: 7px;
    transition: 0.2s;
  }
  :hover:after {
    top: 0px;
    left: 0px;
  }
  @media ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
    padding: 13px 50px 13px;
  }
`;

const TitleDiv = styled.div`
  padding-left: 3%;
  font-family: "Homemade Apple", cursive;
  font-size: 285%;
  @media ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
    font-size: 200%;
    text-align: center;
  }
`;

const ATag = styled.a`
  text-decoration: none;
  color: inherit;
  :hover, :focus, :active {
    text-decoration: none;
    color: inherit;
  }
`

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 5%;
  position: sticky;
  top: 0px;
  height: 100%;
  @media ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
    display: none;
  }
`;

const ScrollSentence = styled.span`
  @media ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
    display: none;
  }
`

const IdeaBoxBlobDiv = styled.div`
  display: flex;
  font-size: 130%;
  padding-left: 1.5%;
  @media ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
    font-size: 125%;
    text-align: center;
  }
`;