import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './Sidebar.module.scss';

interface SidebarProps {
	className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false);
	
	return (
		<aside className={classNames(s.sidebar, [className], { [s.collapsed]: collapsed })}>
			<button onClick={() => setCollapsed(!collapsed)}>click</button>
			<div className={s.switchers}>
				<ThemeSwitcher />
				<p>ru/en</p>
			</div>
		</aside>
	);
};