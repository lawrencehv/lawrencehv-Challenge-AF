import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { GuardarVideo, BorrarVideo, NuevaCategoria } from "../Boton/index.jsx"
import FieldText from "../FieldText/index.jsx"
import FieldTextarea from "../FieldTextarea/index.jsx"
import FieldColor from "../FieldColor/index.jsx"
import FieldSelect from '../FieldSelect/index.jsx'
import { fetchData, addData, addVid, editCat, editVid, catsUrl, videosUrl } from '../../servicios/api.js';
import { Link } from "react-router-dom";

const CatForm = styled.form`
`
const Encabezado = styled.h1`
        color: var(--color-gray-light);
        text-align: center;
        font-family: var(--roboto);
        font-size: 3.75rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        padding: 3rem 0;
`
const Menu = styled.div`
        display: flex;
        flex-direction: row;
        padding-bottom: 3rem;
`
const Form = ({ cargarCategoria }) => {

    const [data, setData] = useState([]);
    const [errorMessages, setErrorMessages] = useState({
        nombre: '',
        descripcion: '',
        color: '',
        seccode: '',
    });

    const inputRefs = {
        nombre: useRef(),
        descripcion: useRef(),
        color: useRef(),
        seccode: useRef(),
    };

    const [formulario, setFormulario] = useState({
        id: '',
        nombre: '',
        descripcion: '',
        color: '',
        seccode: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormulario({ ...formulario, [name]: value });
    };

    const handleBlur = (e) => {
        const fieldName = e.target.name;
        if (inputRefs[fieldName].current && inputRefs[fieldName].current.validity.valid) {
            setErrorMessages(prevState => ({ ...prevState, [fieldName]: '' }));
        } else {
            setErrorMessages(prevState => ({ ...prevState, [fieldName]: `El campo ${fieldName} no es válido` }));
        }
        //falta
    }

    const handleClear = (e) => {
        e.preventDefault()
        setData([]);
        setFormulario({
            id: '',
            nombre: '',
            descripcion: '',
            color: '',
            seccode: ''
        });
        console.log('%cFormulario limpiado con éxito', 'color:orange; font-weight: bold; text-shadow: 0.5px 0.5px 0.5px gray;')
    };

    const handleNewCat = (e) => {
        e.preventDefault()

        if (!inputRefs.nombre.current.value || !inputRefs.descripcion.current.value || !inputRefs.seccode.current.value) {
            console.log('%cFaltan campos por completar', 'color: red; font-weight: bold; text-shadow: 0.5px 0.5px 0.5px gray;')
        }
        else {
            addData(catsUrl, formulario);
            console.log('%cCategoria agregada con éxito', 'color: green; font-weight: bold; text-shadow: 0.5px 0.5px 0.5px gray;')
        }
        // OK
    };

    const handleEditCat = (e) => {
        e.preventDefault()
        editCat(catsUrl, formulario)
        // OK
    };

    const idContent = data.find(item => item.id === cargarCategoria);

    useEffect(() => {
        const datos = { ...idContent };
        fetchData(catsUrl)
            .then((data) => setData(data))
            .catch((error) => console.error('Error al cargar datos:', error))
        datos ? setFormulario(datos) : console.log('Error')
    }, [cargarCategoria]);

    return (
        <CatForm onSubmit={handleEditCat} >
            <Encabezado> {idContent ? 'Editar categoria' : 'Nueva categoria'} </Encabezado>
            <FieldText
                imputName="nombre"
                inputPlaceholder="Nombre"
                inputValue={formulario.nombre}
                inputOnChange={handleChange}
                inputOnBlur={handleBlur}
                inputRef={inputRefs.nombre}
                inputStyle={errorMessages.nombre ? { borderBottom: '0.25rem solid red' } : { borderBottom: '' }}
            />
            <p style={{ marginTop: '-32px', fontSize: '12px', color: 'red', }}>{errorMessages.nombre}</p>
            <FieldTextarea
                imputName="descripcion"
                inputPlaceholder="Descripción"
                inputValue={formulario.descripcion}
                inputOnChange={handleChange}
                inputOnBlur={handleBlur}
                inputRef={inputRefs.descripcion}
                inputStyle={errorMessages.descripcion ? { borderBottom: '0.25rem solid red' } : { borderBottom: '' }}
            />
            <p style={{ marginTop: '-32px', fontSize: '12px', color: 'red', }}>{errorMessages.descripcion}</p>
            <FieldColor
                imputName="color"
                inputPlaceholder="Color"
                inputValue={formulario.color}
                inputOnChange={handleChange}
                inputOnBlur={handleBlur}
                inputRef={inputRefs.color}
            />
            <p style={{ marginTop: '-24px', fontSize: '12px', color: 'red', }}>{errorMessages.color}</p>
            <FieldText
                imputName="seccode"
                inputPlaceholder="Código de seguridad"
                inputValue={formulario.seccode}
                inputOnChange={handleChange}
                inputOnBlur={handleBlur}
                inputRef={inputRefs.seccode}
                inputStyle={errorMessages.seccode ? { borderBottom: '0.25rem solid red' } : { borderBottom: '' }}
            />
            <p style={{ marginTop: '-32px', paddingBottom: '32px', fontSize: '12px', color: 'red', }}>{errorMessages.seccode}</p>
            <Menu>
                {idContent ? <GuardarVideo valor="Actualizar" type='submit' /> : <GuardarVideo valor="Guardar" buttonOnClick={handleNewCat} />}
                <BorrarVideo valor="Limpiar" buttonOnClick={handleClear} />
            </Menu>
        </CatForm >
    );
};
export const NewForm = ({ cargarVideo }) => {

    const [data, setData] = useState([]);
    const [cat, setCat] = useState([]);

    const [formulario, setFormulario] = useState({
        id: '',
        titulo: '',
        linkVideo: '',
        linkImagen: '',
        categoria: '',
        descripcion: '',
        seccode: ''
    });
    const [errorMessages, setErrorMessages] = useState({
        titulo: '',
        linkVideo: '',
        linkImagen: '',
        categoria: '',
        descripcion: '',
        seccode: ''
    });

    const inputRefs = {
        titulo: useRef(),
        linkVideo: useRef(),
        linkImagen: useRef(),
        categoria: useRef(),
        descripcion: useRef(),
        seccode: useRef(),
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormulario({ ...formulario, [name]: value });
    };

    const handleBlur = (e) => {
        const fieldName = e.target.name;
        if (inputRefs[fieldName].current && inputRefs[fieldName].current.validity.valid) {
            setErrorMessages(prevState => ({ ...prevState, [fieldName]: '' }));
        } else {
            setErrorMessages(prevState => ({ ...prevState, [fieldName]: `El campo ${fieldName} no es válido` }));
        }
        //falta
    }

    const handleClear = (e) => {
        e.preventDefault()
        setData([]);
        setFormulario({
            id: '',
            titulo: '',
            linkVideo: '',
            linkImagen: '',
            categoria: '',
            descripcion: '',
            seccode: ''
        });
        console.log('%cFormulario limpiado con éxito', 'color:orange; font-weight: bold; text-shadow: 0.5px 0.5px 0.5px gray;')
    };

    const handleNewVid = (e) => {
        e.preventDefault()
        if (!inputRefs.titulo.current.value || !inputRefs.linkVideo.current.value || !inputRefs.linkImagen.current.value || /* !inputRefs.categoria.current.value || */ !inputRefs.descripcion.current.value || !inputRefs.seccode.current.value) {
            console.log('%cFaltan campos por completar', 'color: red; font-weight: bold; text-shadow: 0.5px 0.5px 0.5px gray;')
        }
        else {
            addVid(videosUrl, formulario);
            console.log('%cVideo agregado con éxito', 'color: green; font-weight: bold; text-shadow: 0.5px 0.5px 0.5px gray;')
        }
        // OK
    };

    const handleEditVid = (e) => {
        e.preventDefault()
        editVid(videosUrl, formulario)
        console.log('%cVideo actualizados con éxito', 'color: green; font-weight: bold; text-shadow: 0.5px 0.5px 0.5px gray;')
        // OK
    };

    const idContent = data.find(item => item.id === cargarVideo);

    useEffect(() => {
        const datos = { ...idContent };
        fetchData(videosUrl)
            .then((data) => setData(data))
            .catch((error) => console.error('Error al cargar datos:', error))
        datos ? setFormulario(datos) : console.log('Error')
    }, [cargarVideo]);

    useEffect(() => {
        fetchData(catsUrl)
            .then((cat) => setCat(cat))
            .catch((error) => console.error('Error al cargar datos:', error))

    }, []);

    return (
        <CatForm onSubmit={handleNewVid} >
            <Encabezado> {idContent ? 'Editar video' : 'Nuevo video'} </Encabezado>
            <FieldText
                imputName="titulo"
                inputPlaceholder="Titulo"
                inputValue={formulario.titulo}
                inputOnChange={handleChange}
                inputOnBlur={handleBlur}
                inputRef={inputRefs.titulo}
                inputStyle={errorMessages.titulo ? { borderBottom: '0.25rem solid red' } : { borderBottom: '' }}
            />
            <p style={{ marginTop: '-32px', paddingBottom: '32px', fontSize: '12px', color: 'red', }}>{errorMessages.titulo}</p>
            <FieldText
                imputName="linkVideo"
                inputPlaceholder="Link Del Video"
                inputValue={formulario.linkVideo}
                inputOnChange={handleChange}
                inputOnBlur={handleBlur}
                inputRef={inputRefs.linkVideo}
                inputStyle={errorMessages.linkVideo ? { borderBottom: '0.25rem solid red' } : { borderBottom: '' }}
            />
            <p style={{ marginTop: '-32px', paddingBottom: '32px', fontSize: '12px', color: 'red', }}>{errorMessages.linkVideo}</p>
            <FieldText
                imputName="linkImagen"
                inputPlaceholder="Link Imagen Del Video"
                inputValue={formulario.linkImagen}
                inputOnChange={handleChange}
                inputOnBlur={handleBlur}
                inputRef={inputRefs.linkImagen}
                inputStyle={errorMessages.linkImagen ? { borderBottom: '0.25rem solid red' } : { borderBottom: '' }}
            />
            <p style={{ marginTop: '-32px', paddingBottom: '32px', fontSize: '12px', color: 'red', }}>{errorMessages.linkImagen}</p>
            <FieldSelect
                selectPlaceholder="Escoja una categoria"
                selectValue={formulario.categoria}
                selectName="categoria"
                selectOnChange={handleChange}
                selectOnBlur={handleBlur}
                selectRef={inputRefs.categoria}
                data={cat}
            />
            <FieldTextarea
                imputName="descripcion"
                inputPlaceholder="Descripción"
                inputValue={formulario.descripcion}
                inputOnChange={handleChange}
                inputOnBlur={handleBlur}
                inputRef={inputRefs.descripcion}
                inputStyle={errorMessages.descripcion ? { borderBottom: '0.25rem solid red' } : { borderBottom: '' }}
            />
            <p style={{ marginTop: '-32px', paddingBottom: '32px', fontSize: '12px', color: 'red', }}>{errorMessages.descripcion}</p>
            <FieldText
                imputName="seccode"
                inputPlaceholder="Código de seguridad"
                inputValue={formulario.seccode}
                inputOnChange={handleChange}
                inputOnBlur={handleBlur}
                inputRef={inputRefs.seccode}
                inputStyle={errorMessages.seccode ? { borderBottom: '0.25rem solid red' } : { borderBottom: '' }}
            />
            <p style={{ marginTop: '-32px', paddingBottom: '32px', fontSize: '12px', color: 'red', }}>{errorMessages.seccode}</p>
            <Menu>
                {idContent ? <GuardarVideo valor="Guardar" buttonOnClick={handleEditVid} /> : <GuardarVideo valor="Nuevo Video" type='submit' />}
                <BorrarVideo valor="Limpiar" buttonOnClick={handleClear} />
                <Link to="/nuevacategoria"><NuevaCategoria valor="Nueva categoría" /></Link>
            </Menu>
        </CatForm>
    );
};

export default Form;