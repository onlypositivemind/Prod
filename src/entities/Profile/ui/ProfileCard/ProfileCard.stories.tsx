import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import AvatarImg from 'shared/assets/tests/storybook.png';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: { backgroundColor: { control: 'color' } },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        firstname: 'Evgenii',
        lastname: 'TSovich',
        age: 23,
        currency: Currency.EUR,
        country: Country.Russia,
        city: 'Moscow',
        username: 'admin',
        avatar: AvatarImg,
    },
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};

export const Error = Template.bind({});
Error.args = {
    error: 'error',
};
