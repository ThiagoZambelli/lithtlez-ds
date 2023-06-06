import React, { ReactNode } from 'react';
import styled from 'styled-components';

export interface LzTagProps {
    children: ReactNode,
    bgColor?: string,
    color?: string,
    fSize?: number,
    onClick?: () => void
}

const TagEstilizado = styled.div<LzTagProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 1em;
    row-gap: 1em;
    max-width: max-content;
    border-radius: 1em;
    cursor: pointer;
    font-size: ${(props : LzTagProps) => props.fSize ? `${props.fSize}px` : "1rem"};
    padding: 1em;
    background-color: ${(props : LzTagProps) => props.bgColor ? props.bgColor : "#6F4A8E"};
    color: ${(props : LzTagProps) => props.color ? props.color : "#EBEBEB"} ;
      
`

export const LzTag = ({onClick, children, bgColor, color, fSize} : LzTagProps) => {
    return (
        <TagEstilizado onClick={onClick} bgColor={bgColor} color={color} fSize={fSize}>
            {children}
        </TagEstilizado>
    )
}