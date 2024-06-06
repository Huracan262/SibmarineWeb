import React from 'react';
import {FaList} from 'react-icons/fa'; // Иконка для каталога
import {MdBuild} from 'react-icons/md'; // Иконка для услуг
import {IoBusiness} from 'react-icons/io5';
import RouteId from '../enums/RouteId'; // Иконка для о компании

interface IDATA {
    title: string,
    url: string,
    icon: React.ReactNode,
    items: any[],
}

const DATA: IDATA[] = [
    {
        title: 'Каталог',
        url: RouteId.CATALOG,
        icon: <FaList />,
        items: [
            {
                title: 'Механизмы',
                url: '/catalog/mechanisms',
                img: '',
                items: [
                    {
                        title: 'Стропа',
                        url: '/catalog/mechanisms/stropa',
                        items: [
                            {
                                title: 'Стропа-1',
                                url: '/catalog/mechanisms/stropa/stropa-1',
                            },
                            {
                                title: 'Стропа-2',
                                url: '/catalog/mechanisms/stropa/stropa-2',
                            },
                            {
                                title: 'Стропа-3',
                                url: '/catalog/mechanisms/stropa/stropa-3',
                            },
                        ],
                    },
                    {
                        title: 'Винт',
                        url: '/catalog/mechanisms/screw',
                        items: [
                            {
                                title: 'Винт-1',
                                url: '/catalog/mechanisms/screw/vint-1',
                            },
                            {
                                title: 'Винт-2',
                                url: '/catalog/mechanisms/screw/vint-2',
                            },
                            {
                                title: 'Винт-3',
                                url: '/catalog/mechanisms/screw/vint-3',
                            },
                        ],
                    },
                    {
                        title: 'Лодка',
                        url: '/catalog/mechanisms/boat',
                        items: [
                            {
                                title: 'Лодка-1',
                                url: '/catalog/mechanisms/boat/lodka-1',
                            },
                            {
                                title: 'Лодка-2',
                                url: '/catalog/mechanisms/boat/lodka-2',
                            },
                            {
                                title: 'Лодка-3',
                                url: '/catalog/mechanisms/boat/lodka-3',
                            },
                        ],
                    },
                ],
            },
            {
                title: 'Электрооборудование',
                url: '/catalog/elektro',
                img: '',
                items: [
                    {
                        title: 'Автоматический выключатель',
                        url: '/catalog/elektro/avtomat',
                        items: [
                            {
                                title: 'Автомат-1',
                                url: '/catalog/elektro/avtomat/avtomat-1',
                            },
                            {
                                title: 'Автомат-2',
                                url: '/catalog/elektro/avtomat/avtomat-2',
                            },
                            {
                                title: 'Автомат-3',
                                url: '/catalog/elektro/avtomat/avtomat-3',
                            },
                        ],
                    },
                    {
                        title: 'Контактор',
                        url: '/catalog/elektro/contactor',
                        items: [
                            {
                                title: 'Контактор-1',
                                url: '/catalog/elektro/contactor/kontaktor-1',
                            },
                            {
                                title: 'Контактор-2',
                                url: '/catalog/elektro/contactor/kontaktor-2',
                            },
                            {
                                title: 'Контактор-3',
                                url: '/catalog/elektro/contactor/kontaktor-3',
                            },
                        ],
                    },
                    {
                        title: 'Провод',
                        url: '/catalog/elektro/wire',
                        items: [
                            {
                                title: 'Провод-1',
                                url: '/catalog/elektro/wire/provod-1',
                            },
                            {
                                title: 'Провод-2',
                                url: '/catalog/elektro/wire/provod-2',
                            },
                            {
                                title: 'Провод-3',
                                url: '/catalog/elektro/wire/provod-3',
                            },
                        ],
                    },
                ],
            },
            {
                title: 'Радионавигационное оборудование',
                url: '/catalog/radio',
                img: '',
                items: [
                    {
                        title: 'Локатор',
                        url: '/catalog/radio/locator',
                        items: [
                            {
                                title: 'Локатор-1',
                                url: '/catalog/radio/locator/lokator-1',
                            },
                            {
                                title: 'Локатор-2',
                                url: '/catalog/radio/locator/lokator-2',
                            },
                            {
                                title: 'Локатор-3',
                                url: '/catalog/radio/locator/lokator-3',
                            },
                        ],
                    },
                    {
                        title: 'Радиостанция',
                        url: '/catalog/radio/radio-station',
                        items: [
                            {
                                title: 'Радиостанция-1',
                                url: '/catalog/radio/radio-station/radiostantsiya-1',
                            },
                            {
                                title: 'Радиостанция-2',
                                url: '/catalog/radio/radio-station/radiostantsiya-2',
                            },
                            {
                                title: 'Радиостанция-3',
                                url: '/catalog/radio/radio-station/radiostantsiya-3',
                            },
                        ],
                    },
                    {
                        title: 'Рация',
                        url: '/catalog/radio/walkie-talkie',
                        items: [
                            {
                                title: 'Рация-1',
                                url: '/catalog/radio/walkie-talkie/ratsiya-1',
                            },
                            {
                                title: 'Рация-2',
                                url: '/catalog/radio/walkie-talkie/ratsiya-2',
                            },
                            {
                                title: 'Рация-3',
                                url: '/catalog/radio/walkie-talkie/ratsiya-3',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        title: 'Услуги',
        url: RouteId.SERVICES,
        icon: <MdBuild />,
        items: [
            {
                title: 'По радио-навигационному оборудованию',
                url: '/services/radio-nav',
                img: '',
                items: [
                    {
                        title: 'Установка GPS систем',
                        url: '/services/radio-nav/gps-installation',
                        items: [
                            {
                                title: 'GPS установка-1',
                                url: '/services/radio-nav/gps-installation/gps-1',
                            },
                            {
                                title: 'GPS установка-2',
                                url: '/services/radio-nav/gps-installation/gps-2',
                            },
                            {
                                title: 'GPS установка-3',
                                url: '/services/radio-nav/gps-installation/gps-3',
                            },
                        ],
                    },
                    {
                        title: 'Ремонт радиолокационной аппаратуры',
                        url: '/services/radio-nav/radar-repair',
                        items: [
                            {
                                title: 'Ремонт радаров-1',
                                url: '/services/radio-nav/radar-repair/radar-1',
                            },
                            {
                                title: 'Ремонт радаров-2',
                                url: '/services/radio-nav/radar-repair/radar-2',
                            },
                            {
                                title: 'Ремонт радаров-3',
                                url: '/services/radio-nav/radar-repair/radar-3',
                            },
                        ],
                    },
                    {
                        title: 'Обслуживание авионики',
                        url: '/services/radio-nav/avionics-maintenance',
                        items: [
                            {
                                title: 'Обслуживание авионики-1',
                                url: '/services/radio-nav/avionics-maintenance/avionics-1',
                            },
                            {
                                title: 'Обслуживание авионики-2',
                                url: '/services/radio-nav/avionics-maintenance/avionics-2',
                            },
                            {
                                title: 'Обслуживание авионики-3',
                                url: '/services/radio-nav/avionics-maintenance/avionics-3',
                            },
                        ],
                    },
                ],
            },
            {
                title: 'По электрическому оборудованию',
                url: '/services/electrical',
                img: '',
                items: [
                    {
                        title: 'Монтаж электропроводки',
                        url: '/services/electrical/wiring-installation',
                        items: [
                            {
                                title: 'Монтаж проводки-1',
                                url: '/services/electrical/wiring-installation/wiring-1',
                            },
                            {
                                title: 'Монтаж проводки-2',
                                url: '/services/electrical/wiring-installation/wiring-2',
                            },
                            {
                                title: 'Монтаж проводки-3',
                                url: '/services/electrical/wiring-installation/wiring-3',
                            },
                        ],
                    },
                    {
                        title: 'Техническое обслуживание электродвигателей',
                        url: '/services/electrical/motor-maintenance',
                        items: [
                            {
                                title: 'Обслуживание двигателей-1',
                                url: '/services/electrical/motor-maintenance/motor-1',
                            },
                            {
                                title: 'Обслуживание двигателей-2',
                                url: '/services/electrical/motor-maintenance/motor-2',
                            },
                            {
                                title: 'Обслуживание двигателей-3',
                                url: '/services/electrical/motor-maintenance/motor-3',
                            },
                        ],
                    },
                    {
                        title: 'Диагностика и ремонт электропанелей',
                        url: '/services/electrical/panel-diagnostics',
                        items: [
                            {
                                title: 'Диагностика панелей-1',
                                url: '/services/electrical/panel-diagnostics/panel-1',
                            },
                            {
                                title: 'Диагностика панелей-2',
                                url: '/services/electrical/panel-diagnostics/panel-2',
                            },
                            {
                                title: 'Диагностика панелей-3',
                                url: '/services/electrical/panel-diagnostics/panel-3',
                            },
                        ],
                    },
                ],
            },
            {
                title: 'По корпусным работам',
                url: '/services/hull-work',
                img: '',
                items: [
                    {
                        title: 'Сварочные работы',
                        url: '/services/hull-work/welding',
                        items: [
                            {
                                title: 'Сварка-1',
                                url: '/services/hull-work/welding/welding-1',
                            },
                            {
                                title: 'Сварка-2',
                                url: '/services/hull-work/welding/welding-2',
                            },
                            {
                                title: 'Сварка-3',
                                url: '/services/hull-work/welding/welding-3',
                            },
                        ],
                    },
                    {
                        title: 'Покраска и обработка корпуса',
                        url: '/services/hull-work/painting',
                        items: [
                            {
                                title: 'Покраска корпуса-1',
                                url: '/services/hull-work/painting/painting-1',
                            },
                            {
                                title: 'Покраска корпуса-2',
                                url: '/services/hull-work/painting/painting-2',
                            },
                            {
                                title: 'Покраска корпуса-3',
                                url: '/services/hull-work/painting/painting-3',
                            },
                        ],
                    },
                    {
                        title: 'Ремонт и восстановление корпуса',
                        url: '/services/hull-work/hull-repair',
                        items: [
                            {
                                title: 'Ремонт корпуса-1',
                                url: '/services/hull-work/hull-repair/hull-1',
                            },
                            {
                                title: 'Ремонт корпуса-2',
                                url: '/services/hull-work/hull-repair/hull-2',
                            },
                            {
                                title: 'Ремонт корпуса-3',
                                url: '/services/hull-work/hull-repair/hull-3',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        title: 'О компании',
        url: RouteId.ABOUT,
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
