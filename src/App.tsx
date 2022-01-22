import React from 'react';
import styled from 'styled-components';
import './App.css';
import { Home, Footer, Header } from './HomePage'
import IdeaBox from './IdeaBoxPage';
import Resume from './ResumePage';
import Gallery from './GalleryPage';
import { device } from './sizes';

const App = () => {

	return (
		<>
			<Header />
			<OuterDiv>
				<Home />
				<HRTag />

				<Resume />
				<HRTag />

				<IdeaBox />
				<HRTag />

				<Gallery />
				<HRTag />

				<Footer />
			</OuterDiv>
		</>
	);
}

export default App;

const OuterDiv = styled.div`
	display: flex;
	padding: 0 5% 5% 5%;
	font-family: "Karla", sans-serif;
	flex-direction: column;
	@media ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
		flex-direction: column;
	}
`;


const HRTag = styled.hr`
	border: 0;
	clear: both;
	display: block;
	width: 96%;
	background-color: #f5abab;
	height: 2px;
	margin: 3% 0%;
`;