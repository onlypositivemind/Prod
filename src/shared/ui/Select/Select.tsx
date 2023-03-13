import { ChangeEvent, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}

interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    options?: SelectOption<T>[];
    value?: T;
    onChange?: (val: T) => void;
    readonly?: boolean;
}

export const Select = <T extends string>({
    className,
    label,
    options,
    value,
    onChange,
    readonly,
}: SelectProps<T>) => {
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
        onChange?.(e.target.value as T);
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
};
