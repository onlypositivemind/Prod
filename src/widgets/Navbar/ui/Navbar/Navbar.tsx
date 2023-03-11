import { memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { getNavbarItems } from '../../model/selectors/getNavbarItems/getNavbarItems';
import { NavbarItem } from '../NavbarItem/NavbarItem';
import s from './Navbar.module.scss';

interface NavbarProps {
    collapsed: boolean;
    className?: string;
}

export const Navbar = memo(({ className, collapsed }: NavbarProps) => {
    const navbarItemsList = useSelector(getNavbarItems);

    const itemsList = useMemo(() => navbarItemsList.map((item) => (
        <li key={item.path}>
            <NavbarItem collapsed={collapsed} {...item} />
        </li>
    )), [collapsed, navbarItemsList]);

    return (
        <nav className={classNames(s.navbar, [className], { [s.collapsed]: collapsed })}>
            <ul>
                {itemsList}
            </ul>
        </nav>
    );
});
