import { lazy } from 'react';

export const ProfilePageAsync = lazy(
    () => new Promise((resolve) => {
        // @ts-ignore TEST TODO
        setTimeout(() => resolve(import('./ProfilePage')), 10);
    }),
);
