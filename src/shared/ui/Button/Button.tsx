import { ButtonHTMLAttributes, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    PRIMARY = 'primary',
    BLUE = 'blue',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    theme?: ThemeButton;
    className?: string;
}

export const Button = ({ className, children, theme, ...props }: ButtonProps) => (
    <button className={classNames(s.Button, [className, s[theme]], {})} {...props}>
        {children}
    </button>
);
