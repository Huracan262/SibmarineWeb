import React from 'react';
import {FaList} from 'react-icons/fa';

import RouteId from 'enums/RouteId';

import electro from './electro/electro';
import lighting from './lighting/lighting';
import nav from './nav/nav';
import gmdss from './gmdss/gmdss';
import mech from './mech/mech';
import safety from './safety/safety';
import radio from './radio/radio';

const catalog = {
    title: 'Каталог',
    url: RouteId.CATALOG,
    icon: <FaList />,
    items: [
        electro,
        nav,
        radio,
        gmdss,
        lighting,
        mech,
        safety,
    ],
};

export default catalog;
