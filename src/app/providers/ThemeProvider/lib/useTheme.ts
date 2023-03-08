import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

export const useTheme = (): [Theme, () => void] => {
    const { theme, setTheme } = useContext(ThemeContext);

    // For 3 or more themes
    // const toggleTheme = () => {
    //     let newTheme: Theme;
    //
    //     switch (theme) {
    //     case Theme.DARK: {
    //         newTheme = Theme.LIGHT;
    //         break;
    //     }
    //
    //     case Theme.LIGHT: {
    //         newTheme = Theme.ORANGE;
    //         break;
    //     }
    //
    //     case Theme.ORANGE: {
    //         newTheme = Theme.DARK;
    //         break;
    //     }
    //
    //     default: {
    //         newTheme = Theme.LIGHT;
    //     }
    //     }
    //
    //     setTheme?.(newTheme);
    //     localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    // };

    const toggleTheme = () => {
        const t = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        setTheme?.(t);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, t);
    };

    return [theme || Theme.LIGHT, toggleTheme];
};
