import { Suspense } from 'react';
import { Modal, ModalProps } from 'shared/ui/Modal/Modal';
import { Loader } from 'shared/ui/Loader/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps extends Pick<ModalProps, 'isOpen' | 'onClose'> {}

export const LoginModal = ({ isOpen, onClose }: LoginModalProps) => (
    <Modal
        isOpen={isOpen}
        onClose={onClose}
        lazy
    >
        <Suspense fallback={<Loader />}>
            <LoginFormAsync handleCloseModal={onClose} />
        </Suspense>
    </Modal>
);
