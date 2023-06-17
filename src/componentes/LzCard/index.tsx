import React, { ReactNode } from 'react';
import styled from 'styled-components';

export interface LzCardProps {
    children: ReactNode,
    bgColor?: string,
    className?: string,
    onClick?: () => void,
}

const CardEstilizado = styled.section<LzCardProps>`
    background: ${(props: LzCardProps) => props.bgColor
        ? props.bgColor : '#FFFFFF'};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    ${props => props.className ? props.className : ''}
`

export const LzCard = ({onClick, children, bgColor, className }: LzCardProps) => {
    return (
        <CardEstilizado onClick={onClick} className={className} bgColor={bgColor}>
            {children}
        </CardEstilizado>
    )
}