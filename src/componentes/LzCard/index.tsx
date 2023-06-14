import React, { ReactNode } from 'react';
import styled from 'styled-components';

export interface LzCardProps {
    children: ReactNode,
    bgColor?: string,
    className?: string
}

const CardEstilizado = styled.section<LzCardProps>`
    padding: 48px;
    background: ${(props: LzCardProps) => props.bgColor
        ? props.bgColor : '#FFFFFF'};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    ${props => props.className ? props.className : ''} 
`

export const LzCard = ({ children, bgColor, className }: LzCardProps) => {
    return (
        <CardEstilizado className={className} bgColor={bgColor}>
            {children}
        </CardEstilizado>
    )
}