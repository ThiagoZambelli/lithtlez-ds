import React from 'react';
import styled from 'styled-components';

export interface LzInputProps extends ICores {
    label: string;
    type?: 'text' | 'email' | 'password' | 'date'| 'number' |'password';
    onChange: (value: string) => void;
    value: string;
    required?: boolean
}

interface ICores {
    corPrimaria?: string,
    corSecundaria?: string,
    corBg?: string,
    fontSize?: number | null,
    possueValor?:boolean
}



const LabelEstilizada = styled.label<ICores>`
    ${props => props.possueValor 
        
        ? `
        top: 0;
        position: absolute;
        left: 16px;
        transform: translateY(-50%) scale(0.8);
        background-color: ${props.corPrimaria};
        padding: 0 0.2em;
        color: ${props.corSecundaria};
        border-radius: 20%;
        padding: .2em 1em;`
        
        :`
        font-size: ${props.fontSize ? `${props.fontSize}px` : '1rem' };
        top: 0;
        position: absolute;
        left: 16px;
        color: ${props.corPrimaria};
        pointer-events: none;
        transform: translateY(1rem);
        transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);`}
    
`
const InputEstilizada = styled.input<ICores>`
    width: 100%;
    border: solid 2px ${props => props.corPrimaria};
    border-radius: 1rem;
    background-color: ${props => props.corBg};
    padding: 1rem;
    font-size: ${props => props.fontSize ? `${props.fontSize}px` : '1rem' };
    color: ${props => props.corPrimaria};
    transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
    &:focus {
        outline: ${props => props.corBg};
        border: 2px solid ${props => props.corSecundaria};
    }
    &:focus ~ label {
        transform: translateY(-50%) scale(0.8);
        background-color: ${props => props.corPrimaria};
        padding: 0 0.2em;
        color: ${props => props.corSecundaria};
        border-radius: 20%;
        padding: .2em 1em;
    }
    
}
`
const DivEstilizada = styled.div`
    position: relative; 
`



export const LzInput = ({required, fontSize, onChange, label = 'Falta o Label', value, type = "text", corPrimaria = "#6F4A8E", corSecundaria = "#EBEBEB", corBg = 'transparent' }: LzInputProps) => {


    const possueValor = value.trim() !== '';


    return (
        <DivEstilizada>
            <InputEstilizada
                required={required}
                fontSize={fontSize}
                value={value}
                type={type}
                onChange={event => onChange(event.target.value)}
                corPrimaria={corPrimaria}
                corSecundaria={corSecundaria}
                corBg={corBg}
            />
            <LabelEstilizada
                fontSize={fontSize}
                corPrimaria={corPrimaria}
                corSecundaria={corSecundaria}
                corBg={corBg}
                possueValor={possueValor}
            >{label}</LabelEstilizada>
        </DivEstilizada>
    )
}