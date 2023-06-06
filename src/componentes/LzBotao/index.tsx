import React from 'react';
import styled, { css } from 'styled-components';
export interface LzBotaoProps {
    texto?: string,
    forma?: 'default' | 'gota'
    tipo?: 'principal' | 'secundario'
    onClick?: () => void
}

const BotaoEstilizado = styled.button<LzBotaoProps>`
    background-color: ${(props: LzBotaoProps) => props.tipo === 'principal' ? '#6F4A8E' : '#EBEBEB'}; 
    color: ${(props: LzBotaoProps) => props.tipo === 'principal' ? '#EBEBEB' : '#6F4A8E'};
    font-size: 1.3rem;
    padding: .5em 1em;
    border: ${(props: LzBotaoProps) => props.tipo === 'principal' ? '2px solid transparent' : '2px solid #6F4A8E'}; 
    border-radius: ${(props: LzBotaoProps) => props.forma === 'default' ? '1em' : '1em 0 1em 0'};
    cursor: pointer;
    box-shadow: ${(props: LzBotaoProps) => props.forma === 'default' ? '0px 0px 3px black' : '1px 1px black'}; 
    ${(props: LzBotaoProps) => props.tipo === 'principal'
        ? css`
            &:hover{
                background-color: #221F3B;
            }
        `
        : css`
            &:hover{
                border: 2px solid #221F3B;
                color: #221F3B;
            }
    `
    }
`

export const LzBotao = ({ texto, onClick, tipo = 'principal', forma = 'default' }: LzBotaoProps) => {
    return (
        <BotaoEstilizado onClick={onClick} tipo={tipo} forma={forma}>
            {texto}
        </BotaoEstilizado>
    )
}