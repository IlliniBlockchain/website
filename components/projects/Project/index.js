import Image from 'next/image'
import {
  ProjectContainer,
  ProjectContent,
  ProjectDescription,
  ProjectImage,
  ProjectLinks,
  ProjectStack,
  ProjectStackLinks,
  ProjectStackLinksDescription,
  ProjectTitle
} from './ProjectStyles'
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
                <p key={tool}>{tool}</p>
              ))}

            </ProjectStack>

            <ProjectLinks>
              {githubUrl && <a href={githubUrl} target="_blank" rel="noreferrer"><AiFillGithub/></a>}
              {websiteUrl && <a href={websiteUrl} target="_blank" rel="noreferrer"><BiLinkExternal/></a>}
            </ProjectLinks>

          </ProjectStackLinks>


        </ProjectStackLinksDescription>
      </ProjectContent>
    </ProjectContainer>
  )
}

export default Project