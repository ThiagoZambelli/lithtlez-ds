import { ComponentMeta, ComponentStory } from "@storybook/react";
import { LzInput, LzInputProps } from "../src";
import React from 'react';

export default {
    title: 'Componentes/LzInput',
    component: LzInput
} as ComponentMeta<typeof LzInput>

const Template: ComponentStory<typeof LzInput> = (args) => <LzInput {...args} />

export const Normal = Template.bind({})

export const Modificado = Template.bind({})
Modificado.args = {
    corBg: '#f3ca66',
    corPrimaria:'black',
    corSecundaria:'#f134ab',
    type: 'email',
    label:'Email'
} as LzInputProps


