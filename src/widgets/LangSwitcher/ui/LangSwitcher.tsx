import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import s from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = memo(({ className }: LangSwitcherProps) => {
    const { i18n } = useTranslation();
    const lang = i18n.language === 'ru' ? 'en' : 'ru';

    const toggle = () => {
        i18n.changeLanguage(lang);
    };

    return (
        <Button
            onClick={toggle}
            className={classNames(s.switcher, [className], {})}
            theme={ButtonTheme.CLEAR}
            size={ButtonSize.L}
        >
            {lang}
        </Button>
    );
});
