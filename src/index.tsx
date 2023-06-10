import React, { FC, HTMLAttributes, ReactChild } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactChild;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */
export const Thing: FC<Props> = ({ children }) => {
  return <div>{children || `the snozzberries taste like snozzberries`}</div>;
};

export * from './componentes/LzBotao';
export * from './componentes/LzCard';
export * from './componentes/LzNavbar';
export * from './componentes/LzTag';
export * from './componentes/LzGrupoDeOpcoes';
export * from './componentes/LzInput';
export * from './componentes/LzModal';
