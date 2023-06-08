import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { LzGrupoDeOpcoes, LzGrupoDeOpcoesProps } from '../src';

export default {
    title: 'Componentes/LzGrupoDeOpcoes',
    component: LzGrupoDeOpcoes,
} as ComponentMeta<typeof LzGrupoDeOpcoes>

const Template: ComponentStory<typeof LzGrupoDeOpcoes> = (args) => <LzGrupoDeOpcoes {...args} />

export const Padrao = Template.bind({})
Padrao.args = {
    opcoes: [{
        id: 1,
        titulo: 'E-Book',
        valor: 'R$ 10,00',
        tipo: 'pdf.',
    },{
        id:2,
        titulo: 'Fisico',
        valor: 'R$ 15,00',
        tipo: 'pdf.',        
    }]
} as LzGrupoDeOpcoesProps

