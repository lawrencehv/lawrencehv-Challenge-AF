import React from "react"
import styled from "styled-components"
import LogoMain from "../LogoMain"

const Card = styled.div`
    height: 5.125rem;
    flex-shrink: 0;
    background: rgba(0,0,0,0.9);
    align-items: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(0,0,0,0.9);
    border-top: 0.125rem solid #2A7AE4;
    `
const Footer = () => {
    return <Card><LogoMain /></Card>
}

export default Footer