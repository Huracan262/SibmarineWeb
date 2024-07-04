import {IRouteItem} from '@steroidsjs/core/ui/nav/Router/Router';

import RouteId from 'enums/RouteId';
import DATA from 'data/DATA';
import certificates from 'data/certificates/certificates';
import NEWS_LIST from 'data/NEWS_LIST';

import IndexPage from './IndexPage';
import AboutPage from './AboutPage';
import ItemPage from './ItemPage';
import ContactsPage from './ContactsPage';
import CategoryPage from './CategoryPage';
import CatalogPage from './CatalogPage';
import NewsPage from './NewsPage';
import NewsItemPage from './NewsItemPage/NewsItemPage';
import CertificatesPage from './CertificatesPage';
import CertificateItemPage from './CertificateItemPage';
import PortfolioPage from './PortfolioPage';
import portfolio from '../data/portfolio/portfolio';
import PortfolioItemPage from './PortfolioItemPage';

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
        [RouteId.NEWS]: {
            id: RouteId.NEWS,
            label: 'Новости',
            exact: true,
            path: '/news',
            component: NewsPage,
            roles,
            items: {
                [RouteId.NEWS_1]: {
                    id: RouteId.NEWS_1,
                    label: NEWS_LIST[0].title,
                    exact: true,
                    path: '/' + RouteId.NEWS_1,
                    component: () => NewsItemPage(NEWS_LIST[0]),
                    roles,
                },
                [RouteId.NEWS_2]: {
                    id: RouteId.NEWS_2,
                    label: NEWS_LIST[1].title,
                    exact: true,
                    path: '/' + RouteId.NEWS_2,
                    component: () => NewsItemPage(NEWS_LIST[1]),
                    roles,
                },
            },
        },
        [RouteId.CERTIFICATES]: {
            id: RouteId.CERTIFICATES,
            label: 'Сертификаты и лицензии',
            exact: true,
            path: '/' + RouteId.CERTIFICATES,
            component: CertificatesPage,
            roles,
            items: {
                [RouteId.CERTIFICATES_RKO]: {
                    id: RouteId.CERTIFICATES_RKO,
                    label: certificates[0].title,
                    exact: true,
                    path: '/' + RouteId.CERTIFICATES_RKO,
                    component: () => CertificateItemPage(certificates[0]),
                    roles,
                },
            },
        },
        [RouteId.PORTFOLIO]: {
            id: RouteId.PORTFOLIO,
            label: 'Наши работы',
            exact: true,
            path: '/portfolio',
            component: PortfolioPage,
            roles,
            items: {
                [RouteId.PORTFOLIO_1]: {
                    id: RouteId.PORTFOLIO_1,
                    label: portfolio[0].title,
                    exact: true,
                    path: '/' + RouteId.PORTFOLIO_1,
                    component: () => PortfolioItemPage(portfolio[0]),
                    roles,
                },
                [RouteId.PORTFOLIO_2]: {
                    id: RouteId.PORTFOLIO_2,
                    label: portfolio[1].title,
                    exact: true,
                    path: '/' + RouteId.PORTFOLIO_2,
                    component: () => PortfolioItemPage(portfolio[1]),
                    roles,
                },
            },
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
                [RouteId.CATALOG_ELECTRO]: {
                    id: RouteId.CATALOG_ELECTRO,
                    label: DATA[0].items[0].title,
                    exact: true,
                    path: '/' + RouteId.CATALOG_ELECTRO,
                    component: () => CategoryPage(DATA[0].items[0]),
                    items: {
                        [RouteId.CATALOG_ELECTRO_PANNELS]: {
                            id: RouteId.CATALOG_ELECTRO_PANNELS,
                            label: DATA[0].items[0].items[0].title,
                            exact: true,
                            path: '/' + RouteId.CATALOG_ELECTRO_PANNELS,
                            component: () => CatalogPage(DATA[0].items[0].items[0]),
                        },
                        [RouteId.CATALOG_ELECTRO_CABLES]: {
                            id: RouteId.CATALOG_ELECTRO_CABLES,
                            label: DATA[0].items[0].items[1].title,
                            exact: true,
                            path: '/' + RouteId.CATALOG_ELECTRO_CABLES,
                            component: () => CatalogPage(DATA[0].items[0].items[1]),
                        },
                        [RouteId.CATALOG_ELECTRO_POWER_SUPPLIES]: {
                            id: RouteId.CATALOG_ELECTRO_POWER_SUPPLIES,
                            label: DATA[0].items[0].items[2].title,
                            exact: true,
                            path: '/' + RouteId.CATALOG_ELECTRO_POWER_SUPPLIES,
                            component: () => CatalogPage(DATA[0].items[0].items[2]),
                        },
                        [RouteId.CATALOG_ELECTRO_CHARGERS]: {
                            id: RouteId.CATALOG_ELECTRO_CHARGERS,
                            label: DATA[0].items[0].items[3].title,
                            exact: true,
                            path: '/' + RouteId.CATALOG_ELECTRO_CHARGERS,
                            component: () => CatalogPage(DATA[0].items[0].items[3]),
                        },
                        [RouteId.CATALOG_ELECTRO_TRANSFORMERS]: {
                            id: RouteId.CATALOG_ELECTRO_TRANSFORMERS,
                            label: DATA[0].items[0].items[4].title,
                            exact: true,
                            path: '/' + RouteId.CATALOG_ELECTRO_TRANSFORMERS,
                            component: () => CatalogPage(DATA[0].items[0].items[4]),
                        },
                    },
                },
                [RouteId.CATALOG_NAV]: {
                    id: RouteId.CATALOG_NAV,
                    label: DATA[0].items[1].title,
                    exact: true,
                    path: '/' + RouteId.CATALOG_NAV,
                    component: () => CategoryPage(DATA[0].items[1]),
                    items: {
                        [RouteId.CATALOG_NAV_COMPASSES]: {
                            id: RouteId.CATALOG_NAV_COMPASSES,
                            label: DATA[0].items[1].items[0].title,
                            exact: true,
                            path: '/' + RouteId.CATALOG_NAV_COMPASSES,
                            component: () => CatalogPage(DATA[0].items[1].items[0]),
                        },
                        [RouteId.CATALOG_NAV_SONARS]: {
                            id: RouteId.CATALOG_NAV_SONARS,
                            label: DATA[0].items[1].items[1].title,
                            exact: true,
                            path: '/' + RouteId.CATALOG_NAV_SONARS,
                            component: () => CatalogPage(DATA[0].items[1].items[1]),
                        },
                        [RouteId.CATALOG_NAV_RADARS]: {
                            id: RouteId.CATALOG_NAV_RADARS,
                            label: DATA[0].items[1].items[2].title,
                            exact: true,
                            path: '/' + RouteId.CATALOG_NAV_RADARS,
                            component: () => CatalogPage(DATA[0].items[1].items[2]),
                        },
                    },
                },
                [RouteId.CATALOG_RADIO]: {
                    id: RouteId.CATALOG_RADIO,
                    label: DATA[0].items[2].title,
                    exact: true,
                    path: '/' + RouteId.CATALOG_RADIO,
                    component: () => CategoryPage(DATA[0].items[2]),
                    items: {
                        [RouteId.CATALOG_RADIO_SHIP_COMMS]: {
                            id: RouteId.CATALOG_RADIO_SHIP_COMMS,
                            label: DATA[0].items[2].items[0].title,
                            exact: true,
                            path: '/' + RouteId.CATALOG_RADIO_SHIP_COMMS,
                            component: () => CatalogPage(DATA[0].items[2].items[0]),
                        },
                        [RouteId.CATALOG_RADIO_PORTABLE_VHF]: {
                            id: RouteId.CATALOG_RADIO_PORTABLE_VHF,
                            label: DATA[0].items[2].items[1].title,
                            exact: true,
                            path: '/' + RouteId.CATALOG_RADIO_PORTABLE_VHF,
                            component: () => CatalogPage(DATA[0].items[2].items[1]),
                        },
                        [RouteId.CATALOG_RADIO_STATIONARY_VHF]: {
                            id: RouteId.CATALOG_RADIO_STATIONARY_VHF,
                            label: DATA[0].items[2].items[2].title,
                            exact: true,
                            path: '/' + RouteId.CATALOG_RADIO_STATIONARY_VHF,
                            component: () => CatalogPage(DATA[0].items[2].items[2]),
                            items: {
                                [RouteId.ITEM_ERMAK360]: {
                                    id: RouteId.ITEM_ERMAK360,
                                    label: DATA[0].items[2].items[2].items[0].title,
                                    exact: true,
                                    path: '/' + RouteId.ITEM_ERMAK360,
                                    component: () => ItemPage(DATA[0].items[2].items[2].items[0]),
                                },
                                [RouteId.ITEM_NAVCOM_SRS310]: {
                                    id: RouteId.ITEM_NAVCOM_SRS310,
                                    label: DATA[0].items[2].items[2].items[1].title,
                                    exact: true,
                                    path: '/' + RouteId.ITEM_NAVCOM_SRS310,
                                    component: () => ItemPage(DATA[0].items[2].items[2].items[1]),
                                },
                            },
                        },
                        [RouteId.CATALOG_RADIO_HF_MW]: {
                            id: RouteId.CATALOG_RADIO_HF_MW,
                            label: DATA[0].items[2].items[3].title,
                            exact: true,
                            path: '/' + RouteId.CATALOG_RADIO_HF_MW,
                            component: () => CatalogPage(DATA[0].items[2].items[3]),
                        },
                        [RouteId.CATALOG_RADIO_ANTENNAS]: {
                            id: RouteId.CATALOG_RADIO_ANTENNAS,
                            label: DATA[0].items[2].items[4].title,
                            exact: true,
                            path: '/' + RouteId.CATALOG_RADIO_ANTENNAS,
                            component: () => CatalogPage(DATA[0].items[2].items[4]),
                        },
                        [RouteId.CATALOG_RADIO_ACCESSORIES]: {
                            id: RouteId.CATALOG_RADIO_ACCESSORIES,
                            label: DATA[0].items[2].items[5].title,
                            exact: true,
                            path: '/' + RouteId.CATALOG_RADIO_ACCESSORIES,
                            component: () => CatalogPage(DATA[0].items[2].items[5]),
                        },
                        [RouteId.CATALOG_RADIO_KVU_PARTS]: {
                            id: RouteId.CATALOG_RADIO_KVU_PARTS,
                            label: DATA[0].items[2].items[6].title,
                            exact: true,
                            path: '/' + RouteId.CATALOG_RADIO_KVU_PARTS,
                            component: () => CatalogPage(DATA[0].items[2].items[6]),
                        },
                    },
                },
                [RouteId.CATALOG_GMDSS]: {
                    id: RouteId.CATALOG_GMDSS,
                    label: DATA[0].items[3].title,
                    exact: true,
                    path: '/' + RouteId.CATALOG_GMDSS,
                    component: () => CategoryPage(DATA[0].items[3]),
                    items: {
                        [RouteId.CATALOG_GMDSS_EPIRBS]: {
                            id: RouteId.CATALOG_GMDSS_EPIRBS,
                            label: DATA[0].items[3].items[0].title,
                            exact: true,
                            path: '/' + RouteId.CATALOG_GMDSS_EPIRBS,
                            component: () => CatalogPage(DATA[0].items[3].items[0]),
                        },
                        [RouteId.CATALOG_GMDSS_SARTS]: {
                            id: RouteId.CATALOG_GMDSS_SARTS,
                            label: DATA[0].items[3].items[1].title,
                            exact: true,
                            path: '/' + RouteId.CATALOG_GMDSS_SARTS,
                            component: () => CatalogPage(DATA[0].items[3].items[1]),
                        },
                        [RouteId.CATALOG_GMDSS_SES]: {
                            id: RouteId.CATALOG_GMDSS_SES,
                            label: DATA[0].items[3].items[2].title,
                            exact: true,
                            path: '/' + RouteId.CATALOG_GMDSS_SES,
                            component: () => CatalogPage(DATA[0].items[3].items[2]),
                        },
                        [RouteId.CATALOG_GMDSS_NAVTEX]: {
                            id: RouteId.CATALOG_GMDSS_NAVTEX,
                            label: DATA[0].items[3].items[3].title,
                            exact: true,
                            path: '/' + RouteId.CATALOG_GMDSS_NAVTEX,
                            component: () => CatalogPage(DATA[0].items[3].items[3]),
                        },
                        [RouteId.CATALOG_GMDSS_ACCESSORIES]: {
                            id: RouteId.CATALOG_GMDSS_ACCESSORIES,
                            label: DATA[0].items[3].items[4].title,
                            exact: true,
                            path: '/' + RouteId.CATALOG_GMDSS_ACCESSORIES,
                            component: () => CatalogPage(DATA[0].items[3].items[4]),
                        },
                        [RouteId.CATALOG_GMDSS_HYDROSTATICS]: {
                            id: RouteId.CATALOG_GMDSS_HYDROSTATICS,
                            label: DATA[0].items[3].items[5].title,
                            exact: true,
                            path: '/' + RouteId.CATALOG_GMDSS_HYDROSTATICS,
                            component: () => CatalogPage(DATA[0].items[3].items[5]),
                        },
                        [RouteId.CATALOG_GMDSS_TESTERS]: {
                            id: RouteId.CATALOG_GMDSS_TESTERS,
                            label: DATA[0].items[3].items[6].title,
                            exact: true,
                            path: '/' + RouteId.CATALOG_GMDSS_TESTERS,
                            component: () => CatalogPage(DATA[0].items[3].items[6]),
                        },
                    },
                },
                [RouteId.CATALOG_LIGHTING]: {
                    id: RouteId.CATALOG_LIGHTING,
                    label: DATA[0].items[4].title,
                    exact: true,
                    path: '/' + RouteId.CATALOG_LIGHTING,
                    component: () => CategoryPage(DATA[0].items[4]),
                    items: {
                        [RouteId.CATALOG_LIGHTING_BUOYS]: {
                            id: RouteId.CATALOG_LIGHTING_BUOYS,
                            label: DATA[0].items[4].items[0].title,
                            exact: true,
                            path: '/' + RouteId.CATALOG_LIGHTING_BUOYS,
                            component: () => CatalogPage(DATA[0].items[4].items[0]),
                        },
                        [RouteId.CATALOG_LIGHTING_LIGHTS]: {
                            id: RouteId.CATALOG_LIGHTING_LIGHTS,
                            label: DATA[0].items[4].items[0].title,
                            exact: true,
                            path: '/' + RouteId.CATALOG_LIGHTING_LIGHTS,
                            component: () => CatalogPage(DATA[0].items[4].items[1]),
                        },
                        [RouteId.CATALOG_LIGHTING_SIGNAL_RECEIVERS]: {
                            id: RouteId.CATALOG_LIGHTING_SIGNAL_RECEIVERS,
                            label: DATA[0].items[4].items[0].title,
                            exact: true,
                            path: '/' + RouteId.CATALOG_LIGHTING_SIGNAL_RECEIVERS,
                            component: () => CatalogPage(DATA[0].items[4].items[2]),
                        },
                        [RouteId.CATALOG_LIGHTING_EXPLOSION_PROOF]: {
                            id: RouteId.CATALOG_LIGHTING_EXPLOSION_PROOF,
                            label: DATA[0].items[4].items[0].title,
                            exact: true,
                            path: '/' + RouteId.CATALOG_LIGHTING_EXPLOSION_PROOF,
                            component: () => CatalogPage(DATA[0].items[4].items[3]),
                        },
                        [RouteId.CATALOG_LIGHTING_PROJECTORS]: {
                            id: RouteId.CATALOG_LIGHTING_PROJECTORS,
                            label: DATA[0].items[4].items[0].title,
                            exact: true,
                            path: '/' + RouteId.CATALOG_LIGHTING_PROJECTORS,
                            component: () => CatalogPage(DATA[0].items[4].items[4]),
                        },
                        [RouteId.CATALOG_LIGHTING_LAMPS]: {
                            id: RouteId.CATALOG_LIGHTING_LAMPS,
                            label: DATA[0].items[4].items[0].title,
                            exact: true,
                            path: '/' + RouteId.CATALOG_LIGHTING_LAMPS,
                            component: () => CatalogPage(DATA[0].items[4].items[5]),
                        },
                        [RouteId.CATALOG_LIGHTING_SWITCHES]: {
                            id: RouteId.CATALOG_LIGHTING_SWITCHES,
                            label: DATA[0].items[3].items[0].title,
                            exact: true,
                            path: '/' + RouteId.CATALOG_LIGHTING_SWITCHES,
                            component: () => CatalogPage(DATA[0].items[4].items[6]),
                        },
                    },
                },
                [RouteId.CATALOG_MECH]: {
                    id: RouteId.CATALOG_MECH,
                    label: DATA[0].items[5].title,
                    exact: true,
                    path: '/' + RouteId.CATALOG_MECH,
                    component: () => CategoryPage(DATA[0].items[5]),
                    items: {
                        [RouteId.CATALOG_MECH_NOZZLES]: {
                            id: RouteId.CATALOG_MECH_NOZZLES,
                            label: DATA[0].items[5].items[0].title,
                            exact: true,
                            path: '/' + RouteId.CATALOG_MECH_NOZZLES,
                            component: () => CatalogPage(DATA[0].items[5].items[0]),
                        },
                        [RouteId.CATALOG_MECH_PROPELLERS]: {
                            id: RouteId.CATALOG_MECH_PROPELLERS,
                            label: DATA[0].items[5].items[1].title,
                            exact: true,
                            path: '/' + RouteId.CATALOG_MECH_PROPELLERS,
                            component: () => CatalogPage(DATA[0].items[5].items[1]),
                        },
                        [RouteId.CATALOG_MECH_WINCHES]: {
                            id: RouteId.CATALOG_MECH_WINCHES,
                            label: DATA[0].items[5].items[2].title,
                            exact: true,
                            path: '/' + RouteId.CATALOG_MECH_WINCHES,
                            component: () => CatalogPage(DATA[0].items[5].items[2]),
                        },
                        [RouteId.CATALOG_MECH_HOOKS]: {
                            id: RouteId.CATALOG_MECH_HOOKS,
                            label: DATA[0].items[5].items[3].title,
                            exact: true,
                            path: '/' + RouteId.CATALOG_MECH_HOOKS,
                            component: () => CatalogPage(DATA[0].items[5].items[3]),
                        },
                        [RouteId.CATALOG_MECH_VALVES]: {
                            id: RouteId.CATALOG_MECH_VALVES,
                            label: DATA[0].items[5].items[4].title,
                            exact: true,
                            path: '/' + RouteId.CATALOG_MECH_VALVES,
                            component: () => CatalogPage(DATA[0].items[5].items[4]),
                        },
                        [RouteId.CATALOG_MECH_HATCHES]: {
                            id: RouteId.CATALOG_MECH_HATCHES,
                            label: DATA[0].items[5].items[5].title,
                            exact: true,
                            path: '/' + RouteId.CATALOG_MECH_HATCHES,
                            component: () => CatalogPage(DATA[0].items[5].items[5]),
                        },
                        [RouteId.CATALOG_MECH_MOORING]: {
                            id: RouteId.CATALOG_MECH_MOORING,
                            label: DATA[0].items[5].items[6].title,
                            exact: true,
                            path: '/' + RouteId.CATALOG_MECH_MOORING,
                            component: () => CatalogPage(DATA[0].items[5].items[6]),
                        },
                    },
                },
                [RouteId.CATALOG_SAFETY]: {
                    id: RouteId.CATALOG_SAFETY,
                    label: DATA[0].items[6].title,
                    exact: true,
                    path: '/' + RouteId.CATALOG_SAFETY,
                    component: () => CategoryPage(DATA[0].items[6]),
                    items: {
                        [RouteId.CATALOG_SAFETY_FIRE_SYSTEMS]: {
                            id: RouteId.CATALOG_SAFETY_FIRE_SYSTEMS,
                            label: DATA[0].items[6].items[0].title,
                            exact: true,
                            path: '/' + RouteId.CATALOG_SAFETY_FIRE_SYSTEMS,
                            component: () => CatalogPage(DATA[0].items[6].items[0]),
                        },
                        [RouteId.CATALOG_SAFETY_CCTV]: {
                            id: RouteId.CATALOG_SAFETY_CCTV,
                            label: DATA[0].items[6].items[1].title,
                            exact: true,
                            path: '/' + RouteId.CATALOG_SAFETY_CCTV,
                            component: () => CatalogPage(DATA[0].items[6].items[1]),
                        },
                        [RouteId.CATALOG_SAFETY_ACCESS_CONTROL]: {
                            id: RouteId.CATALOG_SAFETY_ACCESS_CONTROL,
                            label: DATA[0].items[6].items[2].title,
                            exact: true,
                            path: '/' + RouteId.CATALOG_SAFETY_ACCESS_CONTROL,
                            component: () => CatalogPage(DATA[0].items[6].items[2]),
                        },
                        [RouteId.CATALOG_SAFETY_RESCUE]: {
                            id: RouteId.CATALOG_SAFETY_RESCUE,
                            label: DATA[0].items[6].items[3].title,
                            exact: true,
                            path: '/' + RouteId.CATALOG_SAFETY_RESCUE,
                            component: () => CatalogPage(DATA[0].items[6].items[3]),
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
