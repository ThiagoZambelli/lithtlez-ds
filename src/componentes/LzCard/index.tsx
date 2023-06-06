import React, { ReactNode } from 'react';
import styled from 'styled-components';

export interface LzCardProps {
    children: ReactNode,
    bgColor?: string,
}

const CardEstilizado = styled.section<LzCardProps>`
    padding: 48px;
    background: ${(props: LzCardProps) => props.bgColor
    ? props.bgColor : '#FFFFFF'};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;   
`

export const LzCard = ({children, bgColor} : LzCardProps) => {
    return (
        <CardEstilizado bgColor={bgColor}>
            {children}
        </CardEstilizado>
    )
}