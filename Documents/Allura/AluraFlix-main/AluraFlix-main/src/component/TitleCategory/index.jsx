import React from "react";
import styled from "styled-components";

const Categoria = styled.div`
    display: flex;
    width: fit-content;
    height: 5.75rem;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    border-radius: 0.25rem;
    color: var(--color-gray-light);
    text-align: center;
    font-size: 3.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 2rem;
    margin-bottom: 1rem;
    padding: 0 0.5rem;
`
const TitleCategory = (props) => {
    return <Categoria style={{ backgroundColor: props.titleColor }}>{props.titleCategoria}</Categoria >
};

export default TitleCategory