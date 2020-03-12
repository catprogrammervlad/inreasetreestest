import React from 'react';
import styled from 'styled-components';

const BodyBlock = styled.div`
	width: 100%;
	height: 200px;
	background: #fafafa;

	position: relative;
`;

const Header = styled.h4`
  

	/* margin-top: 40px; */
	/* border: 1px solid black;
   */
	font-size: 25px;
	font-weight: 300;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: rgba(0,0,0,0.8);
  text-align: center;

  position: absolute;
  transform: translate(-50%, -50%);
  top: 20px;
  left: 50%;

`;

const Block2 = () => (
	<BodyBlock>
		<Header>Charity ogranizations</Header>
	</BodyBlock>
);

export default Block2;
