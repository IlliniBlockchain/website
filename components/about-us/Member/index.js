import Image from 'next/image'
import { MemberInfo, MemberImage, Nametag, SocialIcon } from '../../shared-styled/index';
import {AiFillLinkedin, AiOutlineTwitter} from 'react-icons/ai'
const iconSize = "1.5rem";
export default function Member(props) {
    const name = props.name;
    const headshotURL = props.image;
    const twitter = props.twitter;
    const linkedin = props.linkedinURL;
    return (
        <MemberInfo>
            <MemberImage>
                <Image src={headshotURL} width="200" height="200"/>
            </MemberImage>
            <Nametag>{name}</Nametag>
            {linkedin && 
                <SocialIcon>
                    <a href={linkedin} target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
                </SocialIcon>
            }
            {twitter &&
                <SocialIcon>
                    <a href={`https://www.twitter.com/${twitter}`} target="_blank" rel="noreferrer"><AiOutlineTwitter /></a>
                </SocialIcon>
            }    
            </MemberInfo>
    )
}