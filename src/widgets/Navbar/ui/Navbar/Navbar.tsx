import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { NavbarItemsList } from '../../model/items';
import { NavbarItem } from '../NavbarItem/NavbarItem';
import s from './Navbar.module.scss';

interface NavbarProps {
    collapsed: boolean;
    className?: string;
}

export const Navbar = memo(({ className, collapsed }: NavbarProps) => (
    <nav className={classNames(s.navbar, [className], { [s.collapsed]: collapsed })}>
        <ul>
            {NavbarItemsList.map((item) => (
                <li key={item.path}>
                    <NavbarItem collapsed={collapsed} {...item} />
                </li>
            ))}
        </ul>
    </nav>
));
