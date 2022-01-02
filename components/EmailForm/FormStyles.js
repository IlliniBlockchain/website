import styled from "styled-components";

const FormInput = styled.input`
border-width:1px;
height:100%;
border-radius: 10px 0 0 10px;
padding:.5rem;

`

const FormContainer = styled.div`
margin-right:10%;
min-width:20%;
margin-left:10%;
align-self:center;
padding:1rem;
`

const Form = styled.form`
display:flex;
height:2rem;
`

const FormButton = styled.button`
background-color:var(--navy-blue);
border-width:0;
color:white;
font-family:Montserrat;
font-weight:bold;
border-radius: 0 10px 10px 0;
padding:.5rem;
align-self:center;
`
export {FormInput, FormContainer, Form, FormButton}