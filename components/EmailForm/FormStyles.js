import styled from "styled-components";

const FormInput = styled.input`
border-width:0;
height:100%;
border-radius: 10px 0 0 10px;
padding: 10px 10px 10px 20px;
width:20rem;
font-family:Montserrat;
@media only screen and (max-width: 1100px) {
    max-width:12rem;
  }

`

const FormContainer = styled.div`
margin-right:15%;
min-width:25%;
align-self:center;
padding:1rem;
width:fit-content;
justify-content:center; 
align-items:center; 

@media only screen and (max-width: 1100px) {
    margin-right:5%;
  }
`

const Form = styled.form`
display:flex;
height:3rem;
width:fit-content;
`

const FormButton = styled.button`
background-color:var(--navy-blue);
border-width:0;
color:white;
font-family:Montserrat;
font-weight:bold;
border-radius: 0 1rem 1rem 0;
padding: 10px 30px 10px 30px;
align-self:center;
cursor: pointer;
height:3rem;
font-size:1rem;
`
export {FormInput, FormContainer, Form, FormButton}