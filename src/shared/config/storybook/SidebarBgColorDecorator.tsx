import { Story } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

export const SidebarBgColorDecorator = (theme: Theme) => (StoryComponent: Story) => {
    return (
        <div
            style={{
                backgroundColor: theme === 'light' ? '#4f7faf' : '#2b3945',
            }}
        >
            <StoryComponent />
        </div>
    );
};
