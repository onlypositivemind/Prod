import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

export const useTheme = (): [Theme, () => void] => {
	const { theme, setTheme } = useContext(ThemeContext);
	
	const toggleTheme = () => {
		const t = theme === 'light' ? Theme.DARK : Theme.LIGHT;
		setTheme(t);
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, t);
	};
	
	return [theme, toggleTheme];
};