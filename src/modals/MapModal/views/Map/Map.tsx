import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import {MAP_URL, MAP_URL2, MAP_URL3, MAP_URL4} from './data/constants';

import './Map.scss';

const Map: React.FC = () => {
    const bem = useBem('Map');

    return (
        <aside className={bem.block()}>
            <a href={MAP_URL4}>СибМарин Трейд</a>
            <a href={MAP_URL3}>Судовое оборудование в Красноярске</a>
            <a href={MAP_URL2}>Электротехническая продукция в Красноярске</a>
            <iframe
                title='Map'
                src={MAP_URL}
                width="1000"
                height="500"
                allowFullScreen
            />
        </aside>
    );
};

export default Map;
