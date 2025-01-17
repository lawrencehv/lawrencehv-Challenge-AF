import React from "react"
import styled from "styled-components"

const Card = styled.div`
    display: flex;
    width: 30rem;
    height: 16.875rem;
    border-radius: 0.25rem;
    border: 4px solid ;
`
const Miniatura = styled.img`
    width: 30rem;
    height: 16.875rem;
    background-size: cover; 
    `
const MiniaturaMain = styled.img`
    width: 40rem;
    height: 22.5rem;
    background-size: cover; 
    `
const CardMain = styled(Card)`
    width: 40rem;
    height: 22.5rem;
    border: 3px solid ;
`
const VideoCard = (props) => {
    return <Card style={{ borderColor: props.borderColor }}>
        <Miniatura loading="lazy" src={props.videoImg} alt="YouTube Video Thumbnail" />
    </Card>
}
export default VideoCard

export const VideoCardMain = (props) => {
    return <CardMain style={{ borderColor: props.borderColor }}>
        <MiniaturaMain loading="lazy" src={props.videoImg} alt="YouTube Video Thumbnail" />
    </CardMain>
}