import React, { useState } from 'react';
import styled from 'styled-components';

export interface LzOpcaoProps {
    quantidade?: number,
    titulo?: string,
    valor?: string,
    tipo?: string,
    corPrincipal?: string,
    corSecundaria?: string,
    selecionado?: boolean,
    id?: number,
}
export interface LzGrupoDeOpcoesProps {
    opcoes: LzOpcaoProps[],
    valorPadrao?: LzOpcaoProps | null,
    onChange?: (opcao: LzOpcaoProps) => void
}

const SectionEstilizada = styled.section<LzOpcaoProps>`
    width: 200px;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 1em;
    margin: 1em 0;
    cursor: pointer;
    transition: .5s;
    border: 2px solid ${props => props.selecionado ? props => props.corSecundaria : props => props.corPrincipal};
    color: ${props => props.selecionado ? props => props.corSecundaria : props => props.corPrincipal};
    background-color: ${props => props.selecionado ? props => props.corPrincipal : props => props.corSecundaria};
    
    header, footer{
        font-size: 12px
    }
    div{
        font-size: 18px
    }
`


export const LzGrupoDeOpcoes = ({ opcoes, onChange, valorPadrao }: LzGrupoDeOpcoesProps) => {
    const [selecionado, setSelecionado] = useState<LzOpcaoProps | null>(valorPadrao ?? null);
    const selecionar = (opcao: LzOpcaoProps): void => {
        if (selecionado !== null && opcao.id === selecionado.id) {
            setSelecionado({})
            if (onChange) {
                onChange({})
            }
        } else {
            setSelecionado(opcao)
            if (onChange) {
                onChange(opcao)
            }
        }
    }

    return (
        <>
            {opcoes.map(opcao => (
                <SectionEstilizada
                    onClick={() => selecionar(opcao)}
                    selecionado={selecionado?.id === opcao.id}
                    key={opcao.id}
                    corPrincipal={opcao.corPrincipal === '' ? opcao.corPrincipal : "#6F4A8E"}
                    corSecundaria={opcao.corSecundaria === '' ? opcao.corSecundaria : '#EBEBEB'}
                >
                    <header>
                        {opcao.titulo}
                    </header>
                    <div>
                        <strong>{opcao.valor}</strong>
                    </div>
                    <footer>
                        {opcao.tipo}
                    </footer>
                </SectionEstilizada>))}
        </>
    )
}