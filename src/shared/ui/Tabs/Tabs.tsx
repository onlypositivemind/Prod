import { ReactNode, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card, CardTheme } from 'shared/ui/Card/Card';
import s from './Tabs.module.scss';

export interface TabItem<T extends string> {
    value: T;
    content: ReactNode;
}

interface TabsProps<T extends string> {
    tabs: TabItem<T>[];
    currentValue: string;
    onTabClick: (val: TabItem<T>) => void;
    className?: string;
}

export const Tabs = <T extends string>({
    className,
    currentValue,
    onTabClick,
    tabs,
}: TabsProps<T>) => {
    const handleClick = useCallback((tab: TabItem<T>) => {
        onTabClick(tab);
    }, [onTabClick]);

    return (
        <div className={classNames(s.wrapper, [className], {})}>
            {tabs.map((tab) => (
                <Card
                    key={tab.value}
                    className={s.tab}
                    theme={tab.value === currentValue ? CardTheme.NORMAL : CardTheme.OUTLINE}
                    onClick={() => handleClick(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
};
