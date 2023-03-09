import { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Icon, IconStyle } from 'shared/ui/Icon/Icon';
import CopyIcon from 'shared/assets/icons/copy.svg';
import DoneIcon from 'shared/assets/icons/done.svg';
import s from './Code.module.scss';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo(({ className, text }: CodeProps) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = useCallback(() => {
        navigator.clipboard.writeText(text).then(() => {
            if (!isCopied) {
                setIsCopied(true);
                setTimeout(() => { setIsCopied(false); }, 600);
            }
        });
    }, [isCopied, text]);

    return (
        <pre className={classNames(s.code, [className], {})}>
            <Button className={s.copyBtn} onClick={handleCopy}>
                <Icon Svg={CopyIcon} width={25} height={25} />
            </Button>
            <code>
                {text}
            </code>
            <Icon
                Svg={DoneIcon}
                className={classNames(s.info, [], { [s.copied]: isCopied })}
                width={20}
                height={20}
                style={IconStyle.SUCCESS}
            />
        </pre>
    );
});
