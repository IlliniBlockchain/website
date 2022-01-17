import { InfoBackground, InfoTitle, InfoDescription } from "./InfoStyles"
export default function InfoBanner(props) {
    return (
        <>
            <InfoBackground>
                <InfoTitle>
                    About Us
                </InfoTitle>
                <InfoDescription>
                   Established in 2021, Illini Blockchain is a curiosity-driven club 
                   whose mission is to learn about and get involved in the blockchain ecosystem.
                   Illini Blockchain was started on the belief that the new applications enabled by blockchain
                   technologies will have an impact on the future, and sought that the talented students,
                   alumni, and faculty have the ability to be at the forefront of the industry. Our aim is 
                   to foster the blockchain ecosystem on campus for everyone interested, helping people learn the 
                   technology and applications, building projects, and engaging in research.
                </InfoDescription>
            </InfoBackground>
        </>
    )
}