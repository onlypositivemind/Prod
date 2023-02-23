import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkSize } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import { RoutesPath } from 'shared/config/routeConfig/routeConfig';
import MainPageIcon from 'shared/assets/icons/main-page.svg';
import AboutPageIcon from 'shared/assets/icons/about-page.svg';
import s from './Navbar.module.scss';

interface NavbarProps {
    collapsed: boolean;
    className?: string;
}

export const Navbar = ({ className, collapsed }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <nav className={classNames(s.navbar, [className], { [s.collapsed]: collapsed })}>
            <ul>
                <li>
                    <AppLink to={RoutesPath.main} size={AppLinkSize.L} className={s.link}>
                        <MainPageIcon className={s.icon} />
                        <p className={s.title}>{t('Главная')}</p>
                    </AppLink>
                </li>
                <li>
                    <AppLink to={RoutesPath.about} size={AppLinkSize.L} className={s.link}>
                        <AboutPageIcon className={s.icon} />
                        <p className={s.title}>{t('О нас')}</p>
                    </AppLink>
                </li>
            </ul>
        </nav>
    );
};
