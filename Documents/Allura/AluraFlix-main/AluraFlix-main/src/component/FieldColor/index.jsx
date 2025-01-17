import React from "react"
import styled from "styled-components"

const FieldColorDiv = styled.div`
    display: flex;
    flex-direction: column;
    background: var(--color-gray-medium);
    border-radius: 0.25rem;
    font-family: var(--roboto);
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    height: 3.125;
    margin:2.19rem 0;
    width: 100%;
    padding: 0 0.25rem;
`
const FieldColorSel = styled.input`
    cursor: default;
    padding: 0;
    margin-bottom: 0.25rem;
    border: none;
    border-radius: 0.25rem;
    width: 100%;
    height: 1.375rem;
::-webkit-color-swatch {
    border: none;
    border-radius: 0.25rem;
    padding: 0;
    }
::-webkit-color-swatch-wrapper {
    border: none;
    border-radius: 0.25rem;
    padding: 0;
}
`
const FieldColor = (props) => {
    return (
        <FieldColorDiv>{props.inputPlaceholder}
            <FieldColorSel
                name={props.imputName}
                type='color'
                value={props.inputValue}
                onChange={props.inputOnChange}
                onBlur={props.inputOnBlur}
                ref={props.inputRef}
                required
            />
        </FieldColorDiv>
    );
};
export default FieldColor;