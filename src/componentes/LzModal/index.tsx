import React, { ReactNode } from "react"
import styled from "styled-components";

export interface LzModalProps extends ICores {
    children?: ReactNode,
    titulo: string,
    aberta: boolean,
    aoFechar: () => void
}

interface ICores {
    corPrimaria?: string,
    corSecundaria?: string,
    corBg?: string
}

const JanelaModal = styled.div<ICores>`
    position: fixed;
    padding: 64px;
    background: ${props => props.corSecundaria};
    box-shadow: 4px 4px 24px -4px rgba(0, 0, 0, 0.15);
    border-radius: 24px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
const FundoModal = styled.div<ICores>`
    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    background: ${props => props.corBg};
`

const TituloModalWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: sans-serif;
    align-items: center;
`
const TituloModal = styled.h2<ICores>`
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
    color: ${props => props.corPrimaria};
    margin: 0;
`
const BotaoFecharModal = styled.button<ICores>`
    background: transparent;
    border: none;
    cursor: pointer;
    color: ${props => props.corPrimaria};
`

export const LzModal = ({
    children,
    aberta,
    aoFechar,
    titulo,
    corPrimaria = "#6F4A8E",
    corSecundaria = "#EBEBEB",
    corBg = "rgba(212,190,201, 0.85)"
}: LzModalProps) => {
    if (!aberta) {
        return <></>
    }
    return (
        <>
            <FundoModal onClick={aoFechar} corBg={corBg} corSecundaria={corSecundaria} corPrimaria={corPrimaria}/>
            <JanelaModal corBg={corBg} corSecundaria={corSecundaria} corPrimaria={corPrimaria}>
                <TituloModalWrapper>
                    <TituloModal corBg={corBg} corSecundaria={corSecundaria} corPrimaria={corPrimaria}>{titulo}</TituloModal>
                    <BotaoFecharModal corBg={corBg} corSecundaria={corSecundaria} corPrimaria={corPrimaria} onClick={aoFechar}>X</BotaoFecharModal>
                </TituloModalWrapper>
                {children}
            </JanelaModal>
        </>
    )
}