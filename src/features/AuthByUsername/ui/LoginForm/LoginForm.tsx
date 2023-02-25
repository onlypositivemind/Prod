import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useState } from 'react';
import s from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const [v, setV] = useState('');

    return (
        <div className={classNames(s.loginFrom, [className], {})}>
            <Input value={v} onChange={setV} placeholder={t('Имя пользователя')} autoFocus />
            <Input value={v} onChange={setV} placeholder={t('Пароль')} />
            <Button className={s.loginBtn} theme={ButtonTheme.BLUE}>{t('Войти')}</Button>
        </div>
    );
};
