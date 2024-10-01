import React from 'react';

import {RiNurseFill, RiHandCoinFill, RiRouterFill, RiCustomerService2Fill, RiFileTextFill, RiLineChartFill, RiShipFill, RiNodeTree} from "react-icons/ri";

interface IADVANTAGES_LIST {
    id: number,
    name: string,
    icon: React.ReactNode, // TODO - Any
    src: string,
}

const ADVANTAGES_LIST = [
    {
        title: 'Квалифицированный персонал',
        icon: <RiNurseFill />,
        src: 'images/advantages/advantages-8.jpg',
    },
    {
        title: 'Развитая сеть поставщиков и партнеров',
        icon: <RiHandCoinFill />,
        src: 'images/advantages/advantages-4.jpg',
    },
    {
        title: 'Современное сертифицированное оборудование',
        icon: <RiRouterFill />,
        src: 'images/advantages/advantages-5.jpg',
    },
    {
        title: 'Техническая поддержка',
        icon: <RiCustomerService2Fill />,
        src: 'images/advantages/advantages-2.jpg',
    },
    {
        title: 'Наличие сертификатов от производителей и классификационных обществ',
        icon: <RiFileTextFill />,
        src: 'images/advantages/advantages-3.jpg',
    },
    {
        title: 'Работа на тендерных площадках. Поддержка заказчиков в публикации закупок',
        icon: <RiLineChartFill />,
        src: 'images/advantages/advantages-7.jpg',
    },
    {
        title: 'Собственное конструкторское бюро',
        icon: <RiShipFill />,
        src: 'images/advantages/advantages-6.jpg',
    },
    {
        title: 'Собственное производство',
        icon: <RiNodeTree />,
        src: 'images/advantages/advantages-1.jpg',
    },
];

export default ADVANTAGES_LIST;
