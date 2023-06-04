import React from  'react';
import styled from 'styled-components';

const BotaoEstilizado = styled.button`
    background-color: #6F4A8E;
    color: #EBEBEB;
    font-size: 1.3rem;
    padding: .5em 1em;
    border: 2px solid transparent;
    border-radius: 1em 0 1em 0;
    cursor: pointer;
    box-shadow: 1px 1px black;
    &:hover{
        background-color: #221F3B;        
    }
`

export const LzBotao = () => {
    return (
        <BotaoEstilizado>Clique Aqui</BotaoEstilizado>
    )
}