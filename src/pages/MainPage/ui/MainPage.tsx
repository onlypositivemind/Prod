import { useTranslation } from 'react-i18next';

const MainPage = () => {
	const { t } = useTranslation('mainPage');
	
	return (
		<main>
			{t('Гланвая страница')}
			
			{t('')}
		</main>
	);
};

export default MainPage;