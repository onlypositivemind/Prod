import { memo, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './AppLink.module.scss';

export enum AppLinkTheme {
    WHITE = 'white',
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

export const AppLink = memo(({
    className,
    children,
    to,
    theme = AppLinkTheme.WHITE,
    size = AppLinkSize.M,
    ...props
}: AppLinkProps) => (
    <Link
        to={to}
        className={classNames(s.link, [className, s[theme], s[size]], {})}
        {...props}
    >
        {children}
    </Link>
));
