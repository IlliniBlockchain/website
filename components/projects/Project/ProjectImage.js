import styled from 'styled-components'

const ProjectImage = styled.div`
width: 25%;
height: fit-content;
margin-right: 50px;
border-radius: 10px;
border: solid black 1px;

img {
  height: 100%;
  width: 100%;
  object-fit: contain;
  border-radius: 10px;
}

@media only screen and (max-width: calc(850px)) {
  margin: auto;
  width: 100%;
  margin-bottom: 25px;
}
`

export default ProjectImage