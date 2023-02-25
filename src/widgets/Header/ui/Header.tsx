import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import s from './Header.module.scss';

interface HeaderProps {
    className?: string;
}

export const Header = ({ className }: HeaderProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const handleCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const handleOpenModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

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
            <LoginModal isOpen={isAuthModal} onClose={handleCloseModal} />
        </header>
    );
};
