import React from 'react';
import styled from 'styled-components';

export interface LzInputProps extends ICores {
    label: string;
    type?: 'text' | 'email' | 'password' | 'date';
    onChange: (value: string) => void;
    value: string;
}

interface ICores {
    corPrimaria?: string,
    corSecundaria?: string,
    corBg?: string,
    possueValor?:boolean
}



const LabelEstilizada = styled.label<ICores>`
    ${props => props.possueValor 
        ? `transform: translateY(-50%) scale(0.8);
        background-color: ${props.corPrimaria};
        padding: 0 0.2em;
        color: ${props.corSecundaria};
        border-radius: 20%;
        padding: .2em 1em;`
        :`top: 0;
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
    font-size: 1rem;
    color: ${props => props.corPrimaria};
    transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
    &:focus {
        outline: ${props => props.corBg};
        border: 1.5px solid ${props => props.corSecundaria};
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



export const LzInput = ({ onChange, label = 'Falta o Label', value, type = "text", corPrimaria = "#6F4A8E", corSecundaria = "#EBEBEB", corBg = 'transparent' }: LzInputProps) => {


    const possueValor = value.trim() !== '';


    return (
        <DivEstilizada>
            <InputEstilizada
                value={value}
                type={type}
                onChange={event => onChange(event.target.value)}
                corPrimaria={corPrimaria}
                corSecundaria={corSecundaria}
                corBg={corBg}
            />
            <LabelEstilizada
                corPrimaria={corPrimaria}
                corSecundaria={corSecundaria}
                corBg={corBg}
                possueValor={possueValor}
            >{label}</LabelEstilizada>
        </DivEstilizada>
    )
}