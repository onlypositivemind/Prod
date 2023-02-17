import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore TEST TODO
    setTimeout(() => resolve(import('./AboutPage')), 1500);
}));
