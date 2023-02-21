import { ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    children: ReactNode;
    theme?: AppLinkTheme;
    className?: string;
}

export const AppLink = ({ className, children, to, theme, ...props }: AppLinkProps) => (
    <Link to={to} className={classNames(s.link, [className, s[theme]], {})} {...props}>
        {children}
    </Link>
);
