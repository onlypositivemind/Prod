import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Header } from './Header';

export default {
    title: 'widget/Header',
    component: Header,
    argTypes: { backgroundColor: { control: 'color' } },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})];

export const AuthHeader = Template.bind({});
AuthHeader.args = {};
AuthHeader.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({ user: { authData: {} } })];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
