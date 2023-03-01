import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = memo(() => {
    const { t } = useTranslation('about');

    return <main>{t('О сайте')}</main>;
});

export default AboutPage;
