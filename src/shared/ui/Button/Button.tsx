import { ButtonHTMLAttributes, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    PRIMARY = 'primary',
    BLUE = 'blue',
}

export enum ButtonSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    theme?: ButtonTheme;
    size?: ButtonSize;
    disabled?: boolean;
}

export const Button = ({ className, children, theme, size = ButtonSize.M, disabled, ...props }: ButtonProps) => (
    <button
        className={classNames(
            s.Button,
            [className, s[theme], s[size]],
            { [s.disabled]: disabled },
        )}
        disabled={disabled}
        {...props}
    >
        {children}
    </button>
);
