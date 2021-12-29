import styled from 'styled-components'

const ProjectContent = styled.div`
display: flex;
background-color: white;
border-radius: 10px;
padding: 50px;
@media only screen and (max-width: calc(850px)) {
  flex-direction: column;
}
`

export default ProjectContent