import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation();
	
	return (
		<div className={classNames(s.navbar, [className], {})}>
			<nav>
				<ul>
					<li>
						<AppLink to="/" theme={AppLinkTheme.SECONDARY}>
							{t('Главная')}
						</AppLink>
					</li>
					<li>
						<AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
							{t('О нас')}
						</AppLink>
					</li>
				</ul>
			</nav>
		</div>
	);
};