import React from 'react';
import {FaList} from 'react-icons/fa';

import RouteId from 'enums/RouteId';
import mechanisms from './mechanisms/mechanisms';
import elektrical from './elektrical/elektrical';
import radio from './radio/radio';

const catalog = {
    title: 'Каталог',
    url: RouteId.CATALOG,
    icon: <FaList />,
    items: [
        mechanisms,
        elektrical,
        radio,
    ],
};

export default catalog;
