import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

export const AppRouter = () => (
    // eslint-disable-next-line i18next/no-literal-string
    <Suspense fallback={<PageLoader />}>
        <Routes>
            {routerConfig.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
            ))}
        </Routes>
    </Suspense>
);
