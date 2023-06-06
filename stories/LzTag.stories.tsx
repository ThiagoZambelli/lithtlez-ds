import { ComponentMeta, ComponentStory } from "@storybook/react";
import { LzTag, LzTagProps } from "../src";
import React from 'react';

export default {
    title: 'Componentes/LzTag',
    component: LzTag
} as ComponentMeta<typeof LzTag>

const Template: ComponentStory<typeof LzTag> = (args) => <LzTag {...args} />

export const Normal = Template.bind({})
Normal.args = {
    children: 'Aqui uma tagNormal'
} as LzTagProps

export const Alterada = Template.bind({})
Alterada.args = {
    children: 'Tag alterada',
    bgColor: "#4069F6",
    color: 'black',
    fSize: 32,
} as LzTagProps