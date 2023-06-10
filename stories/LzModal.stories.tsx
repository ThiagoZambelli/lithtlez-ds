import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { LzModal, LzModalProps } from '../src';

export default {
    title: 'Componentes/LzModal',
    component: LzModal
} as ComponentMeta<typeof LzModal>

const Template: ComponentStory<typeof LzModal> = (args) => <LzModal {...args} />

export const ModalBase = Template.bind({})
ModalBase.args = {
    children: <div>Tudo que vai dentro</div>,
    titulo: "Modal de teste - Base",
    aberta: true,        
} as LzModalProps

export const ModalAlteracaoDeCores = Template.bind({})
ModalAlteracaoDeCores.args = {
    children: <div>Tudo que vai dentro</div>,
    titulo: "Modal de teste - Cores Alteradas",
    aberta: true,
    corBg:"#555555",
    corPrimaria:"#222222",
    corSecundaria:"#777777"       
} as LzModalProps

