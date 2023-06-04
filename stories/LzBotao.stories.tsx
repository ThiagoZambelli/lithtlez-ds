import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { LzBotao } from '../src';

export default{
    title:'Componentes/LzBotao',
    component: LzBotao
} as ComponentMeta<typeof LzBotao>

const Template: ComponentStory<typeof LzBotao> = () => <LzBotao />

export const Primario = Template.bind({})