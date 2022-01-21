import React from 'react';
// import { storage } from '../firebase'
// import { ref, getDownloadURL, getStream } from "firebase/storage";
import styled from 'styled-components';
import { Language, Code, TaskAlt, Sync } from '@mui/icons-material';
import { device } from '../sizes';
import SignLang from './SignLang';
import MorseCode from './MorseCode';
import StayOnTask from './StayOnTask';
import SyncArt from './SyncArt';

const IdeaBox = () => {

  // https://theideaboxkids.com/whats-an-idea-box/
  // https://getcssscan.com/css-buttons-examples (button 52)
  return (
    <div style={{ display: "flex", fontFamily: "Karla, sans-serif", padding: "1.5%" }}>
      {/* Nav Menu */}
      <div style={{ display: "flex", flexDirection: "column", paddingTop: "5%", position: "sticky", top: "0px", color: "blue"}}>
        <ButtonDiv>
          <Language /> <ATag href="#sign-lang">Sign Language</ATag>
        </ButtonDiv>
        <ButtonDiv>
          <Code /> <ATag href="#morse-code">Morse Code</ATag>
        </ButtonDiv>
        <ButtonDiv>
          <TaskAlt /> <ATag href="#stay-on-task">Stay on Task</ATag>
        </ButtonDiv>
        <ButtonDiv>
          <Sync /> <ATag href="#sync-your-art">Sync your Art</ATag>
        </ButtonDiv>
      </div>
    
      {/* Starter Page */}
      <div>
        <TitleDiv> My Idea Box </TitleDiv>
        <div style={{ display: "flex", fontSize: "150%", paddingLeft: "1.5%" }}>
          <p style={{ margin: "1% 0%" }}>
            An idea that was inspired by <a rel="noopener noreferrer" href="https://theideaboxkids.com/whats-an-idea-box/">The Idea Box</a>.
            My Idea Box contains all the project ideas
            I've thought of doing, but haven't done yet. My goal is to complete at least 2 of them
            a year, and add as many as I can think of every year.
            <br /> <br />
            Keep scrolling or use the navigation bar on the left to read more about these ideas!
          </p>
        </div>
        <div id="sign-lang">
          <SignLang />
        </div>
        <div id="morse-code">
          <MorseCode />
        </div>
        <div id="stay-on-task">
          <StayOnTask />
        </div>
        <div id="sync-your-art">
          <SyncArt />
        </div>
      </div>
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
    background-color: #ffe54c;
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
    font-size: 100%;
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