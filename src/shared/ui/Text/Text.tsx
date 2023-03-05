import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center'
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
}

export const Text = memo(({ className, title, text, theme = TextTheme.PRIMARY, align = TextAlign.LEFT }: TextProps) => (
    <div className={classNames(
        '',
        [className, s[theme], s[align]],
        {},
    )}
    >
        {title && <h2 className={s.title}>{title}</h2>}
        {text && <p className={s.text}>{text}</p>}
    </div>
));
