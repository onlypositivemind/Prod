import { ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
}

export enum AppLinkSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

interface AppLinkProps extends LinkProps {
    children: ReactNode;
    className?: string;
    theme?: AppLinkTheme;
    size?: AppLinkSize;
}

export const AppLink = ({ className, children, to, theme, size = AppLinkSize.M, ...props }: AppLinkProps) => (
    <Link
        to={to}
        className={classNames(s.link, [className, s[theme], s[size]], {})}
        {...props}
    >
        {children}
    </Link>
);
