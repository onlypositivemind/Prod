import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './Icon.module.scss';

export enum IconStyle {
    DEFAULT = 'default',
    SUCCESS = 'success',
    ERROR = 'error',
    BLUE = 'blue',
}

interface IconProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    width: number;
    height: number;
    style?: IconStyle;
}

export const Icon = memo(({ className, Svg, height, width, style = IconStyle.DEFAULT }: IconProps) => {
    const styles = {
        width,
        height,
    };

    return (
        <div
            className={classNames(s.iconWrapper, [className, s[style]], {})}
            style={styles}
        >
            <Svg />
        </div>
    );
});
