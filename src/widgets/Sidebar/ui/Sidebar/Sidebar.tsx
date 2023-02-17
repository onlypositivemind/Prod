import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import BurgerIcon from 'shared/assets/icons/burger.svg';
import s from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <aside className={classNames(s.sidebar, [className], { [s.collapsed]: collapsed })}>
            <Button onClick={() => setCollapsed(!collapsed)}>
                <BurgerIcon className={s.icon} />
            </Button>
            <div className={s.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </aside>
    );
};
