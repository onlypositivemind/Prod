import { CSSProperties, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    width?: string | number;
    height?: string | number;
    border?: string | number;
}

export const Skeleton = memo(({ className, height, width, border }: SkeletonProps) => {
    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };

    return (
        <div
            className={classNames(s.skeleton, [className], {})}
            style={styles}
        />
    );
});
