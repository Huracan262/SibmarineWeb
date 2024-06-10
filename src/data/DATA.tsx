import React from 'react';
import catalog from './catalog/catalog';
import services from './services/services';
import about from './about/about'; // Иконка для о компании

interface IDATA {
    title: string,
    url: string,
    icon: React.ReactNode,
    items: any[],
}

const DATA: IDATA[] = [
    catalog,
    services,
    about,
];

export default DATA;
