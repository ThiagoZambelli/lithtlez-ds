import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { LzBotao, LzBotaoProps } from '../src';

export default {
    title: 'Componentes/LzBotao',
    component: LzBotao
} as ComponentMeta<typeof LzBotao>

const Template: ComponentStory<typeof LzBotao> = (args) => <LzBotao {...args} />

export const Principal = Template.bind({})
Principal.args = {
    texto: 'LzBotao Principal',
    tipo: 'principal',
    forma: 'default'
} as LzBotaoProps

export const Secundario = Template.bind({})
Secundario.args = {
    texto: 'LzBotao Secundario',
    tipo: 'secundario',
    forma: 'gota'
} as LzBotaoProps

export const testeDeCor = Template.bind({})
testeDeCor.args = {
    texto: 'LzBotao testeDeCor',
    tipo: 'principal',
    forma: 'gota',
    corPrimaria: '#49C2EB',
    corSecundaria: '#40F6C0',
    corHover: '#4069F6',
} as LzBotaoProps