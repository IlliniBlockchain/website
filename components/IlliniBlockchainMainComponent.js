import React from 'react'
import styled from 'styled-components'

const StyledTitleOne = styled.title`
padding-left: 100px;
padding-bottom: 0px;
margin-top: 100px;
margin-bottom: 0px;
color: #ffffff; 
display: flex;
justify-content: left;
font-size: 138px;
font-weight: bold;
`
const StyledTitleTwo = styled.title`
padding-left: 100px;
margin-top: 0px;
padding-top: 0px;
color: #ffffff; 
display: flex;
justify-content: left;
font-size: 138px;
font-weight: bold;
`

const StyledDescription = styled.h3`
padding-left: 110px;
margin-top: 0px;
margin-bottom: 125px;
color: #ffffff;  
display: flex;
justify-content: left;
font-size: 48px;
font-weight: 400;
`

const IlliniBlockchainMainComponent = () => (
  <div>
    <StyledTitleOne>Illini</StyledTitleOne>
    <StyledTitleTwo>Blockchain</StyledTitleTwo>
    <StyledDescription>The premier source for blockchain at UIUC</StyledDescription>
  </div>
)


export default IlliniBlockchainMainComponent