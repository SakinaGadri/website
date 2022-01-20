import React, { useState, useEffect } from 'react';
import { storage } from '../firebase'
import { ref, getDownloadURL } from "firebase/storage";
import styled from 'styled-components';
import { LinkedIn, AlternateEmail, GitHub } from '@mui/icons-material';

const Home = () => {
	const [backgroundUrl, setBackgroundUrl] = useState('');
	const [profileUrl, setProfileUrl] = useState('');

	/* Get the background */
	useEffect(() => {
		getDownloadURL(ref(storage, 'background/summer.jpg'))
			.then((url) => {
				setBackgroundUrl(url);
			})
			.catch(err => console.error(err));
	});

	/* Get the profile image */
	useEffect(() => {
		getDownloadURL(ref(storage, 'profile.jpg'))
			.then((url) => {
				setProfileUrl(url);
			})
			.catch(err => console.error(err));
	});

	return (
		// https://getcssscan.com/css-box-shadow-examples
		// https://www.digitalocean.com/community/tutorials/css-cropping-images-object-fit
		// style={{ backgroundImage: `url(${backgroundUrl})`, height: '100%', overflow: 'hidden' }}
		<div style={{ display: "flex", padding: "5%", fontFamily: "Karla, sans-serif" }}>
			<div id='profile' style={{ display: "flex", padding: "2% 5% 0% 0%" }}>
				<img src={profileUrl}
					style={{
						width: "380px",
						height: "400px",
						objectFit: "cover",
						objectPosition: "center",
						boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px 5px",
						borderRadius: "10%"
					}} />
			</div>
			<div>
				<div id="intro" style={{ fontSize: "400%", letterSpacing: "3px", fontFamily: "Caveat Brush, cursive" }}>
					Hi I'm Sakina!
				</div>
				<div id="brief" style={{ fontSize: "200%", padding: "2% 2% 0% 0%" }}>
					Graduated from University of Toronto, I enjoy creating... idk something
				</div>

				<div id="links" style={{ display: "flex", flexDirection: "row", padding: "3% 2%", flex: "1" }}>
					<div style={{ padding: "2%" }}>
						<Link id="resume">Resume</Link>
					</div>
					<div style={{ padding: "2%" }}>
						<Link id="idea-box">Idea Box</Link>
					</div>
					<div style={{ padding: "2%" }}>
						<Link id="gallery">Gallery</Link>
					</div>
				</div>
				<div id="contact-info" style={{ fontSize: "120%", paddingRight: "2%" }}>
					Contact me
					<div style={{ display: "flex", padding: "1.5% 0% 0% 1.5%" }}>
						<AlternateEmail />
						sakina.gadriwala@gmail.com
					</div>
					<div style={{ display: "flex", padding: "1.5% 0% 0% 1.5%" }}>
						<LinkedIn />
						www.linkedin.com/in/sakina-gadriwala
					</div>
					<div style={{ display: "flex", padding: "1.5% 0% 0% 1.5%" }}>
						<GitHub />
						https://github.com/SakinaGadri/
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home;

// https://getcssscan.com/css-buttons-examples?ref=beautifulboxshadow-bottom
const Link = styled.button`
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
`;
