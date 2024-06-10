import {IRouteItem} from '@steroidsjs/core/ui/nav/Router/Router';

import RouteId from 'enums/RouteId';
import DATA from 'data/DATA';

import IndexPage from './IndexPage';
import AboutPage from './AboutPage';
import ItemPage from './ItemPage';
import ContactsPage from './ContactsPage';
import CategoryPage from './CategoryPage';
import CatalogPage from './CatalogPage';

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
            items: {
                [RouteId.CATALOG_MECHANISMS]: {
                    id: RouteId.CATALOG_MECHANISMS,
                    label: 'Механизмы',
                    exact: true,
                    path: '/mechanisms',
                    component: () => CategoryPage(DATA[0].items[0]),
                    roles,
                    items: {
                        [RouteId.CATALOG_MECHANISMS_STROPS]: {
                            id: RouteId.CATALOG_MECHANISMS_STROPS,
                            label: 'Стропы',
                            exact: true,
                            path: '/strops',
                            component: () => CatalogPage(DATA[0].items[0].items[0]),
                        },
                        [RouteId.CATALOG_MECHANISMS_VINTS]: {
                            id: RouteId.CATALOG_MECHANISMS_VINTS,
                            label: 'Винты',
                            exact: true,
                            path: '/vints',
                            component: () => CatalogPage(DATA[0].items[0].items[1]),
                        },
                        [RouteId.CATALOG_MECHANISMS_BOATS]: {
                            id: RouteId.CATALOG_MECHANISMS_BOATS,
                            label: 'Лодки',
                            exact: true,
                            path: '/boats',
                            component: () => CatalogPage(DATA[0].items[0].items[2]),
                        },
                    },
                },
                [RouteId.CATALOG_ELECTRICAL]: {
                    id: RouteId.CATALOG_ELECTRICAL,
                    label: 'Электрооборудование',
                    exact: true,
                    path: '/electrical',
                    component: () => CategoryPage(DATA[0].items[1]),
                    roles,
                    items: {
                        [RouteId.CATALOG_ELECTRICAL_AVTOMATS]: {
                            id: RouteId.CATALOG_ELECTRICAL_AVTOMATS,
                            label: 'Автоматы',
                            exact: true,
                            path: '/avtomats',
                            component: () => CatalogPage(DATA[0].items[1].items[0]),
                        },
                        [RouteId.CATALOG_ELECTRICAL_CONTACTORS]: {
                            id: RouteId.CATALOG_ELECTRICAL_CONTACTORS,
                            label: 'Контакторы',
                            exact: true,
                            path: '/contactors',
                            component: () => CatalogPage(DATA[0].items[1].items[1]),
                        },
                        [RouteId.CATALOG_ELECTRICAL_CABELS]: {
                            id: RouteId.CATALOG_ELECTRICAL_CABELS,
                            label: 'Кабеля',
                            exact: true,
                            path: '/cabels',
                            component: () => CatalogPage(DATA[0].items[1].items[2]),
                        },
                    },
                },
                [RouteId.CATALOG_RADIO]: {
                    id: RouteId.CATALOG_RADIO,
                    label: 'Радиооборудование',
                    exact: true,
                    path: '/radio',
                    component: () => CategoryPage(DATA[0].items[2]),
                    roles,
                    items: {
                        [RouteId.CATALOG_RADIO_LOCATORS]: {
                            id: RouteId.CATALOG_RADIO_LOCATORS,
                            label: 'Локаторы',
                            exact: true,
                            path: '/locators',
                            component: () => CatalogPage(DATA[0].items[2].items[0]),
                        },
                        [RouteId.CATALOG_RADIO_RADIO_STATIONS]: {
                            id: RouteId.CATALOG_RADIO_RADIO_STATIONS,
                            label: 'Контакторы',
                            exact: true,
                            path: '/radio-stations',
                            component: () => CatalogPage(DATA[0].items[2].items[1]),
                        },
                        [RouteId.CATALOG_RADIO_WALKIE_TALKIES]: {
                            id: RouteId.CATALOG_RADIO_WALKIE_TALKIES,
                            label: 'Рации',
                            exact: true,
                            path: '/walkie-talkies',
                            component: () => CatalogPage(DATA[0].items[2].items[2]),
                        },
                    },
                },
            },
        },
        [RouteId.SERVICES]: {
            id: RouteId.SERVICES,
            label: 'Услуги',
            exact: true,
            path: '/services',
            component: () => CategoryPage(DATA[1]),
            roles,
            items: {
                [RouteId.SERVICES_HULL_WORKS]: {
                    id: RouteId.SERVICES_HULL_WORKS,
                    label: 'Корпусные работы',
                    exact: true,
                    path: '/hull-works',
                    component: () => CategoryPage(DATA[1].items[0]),
                },
                [RouteId.SERVICES_ELECTRICAL]: {
                    id: RouteId.SERVICES_ELECTRICAL,
                    label: 'Электро щитовое оборудование и электроника',
                    exact: true,
                    path: '/electrical',
                    component: () => CategoryPage(DATA[1].items[1]),
                },
                [RouteId.SERVICES_MAINTENANCE]: {
                    id: RouteId.SERVICES_MAINTENANCE,
                    label: 'Сервисное обслуживание',
                    exact: true,
                    path: '/maintenance',
                    component: () => CategoryPage(DATA[1].items[2]),
                },
            },
        },
    },
} as IRouteItem;
