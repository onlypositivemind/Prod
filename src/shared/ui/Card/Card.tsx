import { HTMLAttributes, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
}

export const Card = ({ className, children, ...props }: CardProps) => (
    <div
        className={classNames(s.cardWrapper, [className], {})}
        {...props}
    >
        {children}
    </div>
);
