import { classNames } from 'shared/lib/classNames/classNames';
import s from './Header.module.scss';

interface HeaderProps {
    className?: string;
}

export const Header = ({ className }: HeaderProps) => {
    return <header className={classNames(s.header, [className], {})} />;
};
