import Image from 'next/image'
import { MemberInfo, MemberImage, Nametag } from './MemberStyles';
export default function Member(props) {
    const name = props.name;
    const headshotURL = props.image;

    return (
        <MemberInfo>
            <MemberImage>
                <Image className={MemberImage} src={headshotURL} width="200" height="200"/>
            </MemberImage>
            <Nametag>{name}</Nametag>
        </MemberInfo>
    )
}