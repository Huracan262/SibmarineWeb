import React from 'react';
import {IoBusiness} from 'react-icons/io5';

import RouteId from 'enums/RouteId';

const about = {
    title: 'О компании',
    url: RouteId.ABOUT,
    icon: <IoBusiness />,
    items: [
        {
            title: 'О нас',
            url: RouteId.ABOUT,
        },
        {
            title: 'Сертификаты и лицензии',
            url: '/about/certificates',
        },
        {
            title: 'Наши работы',
            url: '/about/our-work',
        },
        {
            title: 'Новости',
            url: RouteId.NEWS,
        },
        {
            title: 'Контакты',
            url: RouteId.CONTACTS,
        },
    ],
};

export default about;
