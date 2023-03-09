import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Code } from './Code';

export default {
    title: 'shared/Code',
    component: Code,
    argTypes: { backgroundColor: { control: 'color' } },
    args: {
        text: 'export default {\n'
            + '    title: \'shared/Code\',\n'
            + '    component: Code,\n'
            + '    argTypes: { backgroundColor: { control: \'color\' } },\n'
            + '} as ComponentMeta<typeof Code>;\n'
            + '\n'
            + 'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n'
            + '\n'
            + 'export const Light = Template.bind({});',
    },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
