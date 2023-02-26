import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginByUsername } from '../../model/services/loignByUsername/loignByUsername';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import s from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const { username, password, error, isLoading } = useSelector(getLoginState);

    const handleChangeUsername = useCallback((name: string) => {
        dispatch(loginActions.setUsername(name));
    }, [dispatch]);

    const handleChangePassword = useCallback((pass: string) => {
        dispatch(loginActions.setPassword(pass));
    }, [dispatch]);

    const handleLogin = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(s.loginFrom, [className], {})}>
            <Text title={t('Форма авторизации')} />
            {error && <Text text={t('Неверное имя или пароль')} theme={TextTheme.ERROR} className={s.error} />}
            <Input
                value={username}
                onChange={handleChangeUsername}
                placeholder={t('Имя пользователя')}
                autoFocus
            />
            <Input
                value={password}
                onChange={handleChangePassword}
                placeholder={t('Пароль')}
            />
            <Button
                className={s.loginBtn}
                theme={ButtonTheme.BLUE}
                onClick={handleLogin}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});
