import Image from 'next/image'
import ProjectContainer from './ProjectContainer'
import ProjectTitle from './ProjectTitle'
import ProjectContent from './ProjectContent'
import ProjectImage from './ProjectImage'
import ProjectStackLinks from './ProjectStackLinks'
import ProjectStack from './ProjectStack'
import ProjectLinks from './ProjectLinks'
import ProjectDescription from './ProjectDescription'
import {AiFillLinkedin, AiOutlineTwitter} from 'react-icons/ai'

const Project = ({ title, description, stack, githubUrl, websiteUrl }) => {

  return (
    <ProjectContainer>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectContent>
        <ProjectImage>

        </ProjectImage>
        <ProjectStackLinks>
          <ProjectStack>

          </ProjectStack>

          <ProjectLinks>

          </ProjectLinks>

        </ProjectStackLinks>
        <ProjectDescription>
          {description}
        </ProjectDescription>
      </ProjectContent>
    </ProjectContainer>
  )
}

export default Project