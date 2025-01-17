import React from "react"
import styled from "styled-components"

const FieldTextareaDiv = styled.textarea`
    width: 100%;
    height: 11.6875rem;
    margin:2.19rem 0;
    border-radius: 0.25rem;
    background: var(--color-gray-medium);
    color: var(----color-gray-dark);
    align-self: center;
    font-family: var(--roboto);
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    resize: none;
    outline: none;
    :focus{
        border-bottom: 0.25rem inset #2A7AE4;
    }
    ::placeholder{
        color: var(--color-gray-light);
        font-family: var(--roboto);
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
    }
`
const FieldTextarea = (props) => {
    return <FieldTextareaDiv
        name={props.imputName}
        placeholder={props.inputPlaceholder}
        value={props.inputValue}
        onChange={props.inputOnChange}
        onBlur={props.inputOnBlur}
        ref={props.inputRef}
        style={props.inputStyle}
        required
    />
}

export default FieldTextarea