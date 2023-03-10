import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(
    () => new Promise((resolve) => {
        // @ts-ignore TEST TODO
        setTimeout(() => resolve(import('./ArticleDetailsPage')), 10);
    }),
);
