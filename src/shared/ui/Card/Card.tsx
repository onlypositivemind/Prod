import { HTMLAttributes, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './Card.module.scss';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINE = 'outline',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
    theme?: CardTheme;
}

export const Card = ({
    className,
    children,
    theme = CardTheme.NORMAL,
    ...props
}: CardProps) => (
    <div
        className={classNames(s.cardWrapper, [className, s[theme]], {})}
        {...props}
    >
        {children}
    </div>
);
