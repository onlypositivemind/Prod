import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { SecondaryBgColorDecorator } from 'shared/config/storybook/SecondaryBgColorDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { Navbar } from './Navbar';

export default {
    title: 'widget/Navbar',
    component: Navbar,
    argTypes: { backgroundColor: { control: 'color' } },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
    SecondaryBgColorDecorator(Theme.LIGHT),
    StoreDecorator({ user: { authData: {} } }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    SecondaryBgColorDecorator(Theme.DARK),
    StoreDecorator({ user: { authData: {} } }),
];

export const NoAuth = Template.bind({});
NoAuth.args = {};
NoAuth.decorators = [
    SecondaryBgColorDecorator(Theme.LIGHT),
    StoreDecorator({ user: {} }),
];
