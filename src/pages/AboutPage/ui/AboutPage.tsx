import { useTranslation } from 'react-i18next';

const AboutPage = () => {
	const { t } = useTranslation('aboutPage');
	
	return (
		<main>
			{t('О сайте')}
		</main>
	);
};

export default AboutPage;