import React from 'react';

import {FaList} from 'react-icons/fa'; // Иконка для каталога
import {MdBuild} from 'react-icons/md'; // Иконка для услуг
import {IoBusiness} from 'react-icons/io5'; // Иконка для о компании

interface IDATA {
    title: string,
    url: string,
    icon: React.ReactNode,
    items: any[],
}

const DATA: IDATA[] = [
    {
        title: 'Каталог',
        url: '/catalog',
        icon: <FaList />,
        items: [
            {
                title: 'Механизмы',
                url: '/catalog/mechanisms',
                items: [
                    {
                        title: 'Стропа',
                        url: '/catalog/mechanisms/stropa',
                    },
                    {
                        title: 'Винт',
                        url: '/catalog/mechanisms/screw',
                    },
                    {
                        title: 'Лодка',
                        url: '/catalog/mechanisms/boat',
                    },
                ],
            },
            {
                title: 'Электрооборудование',
                url: '/catalog/elektro',
                items: [
                    {
                        title: 'Автоматический выключатель',
                        url: '/catalog/elektro/avtomat',
                    },
                    {
                        title: 'Контактор',
                        url: '/catalog/elektro/contactor',
                    },
                    {
                        title: 'Провод',
                        url: '/catalog/elektro/wire',
                    },
                ],
            },
            {
                title: 'Радионавигационное оборудование',
                url: '/catalog/radio',
                items: [
                    {
                        title: 'Локатор',
                        url: '/catalog/radio/locator',
                    },
                    {
                        title: 'Радиостанция',
                        url: '/catalog/radio/radio-station',
                    },
                    {
                        title: 'Рация',
                        url: '/catalog/radio/walkie-talkie',
                    },
                ],
            },
        ],
    },
    {
        title: 'Услуги',
        url: '/services',
        icon: <MdBuild />,
        items: [
            {
                title: 'По радио-навигационному оборудованию',
                url: '/services/radio-nav',
                items: [
                    {
                        title: 'Установка GPS систем',
                        url: '/services/radio-nav/gps-installation',
                    },
                    {
                        title: 'Ремонт радиолокационной аппаратуры',
                        url: '/services/radio-nav/radar-repair',
                    },
                    {
                        title: 'Обслуживание авионики',
                        url: '/services/radio-nav/avionics-maintenance',
                    },
                ],
            },
            {
                title: 'По электрическому оборудованию',
                url: '/services/electrical',
                items: [
                    {
                        title: 'Монтаж электропроводки',
                        url: '/services/electrical/wiring-installation',
                    },
                    {
                        title: 'Техническое обслуживание электродвигателей',
                        url: '/services/electrical/motor-maintenance',
                    },
                    {
                        title: 'Диагностика и ремонт электропанелей',
                        url: '/services/electrical/panel-diagnostics',
                    },
                ],
            },
            {
                title: 'По корпусным работам',
                url: '/services/hull-work',
                items: [
                    {
                        title: 'Сварочные работы',
                        url: '/services/hull-work/welding',
                    },
                    {
                        title: 'Покраска и обработка корпуса',
                        url: '/services/hull-work/painting',
                    },
                    {
                        title: 'Ремонт и восстановление корпуса',
                        url: '/services/hull-work/hull-repair',
                    },
                ],
            },
        ],
    },
    {
        title: 'О компании',
        url: '/about',
        icon: <IoBusiness />,
        items: [
            {
                title: 'О нас',
                url: '/about/us',
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
                url: '/about/news',
            },
            {
                title: 'Контакты',
                url: '/about/contacts',
            },
        ],
    },
];

export default DATA;
