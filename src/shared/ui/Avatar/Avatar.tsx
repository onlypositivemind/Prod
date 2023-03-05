import { CSSProperties, memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = memo(({ className, size, src, alt }: AvatarProps) => {
    const styles = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
    }), [size]);

    return (
        <div
            className={classNames(s.avatar, [className], {})}
            style={styles}
        >
            <img
                src={src}
                alt={alt}
            />
        </div>
    );
});
