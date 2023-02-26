import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import LoginForm from './LoginForm';
import { LoginModal } from '../LoginModal/LoginModal';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: { backgroundColor: { control: 'color' } },
    decorators: [StoreDecorator({ loginForm: { username: 'Username', password: 'Password' } })],
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
    // @ts-ignore
    <LoginModal isOpen>
        <LoginForm {...args} />
    </LoginModal>
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithError = Template.bind({});
WithError.decorators = [StoreDecorator({
    loginForm: {
        username: 'Username',
        password: 'Password',
        error: 'Неверное имя или пароль',
    },
})];

export const Loading = Template.bind({});
Loading.decorators = [StoreDecorator({ loginForm: { username: 'Username', password: 'Password', isLoading: true } })];
