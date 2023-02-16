import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	
	return (
		<div className={classNames(s.navbar, [className], {})}>
			<nav>
				<ul>
					<li>
						<AppLink to="/" theme={AppLinkTheme.SECONDARY}>Main</AppLink>
					</li>
					<li>
						<AppLink to="/about" theme={AppLinkTheme.SECONDARY}>About</AppLink>
					</li>
				</ul>
			</nav>
		</div>
	);
};