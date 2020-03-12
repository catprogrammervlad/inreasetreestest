import React from 'react';
import styled from 'styled-components';

const BodyBlock = styled.div`
	width: 100%;
	height: 640px;
`;

const SubBlock = styled.div`
	width: 70%;
	height: 640px;

	margin: 120px auto 0px auto;
	/* border: 1px solid green; */

	position: relative;
`;

const Header = styled.div`
	width: 390px;
	/* border: 1px solid black; */

	font-size: 70px;
	font-weight: 500;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

	position: absolute;
	top: 10px;
	left: 15px;
`;

const Iphone = styled.div`
	width: 700px;
	height: 640px;

	/* border: 1px solid black; */

	background: url('HalfOfIPhone.png');
	background-repeat: no-repeat;
	background-size: cover;

	position: absolute;
	top: 0;
	right: 0;
`;

const AvailableDevices = styled.div`
	width: 300px;
	height: 200px;

	background: url('AvailableDevices.png');
	background-repeat: no-repeat;
	background-size: cover;

	position: absolute;
	bottom: 50px;
	left: 0;
`;

const Block1 = () => (
	<BodyBlock>
		<SubBlock>
			<Header>Map in your hand</Header>
			<AvailableDevices />
			<Iphone />
		</SubBlock>
	</BodyBlock>
);

export default Block1;
