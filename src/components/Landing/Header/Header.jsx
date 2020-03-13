import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
	background: rgba(0, 0, 0, ${(props) => props.blackoutHeader});
	width: 100%;
	height: 100vh;
	position: relative;
`;

const SubHeader1 = styled.div`
	/* display: flex;
	justify-content: space-around;
	align-content: center;
	align-items: center; */
	background: rgba(0, 0, 0, 0.3);

	width: 100%;
	height: 85px;

	position: fixed;

	top: 0;
	left: 0;
	z-index: 1000;

	${(props) =>
		props.activate1 === 1 &&
		'animation-name: hideSubHeader; animation-duration: 1s;animation-fill-mode: forwards;'}

	${(props) =>
		props.activate1 === 2 &&
		'animation-name: showSubHeader; animation-duration: 1s;animation-fill-mode: forwards;'}

	
	@keyframes hideSubHeader {
		0% {
		}

		80% {
			transform: translateY(-100px);
		}

		100% {
			transform: translateY(-100px);
		}
	}

	@keyframes showSubHeader {
		0% {
			transform: translateY(-100px);
		}

		80% {
			transform: translateY(0);
		}

		100% {
			transform: translateY(0);
		}
	}
`;

const SubHeader2 = styled.div`
	

	background: rgba(0, 0, 0, 0.8);

	width: 100%;
	height: 60px;

	position: fixed;

	top: 0;
	left: 0;
	z-index: 1000;
	
	
	

	${(props) =>
		props.activate2 === 0 &&
		'animation-name: hideSubHeader; animation-duration: 1s;animation-fill-mode: forwards;top: -60px;'}

	${(props) =>
		props.activate2 === 1 &&
		'animation-name: hideSubHeader; animation-duration: 1s;animation-fill-mode: forwards;'}

	${(props) =>
		props.activate2 === 2 &&
		'animation-name: showSubHeader; animation-duration: 1s;animation-fill-mode: forwards;'}

	
	@keyframes hideSubHeader {
		0% {
		}

		80% {
			transform: translateY(-100px);
		}

		100% {
			transform: translateY(-100px);
		}
	}

	@keyframes showSubHeader {
		0% {
			transform: translateY(-100px);
		}

		80% {
			transform: translateY(0);
		}

		100% {
			transform: translateY(0);
		}
	}
`;

const Logo1 = styled.div`
	display: inline-block;
	color: #fff;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-size: 38px;
	font-weight: 340;

	/* border: 1px solid white; */

	position: absolute;
	transform: translate(0, -50%);
	top: 50%;
	left: 8%;

	@media (max-width: 1500px) {
		font-size: 35px;
	}
	@media (max-width: 1100px) {
		font-size: 30px;
	}

	@media (max-width: 750px) {
		font-size: 25px;
	}
`;

const Logo2 = styled.div`
	display: inline-block;
	color: #fff;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-size: 30px;
	font-weight: 340;

	position: absolute;
	transform: translate(0, -50%);
	top: 50%;
	left: 8%;

	@media (max-width: 1500px) {
		font-size: 25px;
	}
	@media (max-width: 1100px) {
		font-size: 23px;
	}

	@media (max-width: 750px) {
		font-size: 23px;
	}
`;

const NavMenu1 = styled.ul`
	display: inline-block;

	list-style-type: none;

	overflow: hidden;

	/* border: 1px solid white; */

	position: absolute;
	transform: translate(-50%, -50%);
	top: 50%;
	left: 50%;

	li {
		float: left;
	}

	li a {
		height: 85px;
		text-align: center;
		line-height: 80px;
		display: block;

		color: rgba(255, 255, 255, 0.7);
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		font-size: 20px;
		font-weight: 200;
		text-decoration: none;

		margin-left: 108px;
		padding: auto;

		border-bottom: 5px solid rgba(0, 0, 0, 0);

		transition: color 0.2s ease-out, border 0.2s ease-out;

		@media (max-width: 1500px) {
			font-size: 18px;
			margin-left: 40px;
		}
		@media (max-width: 1100px) {
			display: none;
		}

		/* 320 */
	}

	li:first-child a {
		margin-left: 0;
	}

	li a:hover {
		font-weight: 300;
		border-bottom: 2px solid #00f539;

		color: #00f539;
	}
`;

const Flag1 = styled.div`
	background: url('flag.png');
	background-size: cover;
	width: 32px;
	height: 21px;

	position: absolute;
	transform: translate(50%, -50%);
	top: 50%;
	right: 9%;

	@media (max-width: 1100px) {
		top: 50%;
		right: 50%;
	}

	@media (max-width: 750px) {
		top: 50%;
		right: 20%;
		width: 28px;
		height: 18px;
	}
