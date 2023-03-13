import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Tabs } from './Tabs';

export default {
    title: 'shared/Tabs',
    component: Tabs,
    argTypes: { backgroundColor: { control: 'color' } },
    args: {
        tabs: [
            { value: 'Tab 1', content: 'Tab 1' },
            { value: 'Tab 2', content: 'Tab 2' },
            { value: 'Tab 3', content: 'Tab 3' },
        ],
        currentValue: 'Tab 2',
        onTabClick: action('onTabClick'),
    },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
