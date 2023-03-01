import { memo, useMemo, useState } from 'react';
import { Navbar } from 'widgets/Navbar';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import BurgerIcon from 'shared/assets/icons/burger.svg';
import s from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const collapsingButton = useMemo(
        () => (
            <Button
                data-testid='toggle-btn'
                theme={ButtonTheme.CLEAR}
                onClick={() => setCollapsed((prev) => !prev)}
            >
                <BurgerIcon className={s.icon} />
            </Button>
        ),

        [],
    );

    return (
        <aside
            data-testid='sidebar'
            className={classNames(s.sidebar, [className], { [s.collapsed]: collapsed })}
        >
            {collapsingButton}
            <Navbar collapsed={collapsed} />
            <div className={s.switchers}>
                <ThemeSwitcher className={s.switcher} />
                <LangSwitcher className={s.switcher} />
            </div>
        </aside>

    );
});
