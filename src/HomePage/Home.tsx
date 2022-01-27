import React, { useState, useEffect } from 'react';
import { storage } from '../firebase'
import { ref, getDownloadURL } from "firebase/storage";
import styled from 'styled-components';
import { LinkedIn, AlternateEmail, GitHub } from '@mui/icons-material';
import { device } from '../sizes';

const Home = () => {
	const [profileUrl, setProfileUrl] = useState('');

	/* Get the profile image */
	useEffect(() => {
		getDownloadURL(ref(storage, 'profile.jpg'))
			.then((url) => {
				setProfileUrl(url);
			})
			.catch(err => console.error(err));
	});
	// https://getcssscan.com/css-box-shadow-examples
	// https://www.digitalocean.com/community/tutorials/css-cropping-images-object-fit
	return (
		<HomePageDiv id="home-page">
			<div id='profile' style={{ display: "flex", padding: "2% 5% 0% 0%" }}>
				<img src={profileUrl} alt="Sakina G."
					style={{
						width: "380px",
						height: "400px",
						objectFit: "cover",
						objectPosition: "center",
						boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px 5px",
						borderRadius: "10%"
					}} />
			</div>
			<div id="home-page-body">
				<IntroDiv id="introdiv">
					Hi I'm Sakina!
				</IntroDiv>
				<BriefDiv id="brief-div">
					I am a full-stack developer and a photographer who loves to explore the outdoors.
					<br />
					My main areas of expertise include Javascript, Typescript, Node.js, HTML, CSS, Java and Python.
				</BriefDiv>

				<LinksDiv id="links-div">
					<div style={{ padding: "2%" }}>
						<ATag href="/resume">
							<LinkDiv id="resume-link">
								Resume
							</LinkDiv>
						</ATag>
					</div>
					<div style={{ padding: "2%" }}>
						<ATag href="/ideabox">
							<LinkDiv id="idea-box-link">
								Idea Box
							</LinkDiv>
						</ATag>
					</div>
					<div style={{ padding: "2%" }}>
						<ATag href="/gallery">
							<LinkDiv id="gallery-link">
								Gallery
							</LinkDiv>
						</ATag>
					</div>
				</LinksDiv>
				<ContactInfoDiv id="contact-info">
					Contact me:
					<div style={{ display: "flex", padding: "1.5% 0% 0% 1.5%" }}>
						<AlternateEmail style={{ paddingRight: "2%" }} />
						<a href="mailto:sakina.gadriwala@gmail.com">Email Me</a>
					</div>
					<div style={{ display: "flex", padding: "1.5% 0% 0% 1.5%" }}>
						<LinkedIn style={{ paddingRight: "2%" }} />
						<a href="https://linkedin.com/in/sakina-gadriwala">Follow me on LinkedIn</a>
					</div>
					<div style={{ display: "flex", padding: "1.5% 0% 0% 1.5%" }}>
						<GitHub style={{ paddingRight: "2%" }} />
						<a href="https://github.com/SakinaGadri/">Explore my work on GitHub</a>
					</div>
				</ContactInfoDiv>
			</div>
		</HomePageDiv>
	)
}

export default Home;

// https://getcssscan.com/css-buttons-examples?ref=beautifulboxshadow-bottom
const LinkDiv = styled.button`
	font-family: 'Inconsolata', monospace;
	font-size: 25px;
	letter-spacing: 2px;
	text-decoration: none;
	color: #000;
	cursor: pointer;
	border: 3px solid;
	padding: 0.25em 0.5em;
	box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
	position: relative;
	user-select: none;
	-webkit-user-select: none;
	touch-action: manipulation;

	:active {
		box-shadow: 1px 1px 1px 1px;
		top: 5px;
		left: 5px;
	}

	@media ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
		padding: 0.25em 0.75em;
	}
`;

const HomePageDiv = styled.div`
	display: flex;
	flex-direction: row;
	@media ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
		flex-direction: column;
	}
`;

const IntroDiv = styled.div`
	font-size: 400%;
	letter-spacing: 3px;
	font-family: "Caveat Brush", cursive;
	@media ${device.mobileS}, ${device.mobileM} {
		font-size: 250%;
		text-align: center;
	}
`;

const BriefDiv = styled.div`
	font-size: 135%;
	padding: 2% 2% 0% 0%;
	@media ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
		font-size: 125%;
		text-align: center;
	}
`;

const LinksDiv = styled.div`
	display: flex;
	flex-direction: row;
	padding: 3% 2%;
	@media ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
		flex-direction: column;
		align-items: center;
		padding: 5% 3%;
	}
`;

const ContactInfoDiv = styled.div`
	font-size: 120%;
	padding-right: 2%;
	@media ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
		font-size: 105%;
		align-items: center;
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

// References for media queries:
// https://css-tricks.com/logic-in-css-media-queries/
// https://jsramblings.com/how-to-use-media-queries-with-styled-components/
// https://www.freecodecamp.org/news/responsive-web-design-how-to-make-a-website-look-good-on-phones-and-tablets/
// https://html.com/anchors-links/#The_Anchor_Element