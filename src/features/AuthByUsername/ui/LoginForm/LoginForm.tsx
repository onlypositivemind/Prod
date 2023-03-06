import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import s from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
    handleCloseModal: () => void;
}

const reducers: ReducersList = { loginForm: loginReducer };

const LoginForm = memo(({ className, handleCloseModal }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const handleChangeUsername = useCallback((name: string) => {
        dispatch(loginActions.setUsername(name));
    }, [dispatch]);

    const handleChangePassword = useCallback((pass: string) => {
        dispatch(loginActions.setPassword(pass));
    }, [dispatch]);

    const handleLogin = useCallback(async () => {
        const res = await dispatch(loginByUsername({ username, password }));
        if (res.meta.requestStatus === 'fulfilled') {
            handleCloseModal();
        }
    }, [dispatch, handleCloseModal, password, username]);

    return (
        <DynamicModuleLoader reducers={reducers} removeWhenUnmount>
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
        </DynamicModuleLoader>
    );
});

export default LoginForm;
