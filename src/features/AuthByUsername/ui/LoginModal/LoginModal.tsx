import { classNames } from 'shared/lib/classNames/classNames';
import { Modal, ModalProps } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';
import s from './LoginModal.module.scss';

interface LoginModalProps extends Pick<ModalProps, 'isOpen' | 'onClose'> {
    className?: string;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
    <Modal
        className={classNames(s.loginModal, [className], {})}
        isOpen={isOpen}
        onClose={onClose}
        lazy
    >
        <LoginForm />
    </Modal>
);
