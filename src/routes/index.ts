import {IRouteItem} from '@steroidsjs/core/ui/nav/Router/Router';

import RouteId from 'enums/RouteId';
import DATA from 'data/DATA';

import IndexPage from './IndexPage';
import AboutPage from './AboutPage';
import ItemPage from './ItemPage';
import ContactsPage from './ContactsPage';
import CategoryPage from './CategoryPage';

const roles = [null];

export default {
    id: RouteId.HOME,
    exact: true,
    path: '/',
    component: IndexPage,
    roles,
    items: {
        [RouteId.ABOUT]: {
            id: RouteId.ABOUT,
            label: 'О компании',
            exact: true,
            path: '/about',
            component: AboutPage,
            roles,
        },
        [RouteId.ITEM]: {
            id: RouteId.ITEM,
            label: 'Карточка товара',
            exact: true,
            path: '/item',
            component: ItemPage,
            roles,
        },
        [RouteId.CONTACTS]: {
            id: RouteId.CONTACTS,
            label: 'Контакты',
            exact: true,
            path: '/contacts',
            component: ContactsPage,
            roles,
        },
        [RouteId.CATALOG]: {
            id: RouteId.CATALOG,
            label: 'Каталог',
            exact: true,
            path: '/catalog',
            component: () => CategoryPage(DATA[0]),
            roles,
        },
        [RouteId.SERVICES]: {
            id: RouteId.SERVICES,
            label: 'Услуги',
            exact: true,
            path: '/services',
            component: () => CategoryPage(DATA[1]),
            roles,
        },
    },
} as IRouteItem;
