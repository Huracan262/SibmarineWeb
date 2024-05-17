import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import MAP_URL from './data/MAP_URL';

import './Map.scss';

const Map: React.FC = () => {
    const bem = useBem('Map');

    return (
        <aside className={bem.block()}>
            <iframe
                className={bem.element('iframe')}
                title='Map'
                src={MAP_URL}
                allowFullScreen
            />
        </aside>
    );
};

export default Map;
