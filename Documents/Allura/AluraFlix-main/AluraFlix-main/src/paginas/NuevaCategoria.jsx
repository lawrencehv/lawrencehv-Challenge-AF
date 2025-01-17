import React, { useState } from "react"
import styled from "styled-components"
import Table from "../component/Table"
import Form from "../component/Form"

const NuevaCategoriaDiv = styled.div`
    /* height: 106.0625rem; */
    background: var(--color-black-dark);
    color: white;
    display: flex;
    flex-direction: column;
    padding: 0 2.5rem;
`
const NuevaCategoria = () => {
    const [cat, setCat] = useState([]);

    const editarCategoria = (id) => {
        setCat(id);
    };

    return (
        <NuevaCategoriaDiv>
            <Form cargarCategoria={cat} />
            <Table editarCategoria={editarCategoria} />
        </NuevaCategoriaDiv>)
};

export default NuevaCategoria;