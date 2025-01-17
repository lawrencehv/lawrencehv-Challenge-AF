import React from "react"
import styled from "styled-components"

const LogoDiv = styled.div`
    display: flex;
    width: 10.52813rem;
    height: 2.5rem;
    flex-shrink: 0;
    background: url(logo.png);
    background-repeat: no-repeat;
    background-size: cover;
`
const LogoMain = () => {
    return <LogoDiv></LogoDiv>
}

export default LogoMain;