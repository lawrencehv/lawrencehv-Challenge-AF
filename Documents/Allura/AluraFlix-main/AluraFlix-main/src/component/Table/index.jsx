import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchData, borrarData, catsUrl, videosUrl } from '../../servicios/api.js';

const TablaCSS = styled.table`
    border-collapse: collapse;
    border: 4px solid var(--color-primary-medium);
    width: 100%;
    padding: 1rem;
    margin-bottom: 3rem;
    text-align: left;
    color: var(--color-gray-light);
    font-family: var(--roboto);
    font-style: normal;
    line-height: normal;
    th {
        font-size: 2.1875rem;
        font-weight: 400;
        border: 3px solid var(--color-primary-medium);
        margin: 2px;
        padding: 2px;
    }
    td {
        font-size: 1.688rem ;
        color: #E5E5E5;
        font-weight: 300;
        border: 3px solid black;
        margin: 2px;
        padding: 2px;
    }
    a{
        color: #E5E5E5;
        text-decoration: none;
    }
`
const ThCSS = styled.th`
    width: 12%;
    text-align: center;
`
const TdCSS = styled.td`
    width: 12%;
    text-align: center;
`
const Table = ({ editarCategoria }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData(catsUrl)
            .then((data) => setData(data))
            .then(console.log('%cTabla cargada con éxito', 'color: green; font-weight: bold; text-shadow: 0.5px 0.5px 0.5px gray;'))
            .catch((error) => console.error('Error al cargar datos:', error));
    }, []);

    const handleRemove = async (id) => {
        try {
            await borrarData(`${catsUrl}/${id}`);
            console.log('%cCategoria eliminada con éxito', 'color: green; font-weight: bold; text-shadow: 0.5px 0.5px 0.5px gray;')
            const newData = data.filter((categoria) => categoria.id !== id);
            setData(newData);
        } catch (error) {
            console.error('Error al eliminar la categoría:', error);
        }
    };

    return (
        <TablaCSS>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <ThCSS>Editar</ThCSS>
                    <ThCSS>Remover</ThCSS>
                </tr>
            </thead>
            <tbody>
                {data.map((categoria) => (
                    <tr key={categoria.id}>
                        <td>{categoria.nombre}</td>
                        <td>{categoria.descripcion}</td>
                        <TdCSS><a href='#' onClick={() => editarCategoria(categoria.id)}>Editar</a></TdCSS>
                        <TdCSS><a href='#' onClick={() => handleRemove(categoria.id)} >Remover</a></TdCSS>
                    </tr>
                ))}
            </tbody>
        </TablaCSS>
    );
};

export default Table;

export const VideoTable = ({ editarVideo }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData(videosUrl)
            .then((data) => setData(data))
            .then(console.log('%cTabla cargada con éxito', 'color: green; font-weight: bold; text-shadow: 0.5px 0.5px 0.5px gray;'))
            .catch((error) => console.error('Error al cargar datos:', error));
    }, []);

    const handleRemove = async (id) => {
        try {
            await borrarData(`${videosUrl}/${id}`);
            console.log('%cVideo eliminado con éxito', 'color: green; font-weight: bold; text-shadow: 0.5px 0.5px 0.5px gray;')
            const newData = data.filter((video) => video.id !== id);
            setData(newData);
        } catch (error) {
            console.error('Error al eliminar el video', error);
        }
    };

    return (
        <TablaCSS>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Categoria</th>
                    <ThCSS>Editar</ThCSS>
                    <ThCSS>Remover</ThCSS>
                </tr>
            </thead>
            <tbody>
                {data.map((video) => (
                    <tr key={video.id}>
                        <td>{video.titulo}</td>
                        <td>{video.descripcion}</td>
                        <td>{video.categoria}</td>
                        <TdCSS><a href='#' onClick={() => editarVideo(video.id)}>Editar</a></TdCSS>
                        <TdCSS><a href='#' onClick={() => handleRemove(video.id)} >Remover</a></TdCSS>
                    </tr>
                ))}
            </tbody>
        </TablaCSS>
    );
};