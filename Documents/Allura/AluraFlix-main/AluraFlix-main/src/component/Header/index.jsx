import React from "react"
import LogoMain from "../LogoMain"
import { NuevoVideo } from "../Boton"
import styled from "styled-components"
import { useLocation, Link } from "react-router-dom";

const HeaderDiv = styled.header`
    display: flex;
    justify-content: space-between;
    flex-shrink: 0;
    background: var(--color-black-dark);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 1rem 2.5rem;
    border: 1px solid #000;
    border-bottom: 0.125rem solid var(--color-primary-medium);
`
const Header = () => {
    const ruta = useLocation();
    if (ruta.pathname === '/') {
        return (
            <HeaderDiv>
                <LogoMain />
                <Link to="/nuevovideo"><NuevoVideo valor="Nuevo video" /></Link>
            </HeaderDiv>
        )
    }
    return (
        <HeaderDiv>
            <Link to="/"><LogoMain /></Link>
        </HeaderDiv>
    )
}

export default Header