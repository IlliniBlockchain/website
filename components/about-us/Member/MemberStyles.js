import styled from 'styled-components'

const MemberInfo = styled.div`
margin: 20px;
display: inline-block
`

const MemberImage = styled.div`
margin:5px;
aspect-ratio: 1/1;
border-radius: 100%;
overflow: hidden;
`

const Nametag = styled.div`
margin:5px;

text-align: center;
font-weight: bold;
font-size: 1.1rem
`

export {
    MemberInfo,
    MemberImage,
    Nametag
}