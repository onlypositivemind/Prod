import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { CommentsList } from './CommentsList';

export default {
    title: 'entities/Comment/CommentsList',
    component: CommentsList,
    argTypes: { backgroundColor: { control: 'color' } },
    args: {
        comments: [
            { id: '1', text: 'Comment 1', user: { id: '1', username: 'Username1' } },
            { id: '2', text: 'Comment 2', user: { id: '2', username: 'Username2' } },
            { id: '3', text: 'Comment 3', user: { id: '1', username: 'Username1' } },
        ],
    },
} as ComponentMeta<typeof CommentsList>;

const Template: ComponentStory<typeof CommentsList> = (args) => <CommentsList {...args} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Empty = Template.bind({});
Empty.args = {
    comments: [],
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};

export const LoadingDark = Template.bind({});
LoadingDark.args = {
    isLoading: true,
};
LoadingDark.decorators = [ThemeDecorator(Theme.DARK)];
