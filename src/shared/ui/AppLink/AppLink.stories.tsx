import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkSize, AppLinkTheme } from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: { backgroundColor: { control: 'color' } },
    args: { to: '/' },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args}>Link</AppLink>;

export const PrimaryLight_S = Template.bind({});
PrimaryLight_S.args = {
    theme: AppLinkTheme.PRIMARY,
    size: AppLinkSize.S,
};

export const PrimaryLight_M = Template.bind({});
PrimaryLight_M.args = {
    theme: AppLinkTheme.PRIMARY,
    size: AppLinkSize.M,
};

export const PrimaryLight_L = Template.bind({});
PrimaryLight_L.args = {
    theme: AppLinkTheme.PRIMARY,
    size: AppLinkSize.L,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = { theme: AppLinkTheme.PRIMARY };
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
