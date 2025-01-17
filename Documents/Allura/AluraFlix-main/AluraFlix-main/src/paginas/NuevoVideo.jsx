import React, { useState } from "react"
import styled from "styled-components"
import { NewForm } from "../component/Form"
import { VideoTable } from "../component/Table"

const NuevoVideoDiv = styled.div`
    /* height: 94.125rem; */
    background: var(--color-black-dark);
    color: white;
    display: flex;
    flex-direction: column;
    padding: 0 2.5rem;
`
const NuevoVideo = () => {
    const [vid, setVid] = useState([]);

    const editarVideo = (id) => {
        setVid(id);
    };

    return (
        <NuevoVideoDiv>
            <NewForm cargarVideo={vid} />
            <VideoTable editarVideo={editarVideo} />
        </NuevoVideoDiv>
    )
}

export default NuevoVideo