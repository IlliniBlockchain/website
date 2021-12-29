import Image from 'next/image'
import ProjectContainer from './ProjectContainer'
import ProjectTitle from './ProjectTitle'
import ProjectContent from './ProjectContent'
import ProjectImage from './ProjectImage'
import ProjectStackLinks from './ProjectStackLinks'
import ProjectStack from './ProjectStack'
import ProjectLinks from './ProjectLinks'
import ProjectDescription from './ProjectDescription'
import ProjectStackLinksDescription from './ProjectStackLinksDescription'
import { AiFillGithub } from 'react-icons/ai'
import { BiLinkExternal } from 'react-icons/bi'

const Project = ({ title, description, imageSrc, imageAlt, stack, githubUrl, websiteUrl }) => {

  return (
    <ProjectContainer>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectContent>
        <ProjectImage>
          <Image src={imageSrc} alt={imageAlt} layout="responsive" width={200} height={200}/>
        </ProjectImage>
        <ProjectStackLinksDescription>

          <ProjectDescription>
            {description}
          </ProjectDescription>

          <ProjectStackLinks>
            <ProjectStack>
              {stack.map((tool) => (
                <p>{tool}</p>
              ))}

            </ProjectStack>

            <ProjectLinks>
              {githubUrl && <a href={githubUrl} target="_blank"><AiFillGithub/></a>}
              {websiteUrl && <a href={websiteUrl} target="_blank"><BiLinkExternal/></a>}
            </ProjectLinks>

          </ProjectStackLinks>


        </ProjectStackLinksDescription>
      </ProjectContent>
    </ProjectContainer>
  )
}

export default Project