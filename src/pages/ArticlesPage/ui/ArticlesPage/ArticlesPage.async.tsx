import { lazy } from 'react';

export const ArticlesPageAsync = lazy(
    () => new Promise((resolve) => {
        // @ts-ignore TEST TODO
        setTimeout(() => resolve(import('./ArticlesPage')), 10);
    }),
);
