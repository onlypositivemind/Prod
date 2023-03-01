import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = memo(() => {
    const { t } = useTranslation('main');

    return (
        <main>
            {t('Гланвая страница')}
        </main>
    );
});

export default MainPage;
