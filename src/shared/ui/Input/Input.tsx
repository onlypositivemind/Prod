import { ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    value?: string;
    onChange?: (value: string) => void;
    autoFocus?: boolean;
    className?: string;
}

export const Input = memo(({
    className,
    type = 'text',
    value,
    onChange,
    placeholder,
    autoFocus,
    ...props
}: InputProps) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        onChange?.(value);
        setCaretPosition(value.length);
    };

    const handleSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    };

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true);
            inputRef.current?.focus();
        }
    }, [autoFocus]);

    return (
        <div className={classNames(s.inputWrapper, [className], {})}>
            {placeholder && (
                <p>
                    {`${placeholder} >`}
                </p>
            )}
            <div className={s.inputBlock}>
                <input
                    ref={inputRef}
                    className={s.input}
                    type={type}
                    value={value}
                    onChange={handleChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onSelect={handleSelect}
                    {...props}
                />
                {isFocused && <span className={s.caret} style={{ left: caretPosition * 8.2 }} />}
            </div>
        </div>
    );
});
