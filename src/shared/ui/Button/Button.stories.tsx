import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        children: 'Button',
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Clear_S = Template.bind({});
Clear_S.args = {
    theme: ButtonTheme.CLEAR,
    size: ButtonSize.S,
};

export const Clear_M = Template.bind({});
Clear_M.args = {
    theme: ButtonTheme.CLEAR,
    size: ButtonSize.M,
};

export const Clear_L = Template.bind({});
Clear_L.args = {
    theme: ButtonTheme.CLEAR,
    size: ButtonSize.L,
};

export const PrimaryLight_S = Template.bind({});
PrimaryLight_S.args = {
    theme: ButtonTheme.PRIMARY,
    size: ButtonSize.S,
};

export const PrimaryLight_M = Template.bind({});
PrimaryLight_M.args = {
    theme: ButtonTheme.PRIMARY,
    size: ButtonSize.M,
};

export const PrimaryLight_L = Template.bind({});
PrimaryLight_L.args = {
    theme: ButtonTheme.PRIMARY,
    size: ButtonSize.L,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    theme: ButtonTheme.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BlueLight_S = Template.bind({});
BlueLight_S.args = {
    theme: ButtonTheme.BLUE,
    size: ButtonSize.S,
};

export const BlueLight_M = Template.bind({});
BlueLight_M.args = {
    theme: ButtonTheme.BLUE,
    size: ButtonSize.M,
};

export const BlueLight_L = Template.bind({});
BlueLight_L.args = {
    theme: ButtonTheme.BLUE,
    size: ButtonSize.L,
};

export const BlueDark = Template.bind({});
BlueDark.args = {
    theme: ButtonTheme.BLUE,
};
BlueDark.decorators = [ThemeDecorator(Theme.DARK)];
