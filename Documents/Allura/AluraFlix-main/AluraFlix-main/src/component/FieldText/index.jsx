import React from "react"
import styled from "styled-components"

const FieldTextDiv = styled.input`
    height: 2rem;
    margin:2.19rem 0;
    width: 100%;
    align-self: center;
    background: var(--color-gray-medium);
    color: var(--color-gray-dark);
    font-family: var(--roboto);
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    border: 0;
    border-radius: 0.25rem;
    outline: none;
    :focus{
        border-bottom: 0.25rem inset #2A7AE4;
    }
    ::placeholder{
        color: var(--color-gray-light);
        font-family: var(--roboto);
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
    }
`
const FieldText = (props) => {
    return (
        <FieldTextDiv
            name={props.imputName}
            placeholder={props.inputPlaceholder}
            type='text'
            value={props.inputValue}
            onChange={props.inputOnChange}
            onBlur={props.inputOnBlur}
            ref={props.inputRef}
            style={props.inputStyle}
            required
        />
    );
};
export default FieldText