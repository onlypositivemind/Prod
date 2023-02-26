import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { SecondaryBgColorDecorator } from 'shared/config/storybook/SecondaryBgColorDecorator';
import { LangSwitcher } from './LangSwitcher';

export default {
    title: 'widget/LangSwitcher',
    component: LangSwitcher,
    argTypes: { backgroundColor: { control: 'color' } },
} as ComponentMeta<typeof LangSwitcher>;

const Template: ComponentStory<typeof LangSwitcher> = (args) => <LangSwitcher {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [SecondaryBgColorDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [SecondaryBgColorDecorator(Theme.DARK)];
