import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { fetchData, catsUrl } from '../../servicios/api.js'
import TitleCategory from '../TitleCategory/index.jsx'
import Carrusel from '../Carrusel/index.jsx'

const Container = styled.div`
    background: var(--color-black-dark);
    padding-bottom: 2rem;
`
const Encabezado = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0 1rem;
`
const Descripcion = styled.div`
        color:var(--color-gray-light);
        padding: 2rem;
        align-self: center;
`
const Categorias = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData(catsUrl)
            .then((data) => setData(data))
            .then(console.log('%cCategorias cargadas con éxito', 'color: green; font-weight: bold; text-shadow: 0.5px 0.5px 0.5px gray;'))
            .catch((error) => console.error('Error al cargar datos:', error));
    }, []);

    return (
        <Container>
            {data.map((categoria) => (categoria.nombre &&
                <div key={categoria.id}>
                    <Encabezado>
                        <TitleCategory titleColor={categoria.color} titleCategoria={categoria.nombre} />
                        <Descripcion>{categoria.descripcion}</Descripcion>
                    </Encabezado>
                    <Carrusel categoriaCarrusel={categoria.nombre} borderColor={categoria.color} />
                </div>
            ))}
        </Container>
    );
};

export default Categorias;