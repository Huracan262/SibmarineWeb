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
                name: 'Механизмы',
                url: '/catalog/mechanisms',
                items: [
                    {
                        name: 'Стропа',
                        url: '/catalog/mechanisms/stropa',
                    },
                    {
                        name: 'Винт',
                        url: '/catalog/mechanisms/screw',
                    },
                    {
                        name: 'Лодка',
                        url: '/catalog/mechanisms/boat',
                    },
                ],
            },
            {
                name: 'Электрооборудование',
                url: '/catalog/elektro',
                items: [
                    {
                        name: 'Автоматический выключатель',
                        url: '/catalog/elektro/avtomat',
                    },
                    {
                        name: 'Контактор',
                        url: '/catalog/elektro/contactor',
                    },
                    {
                        name: 'Провод',
                        url: '/catalog/elektro/wire',
                    },
                ],
            },
            {
                name: 'Радионавигационное оборудование',
                url: '/catalog/radio',
                items: [
                    {
                        name: 'Локатор',
                        url: '/catalog/radio/locator',
                    },
                    {
                        name: 'Радиостанция',
                        url: '/catalog/radio/radio-station',
                    },
                    {
                        name: 'Рация',
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
                name: 'По радио-навигационному оборудованию',
                url: '/services/radio-nav',
                items: [
                    {
                        name: 'Установка GPS систем',
                        url: '/services/radio-nav/gps-installation',
                    },
                    {
                        name: 'Ремонт радиолокационной аппаратуры',
                        url: '/services/radio-nav/radar-repair',
                    },
                    {
                        name: 'Обслуживание авионики',
                        url: '/services/radio-nav/avionics-maintenance',
                    },
                ],
            },
            {
                name: 'По электрическому оборудованию',
                url: '/services/electrical',
                items: [
                    {
                        name: 'Монтаж электропроводки',
                        url: '/services/electrical/wiring-installation',
                    },
                    {
                        name: 'Техническое обслуживание электродвигателей',
                        url: '/services/electrical/motor-maintenance',
                    },
                    {
                        name: 'Диагностика и ремонт электропанелей',
                        url: '/services/electrical/panel-diagnostics',
                    },
                ],
            },
            {
                name: 'По корпусным работам',
                url: '/services/hull-work',
                items: [
                    {
                        name: 'Сварочные работы',
                        url: '/services/hull-work/welding',
                    },
                    {
                        name: 'Покраска и обработка корпуса',
                        url: '/services/hull-work/painting',
                    },
                    {
                        name: 'Ремонт и восстановление корпуса',
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
                name: 'О нас',
                url: '/about/us',
            },
            {
                name: 'Сертификаты и лицензии',
                url: '/about/certificates',
            },
            {
                name: 'Наши работы',
                url: '/about/our-work',
            },
            {
                name: 'Новости',
                url: '/about/news',
            },
            {
                name: 'Контакты',
                url: '/about/contacts',
            },
        ],
    },
];

export default DATA;
