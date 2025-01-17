import React from "react"
import styled from "styled-components"

const BotonDiv = styled.button`
    font-family: var(--roboto);    
    width: 11.25781rem;
    height: 3.375rem;
    flex-shrink: 0;
    border-radius: 0.25rem;
    text-align: center;
    font-size: 1.3125rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.5rem;
    cursor: pointer;
`
const Boton = ({ buttonOnClick, valor, ...rest }) => {
    return <BotonDiv{...rest} onClick={buttonOnClick}>{valor}</BotonDiv>
}
export const NuevoVideo = styled(Boton)`
color: #FFF;
border: 2px solid var(--color-gray-light);
background: var(--color-black-dark);
`
export const GuardarVideo = styled(Boton)`
color: #FFF;
background: var(--color-primary-medium);
margin-right: 2.5rem;
`
export const BorrarVideo = styled(Boton)`
color: var(--color-black-dark);
background: var(--color-black-lighter);
margin-right: auto;
`
export const NuevaCategoria = styled(Boton)`
color: #FFF;
background: var(--color-primary-medium);
`
export default Boton