import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { ProfilePage } from 'pages/ProfilePage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';
import { NotFoundPage } from 'pages/NotFoundPage/ui/NotFoundPage';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
}

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    NOT_FOUND = 'notFound',
}

export const RoutesPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLE_DETAILS]: '/articles/', // +id
    [AppRoutes.NOT_FOUND]: '*',
};

export const routerConfig: AppRoutesProps[] = [
    { path: RoutesPath.main, element: <MainPage /> },
    { path: RoutesPath.about, element: <AboutPage /> },
    { path: RoutesPath.profile, element: <ProfilePage />, authOnly: true },
    { path: RoutesPath.articles, element: <ArticlesPage />, authOnly: true },
    { path: `${RoutesPath.article_details}:id`, element: <ArticleDetailsPage />, authOnly: true },
    { path: RoutesPath.notFound, element: <NotFoundPage /> },
];
