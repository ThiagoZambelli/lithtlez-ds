import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { LzCard } from '../src';

export default {
    title: 'Componentes/LzCard',
    component: LzCard
} as ComponentMeta<typeof LzCard>

const Template: ComponentStory<typeof LzCard> = () => <LzCard />

export const Primario = Template.bind({})