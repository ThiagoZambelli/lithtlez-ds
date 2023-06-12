import React from 'react';
import styled, { css } from 'styled-components';

export interface LzBotaoProps {
    texto?: string,
    forma?: 'default' | 'gota',
    tipo?: 'principal' | 'secundario',
    corPrimaria?: string,
    corSecundaria?: string,
    corHover?: string,
    onClick?: () => void,
    fSize?: number,
}

const BotaoEstilizado = styled.button<LzBotaoProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 1em;
    row-gap: 1em;
    font-size: ${props => props.fSize !== 0 ? `${props.fSize}px` : '1.3rem'};
    padding: .5em 1em;
    cursor: pointer;
    
    background-color: ${(props: LzBotaoProps) => props.tipo === 'principal'
        ? (props.corPrimaria ? props.corPrimaria : '#6F4A8E')
        : (props.corSecundaria ? props.corSecundaria : '#EBEBEB')};

    color: ${(props: LzBotaoProps) => props.tipo === 'principal'
        ? (props.corSecundaria ? props.corSecundaria : '#EBEBEB')
        : (props.corPrimaria ? props.corPrimaria : '#6F4A8E')};
    
    border: ${(props: LzBotaoProps) => props.tipo === 'principal'
        ? '2px solid transparent'
        : `2px solid ${props.corPrimaria ? props.corPrimaria : '#6F4A8E'}`};

    border-radius: ${(props: LzBotaoProps) => props.forma === 'default'
        ? '1em'
        : '1em 0 1em 0'};

    box-shadow: ${(props: LzBotaoProps) => props.forma === 'default'
        ? '0px 0px 3px black'
        : '1px 1px black'};

    ${(props: LzBotaoProps) => props.tipo === 'principal'
        ? css`
            &:hover{
                background-color: ${props.corHover
                ? props.corHover
                : '#221F3B'};
            }
        `
        : css`
            &:hover{
                border: 2px solid ${props.corHover
                    ? props.corHover
                    : '#221F3B'};
                color: ${props.corHover
                    ? props.corHover
                    : '#221F3B'};
            }
    `
    }
`

export const LzBotao = ({ fSize=0, corPrimaria, corSecundaria, texto, onClick, tipo = 'principal', forma = 'default', corHover }: LzBotaoProps) => {
    return (
        <BotaoEstilizado fSize={fSize} onClick={onClick} tipo={tipo} forma={forma} corPrimaria={corPrimaria} corSecundaria={corSecundaria} corHover={corHover}>
            {texto}
        </BotaoEstilizado>
    )
}