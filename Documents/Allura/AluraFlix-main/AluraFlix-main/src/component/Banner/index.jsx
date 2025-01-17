import React from "react"
import { VideoCardMain } from "../VideoCard"
import TitleCategory from "../TitleCategory"
import styled from "styled-components"

const BannerDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: auto;
    flex-shrink: 0;
    border: 1px solid #000;
    background: url(1669559000581.png), var(--color-black-dark);
    background-repeat: no-repeat;
    background-size: 100%;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding-bottom: 2rem;
`
const Contenido = styled.div`
    display: flex;
    justify-content: space-between;
    height: 20.84888rem;
    flex-shrink: 0;
    padding: 13rem 1rem 0 1rem;
    margin-bottom: 2rem;
`
const ContenidoTexto = styled.div`
    width: 45%;
    height: 19.0625rem;
    flex-shrink: 0;
    padding-top: 1rem;
`
const Encabezado = styled.h1`
    font-size: 2.875rem;
    font-style: normal;
    line-height: normal;
    padding-top: 2rem;
    padding-bottom: 0.56rem;
`
const Parrafo = styled.p`
    height: 6.875rem;
    width:auto;
    flex-shrink: 0;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
`
const Banner = () => {
    return (
        <BannerDiv>
            <Contenido>
                <ContenidoTexto>
                    <TitleCategory titleCategoria='Front End' titleColor='rgba(42, 122, 228, 1)' />
                    <Encabezado>Challenge React</Encabezado>
                    <Parrafo>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</Parrafo>
                </ContenidoTexto>
                <VideoCardMain borderColor={'rgba(42, 122, 228, 1)'} videoImg={'https://img.youtube.com/vi/MnBNPA45NW8/maxresdefault.jpg'} src={'https://www.youtube.com/watch?v=MnBNPA45NW8'} />
            </Contenido>
        </BannerDiv>
    )
};

export default Banner;