import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation('mainPage');

    return (
        <main>
            {t('Гланвая страница')}
        </main>
    );
};

export default MainPage;
