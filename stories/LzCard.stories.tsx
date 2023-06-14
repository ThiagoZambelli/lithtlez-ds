import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { LzCard, LzCardProps } from '../src';

export default {
    title: 'Componentes/LzCard',
    component: LzCard
} as ComponentMeta<typeof LzCard>

const Template: ComponentStory<typeof LzCard> = (args) => <LzCard {...args}/>

export const Normal = Template.bind({})
Normal.args = {
    children: 'Aqui um card Comum'
} as LzCardProps

export const BgAlterado = Template.bind({})
BgAlterado.args = {
    children: 'Aqui um card BgAlterado',
    bgColor: '#40F6C0',
    className:'opacity: .2;'
} as LzCardProps