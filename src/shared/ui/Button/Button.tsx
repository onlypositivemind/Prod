import { ButtonHTMLAttributes, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './Button.module.scss';

export enum ThemeButton {
	CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	theme?: ThemeButton;
	className?: string;
}

export const Button = ({ className, children, theme = ThemeButton.CLEAR, ...props }: ButtonProps) => {
	
	return (
		<button
			className={classNames(s.btn, [className, s[theme]], {})}
			{...props}
		>
			{children}
		</button>
	);
};