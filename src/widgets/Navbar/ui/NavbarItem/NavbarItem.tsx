import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkSize } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import { NavbarItemType } from '../../model/items';
import s from './NavbarItem.module.scss';

interface NavbarItemProps extends NavbarItemType {
    collapsed: boolean;
}

export const NavbarItem = memo(({ path, text, Icon, collapsed }: NavbarItemProps) => {
    const { t } = useTranslation();

    return (
        <AppLink
            to={path}
            size={AppLinkSize.L}
            className={classNames(s.link, [], { [s.collapsed]: collapsed })}
        >
            <Icon className={s.icon} />
            <p className={s.title}>
                {t(text)}
            </p>
        </AppLink>
    );
});
