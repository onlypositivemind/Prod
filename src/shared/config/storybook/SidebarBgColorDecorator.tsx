import { Story } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

export const SidebarBgColorDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <div style={{ backgroundColor: theme === Theme.LIGHT ? '#4f7faf' : '#2b3945' }}>
        <StoryComponent />
    </div>
);
