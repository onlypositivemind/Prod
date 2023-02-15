import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';

export const App = () => {
	const [theme, toggleTheme] = useTheme();
	
	return (
		<div className={classNames('app', [theme], {})}>
			<button onClick={toggleTheme}>Toggle theme</button>
			<Link to="/">main</Link>
			<Link to="/about">about</Link>
			<Suspense fallback={<div>loading...</div>}>
				<Routes>
					<Route path="/" element={<MainPageAsync />} />
					<Route path="/about" element={<AboutPageAsync />} />
				</Routes>
			</Suspense>
		
		</div>
	);
};