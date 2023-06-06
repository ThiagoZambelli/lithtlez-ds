import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { LzNavBar } from '../src';

export default {
    title: 'Componentes/LzNavBar',
    component: LzNavBar
} as ComponentMeta<typeof LzNavBar>

const Template: ComponentStory<typeof LzNavBar> = () => <LzNavBar />

export const Primario = Template.bind({})