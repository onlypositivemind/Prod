import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RoutesPath } from 'shared/config/routeConfig/routeConfig';
import MainPageIcon from 'shared/assets/icons/main-page.svg';
import AboutPageIcon from 'shared/assets/icons/about-page.svg';
import ProfilePageIcon from 'shared/assets/icons/profile-page.svg';
import ArticlePageIcon from 'shared/assets/icons/article-page.svg';
import { NavbarItemType } from '../../types/navbar';

export const getNavbarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const navbarItemsList: NavbarItemType[] = [
            { path: RoutesPath.main, text: 'Главная', Icon: MainPageIcon },
            { path: RoutesPath.about, text: 'О нас', Icon: AboutPageIcon },
        ];

        if (userData) {
            navbarItemsList.push(
                { path: RoutesPath.profile + userData.id, text: 'Профиль', Icon: ProfilePageIcon, authOnly: true },
                { path: RoutesPath.articles, text: 'Статьи', Icon: ArticlePageIcon, authOnly: true },
            );
        }
        return navbarItemsList;
    },
);
