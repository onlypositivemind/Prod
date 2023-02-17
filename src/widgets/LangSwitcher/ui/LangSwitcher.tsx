import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './LangSwitcher.module.scss';
import { Button } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
	className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
	const { i18n } = useTranslation();
	const lang = i18n.language === 'ru' ? 'en' : 'ru';
	
	const toggle = () => {
		i18n.changeLanguage(lang);
	};
	
	return (
		<Button
			onClick={toggle}
			className={classNames(s.switcher, [className], {})}
		>
			{lang}
		</Button>
	);
};