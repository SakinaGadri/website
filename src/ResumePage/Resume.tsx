import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { Header, Footer } from '../CommonElements';
import { Download } from '@mui/icons-material';
import { storage } from '../firebase'
import { ref, getDownloadURL } from "firebase/storage";

const Resume = () => {
	const [resumeURL, setResumeUrl] = useState('');

	useEffect(() => {
		getDownloadURL(ref(storage, 'Resume.pdf'))
			.then((url) => {
				setResumeUrl(url);
			})
			.catch(err => console.error(err));
	})

	return (
		<div id="ideabox-outerdiv" style={{ display: "flex", flexDirection: "column", fontFamily: "Karla, sans-serif" }}>
			<Header />
			<span style={{ fontFamily: "IM Fell English SC, serif", padding: "2.5% 5% 0", fontSize: "300%" }}>Resume</span>
			<TimelineItem>
				<ul>
					<span style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: "120%", margin: "2%", color: "#eb992f" }}>
						Work Experience
					</span>

					<li>
						<span>Current</span>
						<div id="content">
							<h3>Software Developer - ODAIA</h3>
							<p>
								Worked on their Maptual Platform.
							</p>
						</div>
					</li>

					<li>
						<span>May 2021 - August 2021</span>
						<div id="content">
							<h3>Software Developer Intern - ODAIA</h3>
							<p>
								Optimized the data ingestion pipeline using a multi-container approach; deployed solution using AWS and Jenkins.
							</p>
						</div>
					</li>

					<li>
						<span>September 2020 - August 2021</span>
						<div id="content">
							<h3>Software Developer (Shelter Movers) - UofT Blueprint</h3>
							<p>
								Developed the front and backend using React and Express Frameworks; deployed website using Firebase.
							</p>
						</div>
					</li>

					<li>
						<span>September 2018 - December 2021 </span>
						<div id="content">
							<h3>Teaching Assistant - University of Toronto</h3>
							<p>
								Lead tutorials of the following courses:
								<ol>
									<li>Introduction to Databases and Web Applications</li>
									<li>Introduction to Computer Science (part II)</li>
									<li>Calculus for Physical Science (part I and II)</li>
									<li>Software Design</li>
								</ol>
							</p>
						</div>
					</li>

					<li>
						<span>September 2019 - January 2020</span>
						<div id="content">
							<h3>Physical Comedy - An Express and React Project</h3>
							<p>
								Developed the front and back end using React and Express Frameworks; deployed the <a href="http://physicalcomedy.herokuapp.com">website</a> using Firebase.
							</p>
						</div>
					</li>

					<li>
						<span>September 2019 - December 2019</span>
						<div id="content">
							<h3>Planit - A Flutter and Java Project</h3>
							<p>
								Developed the front-end using Flutter SDK and developed APIs using Java to modify and access data from external APIs such as FourSquares.
							</p>
						</div>
					</li>

					<li>
						<span>January 2019 - August 2019</span>
						<div id="content">
							<h3>Automation Developer, Co-op - Fleet Complete</h3>
							<p>
								Developed UI Automation project using Node.js and Javascript assertion libraries, Appium and WDIO framework
							</p>
						</div>
					</li>

					<li>
						<span>June  2018 - April 2019</span>
						<div id="content">
							<h3>Chair - TEDxUTSC, University of Toronto, Scarborough</h3>
							<p>
								Led, planned and executed the TEDxUTSC 2019 conference for 300+ attendees.
							</p>
						</div>
					</li>

					<HRStyle />
					<span style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: "120%", margin: "2%", color: "#eb992f" }}>
						Education
					</span>

					<li>
						<span>September 2017 - December 2021</span>
						<div id="content">
							<h3>Honors Bachelor of Science Computer Science Specialist Co-op - University of Toronto, Scarborough</h3>
							<p>
								Recognition of Exceptional Academic Achievement "Dean's List" in 2018
							</p>
						</div>
					</li>

				</ul>
			</TimelineItem>
			<div style={{ paddingLeft: "5%", alignSelf: "center", display: "flex" }}>
				<a href={resumeURL}>
					Download my resume <Download />
				</a>
			</div>
			<Footer />
		</div>
	)
}

export default Resume;

const TimelineItem = styled.div`
	width: 90%;
	color: black;
	padding: 0 5.5% 0;
	ul {
		list-style-type:none;
		border-left:2px solid #094a68;
		padding:10px 5px;
		li {
			padding: 0.5% 1%;
			cursor:pointer;
			transition:.5s;
			span{
				display: inline-block;
				background-color: pink;
				border-radius:25px;
				padding:2px 5px;
				font-size:15px;
				text-align:center;
			}
			#content h3{
				color: #f92f52;
				font-size:17px;
				padding-top:5px;
			}
			#content p{
				padding:5px 0px 15px 0px;
				font-size:15px;
			}
			:before{
				position:absolute;
				content:'';
				width:10px;
				height:10px;
				background-color: #f74c6a;
				border-radius:50%;
				left:-11px;
				top:28px;
				transition:.5s;
			}
			:hover{
				background-color: #fbeaed;
			}
		}
	}

`;

const HRStyle = styled.hr`
	border: 0;
	clear: both;
	display: block;
	width: 96%;
	background-color: #f5abab;
	height: 2px;
`;

// https://codepen.io/alvarotrigo/pen/ExwYyNW

/*
@media (max-width:300px){
  .timeline{
	width:100%;
	padding:30px 5px 30px 10px;
  }
  .timeline ul li .content h3{
	color:#34ace0;
	font-size:15px;
  }
*/