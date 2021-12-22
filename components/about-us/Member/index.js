import Image from 'next/image'
import { MemberInfo, MemberImage, Nametag } from './MemberStyles';
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
                <a href={linkedin} target="_blank"><AiFillLinkedin style={{fontSize: iconSize}}/></a>
            }
            {twitter &&
                <a href={`https://www.twitter.com/${twitter}`} target="_blank"><AiOutlineTwitter style={{fontSize: iconSize}}/></a>
            }    
            </MemberInfo>
    )
}