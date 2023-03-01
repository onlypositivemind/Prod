import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { getUserAuthData, userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import s from './Header.module.scss';

interface HeaderProps {
    className?: string;
}

export const Header = memo(({ className }: HeaderProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const handleCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const handleOpenModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const handleLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <header className={classNames(s.header, [className], {})}>
                <div className={s.buttons}>
                    <Button
                        className={s.loginBtn}
                        theme={ButtonTheme.CLEAR}
                        onClick={handleLogout}
                    >
                        {t('Выйти')}
                    </Button>
                </div>
            </header>
        );
    }

    return (
        <header className={classNames(s.header, [className], {})}>
            <div className={s.buttons}>
                <Button
                    className={s.loginBtn}
                    theme={ButtonTheme.CLEAR}
                    onClick={handleOpenModal}
                >
                    {t('Войти')}
                </Button>
            </div>
            {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={handleCloseModal} />}
        </header>
    );
});
