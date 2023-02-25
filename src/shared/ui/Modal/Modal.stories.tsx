import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: { backgroundColor: { control: 'color' } },
    args: {
        children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Amet asperiores deleniti excepturi fugiat,
        ipsa laborum magnam magni maxime molestiae molestias numquam quas quidem,
        recusandae reiciendis sapiente
        sint tenetur ullam veniam!`,
        isOpen: true,
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
