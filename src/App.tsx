import React from 'react';
import styled from 'styled-components';
import './App.css';
import Home from './HomePage'
import { Footer } from './CommonElements';
import { device } from './sizes';

const App = () => {

	return (
		<OuterDiv>
			<Home />
			<Footer />
		</OuterDiv>
	);
}

export default App;

const OuterDiv = styled.div`
	display: flex;
	padding: 5% 5% 0 5%;
	font-family: "Karla", sans-serif;
	flex-direction: column;
	@media ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
		flex-direction: column;
	}
`;