`;

const Flag2 = styled.div`


	background: url('flag.png');
	background-size: cover;
	width: 32px;
	height: 21px;

	position: absolute;
	transform: translate(50%, -50%);
	top: 50%;
	right: 50%;

	@media (max-width: 1100px) {
		top: 50%;
		right: 50%;
	}

	@media (max-width: 750px) {
		top: 50%;
		right: 20%;
		width: 28px;
		height: 18px;
	}
`;

const GamburgerMenu1 = styled.div`
	background: url('GamburgerMenu.png');
	background-size: cover;
	width: 25px;
	height: 20px;

	display: none;

	@media (max-width: 1100px) {
		display: block;
	}

	position: absolute;
	transform: translate(50%, -50%);
	top: 50%;
	right: 11%;
`;

const GamburgerMenu2 = styled.div`
	background: url('GamburgerMenu.png');
	background-size: cover;
	width: 25px;
	height: 20px;

	position: absolute;
	transform: translate(50%, -50%);
	top: 50%;
	right: 10%;

	@media (max-width: 1100px) {
		top: 50%;
		right: 11%;
	}
`;

const BackgroundVideo = styled.video`
	position: absolute;
	right: 0;
	bottom: 0;
	min-width: 100%;
	min-height: 100%;
	background-position: right top;
	width: 100;
	height: auto;
	z-index: -1;
`;

const BlockHeading = styled.div`
	position: absolute;
	transform: translate(-50%, -50%);
	top: 45%;
	left: 50%;
	width: 100%;

	opacity: ${(props) => props.opacityHeader};
`;

const Heading = styled.h1`
	color: #fff;
	text-align: center;
	font-size: 64px;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-weight: 300;

	@media (max-width: 1500px) {
		font-size: 59px;
	}
	@media (max-width: 1100px) {
		font-size: 52px;
	}

	@media (max-width: 750px) {
		font-size: 42px;
	}
`;

const SubHeading = styled.h2`
	margin-top: 15px;
	color: #fff;
	text-align: center;
	font-size: 44px;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-weight: 300;

	@media (max-width: 1500px) {
		font-size: 39px;
	}
	@media (max-width: 1100px) {
		font-size: 32px;
	}

	@media (max-width: 750px) {
		font-size: 22px;
	}
`;

const Arrow = styled.div`
	background: url('arrow.png');
	width: 32px;
	height: 17px;
	position: absolute;
	transform: translate(-50%, -50%);
	left: 50%;
	bottom: 15px;

	opacity: ${(props) => props.opacityHeader};
`;

const DonateButton = styled.button`
	position: absolute;
	transform: translate(-50%, -50%);
	left: 50%;
	top: 75%;

	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-weight: 300;
	font-size: 25px;
	letter-spacing: 2px;
	text-indent: -10px;
	line-height: 15px;

	background: transparent;
	border: 2px solid rgb(255, 255, 255, 0.8);
	color: rgb(255, 255, 255, 0.8);
	padding: 15px 32px;
	text-align: center;
	text-decoration: none;
	display: inline-block;

	width: 150px;
	height: 50px;

	transition: color 0.1s ease-out, border 0.1s ease-out;

	opacity: ${(props) => props.opacityHeader};

	&:hover {
		border: 2px solid;
		color: rgb(0, 245, 57, 0.8);
	}
`;

const header = (props) => (
	<>
		<SubHeader1 activate1={props.activate1}>
			<Logo1>IncreaseTrees</Logo1>
			<NavMenu1>
				<li>
					<a href={'/'}>NEWS</a>
				</li>
				<li>
					<a href={'/'}>AWARD</a>
				</li>
				<li>
					<a href={'/'}>APP</a>
				</li>
				<li>
					<a href={'/'}>COUNTRIES</a>
				</li>
				<li>
					<a href={'/'}>MAP</a>
				</li>
			</NavMenu1>
			<Flag1 />
			<GamburgerMenu1 />
		</SubHeader1>

		<SubHeader2 activate2={props.activate2}>
			<Logo2>IncreaseTrees</Logo2>
			<Flag2 />
			<GamburgerMenu2 />
		</SubHeader2>

		<Header blackoutHeader={props.blackoutHeader}>
			<BlockHeading opacityHeader={props.opacityHeader}>
				<Heading>Save the future</Heading>
				<SubHeading>
					Donate to plant <br /> trees
				</SubHeading>
			</BlockHeading>

			<DonateButton opacityHeader={props.opacityHeader}>DONATE</DonateButton>

			<Arrow opacityHeader={props.opacityHeader} />

			<BackgroundVideo autoPlay loop muted playsInline>
				<source src='video.mp4' type='video/mp4' />
			</BackgroundVideo>
		</Header>
	</>
);

export default header;
