import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: { backgroundColor: { control: 'color' } },
    args: {
        label: 'Укажите значение',
        options: [
            { value: '1', content: 'Значение один' },
            { value: '2', content: 'Значение два' },
            { value: '3', content: 'Значение три' },
        ],
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
