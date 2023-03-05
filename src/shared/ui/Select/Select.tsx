import { ChangeEvent, memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './Select.module.scss';

export interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (val: string) => void;
    readonly?: boolean;
}

export const Select = memo(({
    className, label, options, value, onChange, readonly,
}: SelectProps) => {
    const optionsList = useMemo(() => options?.map((opt) => (
        <option
            className={s.option}
            key={opt.value}
            value={opt.value}
        >
            {opt.content}
        </option>
    )), [options]);

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(s.wrapper, [className], {})}>
            {label && (
                <span className={s.label}>
                    {`${label} >`}
                </span>
            )}
            <select
                className={s.select}
                value={value}
                onChange={handleChange}
                disabled={readonly}
            >
                {optionsList}
            </select>
        </div>
    );
});
