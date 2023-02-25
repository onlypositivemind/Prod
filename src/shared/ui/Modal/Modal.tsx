import React, { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';
import s from './Modal.module.scss';

export interface ModalProps {
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
    lazy?: boolean;
    className?: string;
}

const ANIMATION_DELAY = 200;

export const Modal = ({ className, children, isOpen, onClose, lazy }: ModalProps) => {
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    const handleClose = useCallback(() => {
        setIsClosing(true);

        timerRef.current = setTimeout(() => {
            onClose();
            setIsClosing(false);
        }, ANIMATION_DELAY);
    }, [onClose]);

    const handleContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const handleKey = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                handleClose();
            }
        },
        [handleClose],
    );

    const mods: Record<string, boolean> = {
        [s.opened]: isOpen,
        [s.closed]: isClosing,
    };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', handleKey);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', handleKey);
        };
    }, [handleKey, isOpen]);

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(s.modal, [className], mods)} onClick={handleClose}>
                <div className={s.overlay}>
                    <div className={s.content} onClick={handleContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
