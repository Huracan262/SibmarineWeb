import React from 'react';
import {MdBuild} from 'react-icons/md';

import RouteId from 'enums/RouteId';

import hullWorks from './hull-works/hull-works';
import electrical from './electrical/electrical';
import maintenance from './maintenance/maintenance';

const services = {
    title: 'Услуги',
    url: RouteId.SERVICES,
    icon: <MdBuild />,
    items: [
        hullWorks,
        electrical,
        maintenance,
    ],
};

export default services;
