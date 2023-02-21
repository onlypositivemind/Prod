import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import SunIcon from 'shared/assets/icons/sun.svg';
import MoonIcon from 'shared/assets/icons/moon.svg';
import s from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const [theme, toggleTheme] = useTheme();

    const ThemeIcon = theme === Theme.LIGHT ? SunIcon : MoonIcon;

    return (
        <Button onClick={toggleTheme} className={classNames(s.switcher, [className], {})} theme={ThemeButton.CLEAR}>
            <ThemeIcon className={s.icon} />
        </Button>
    );
};
