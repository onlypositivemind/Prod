import { lazy } from 'react';

export const MainPageAsync = lazy(
    () =>
        new Promise((resolve) => {
            // @ts-ignore TEST TODO
            setTimeout(() => resolve(import('./MainPage')), 1500);
        }),
);
