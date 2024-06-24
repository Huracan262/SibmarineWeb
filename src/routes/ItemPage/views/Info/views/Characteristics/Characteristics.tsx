import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './Characteristics.scss';
import characteristics from './index';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ICharacteristics {
    item: any, // TODO - any
}

const Characteristics: React.FC<ICharacteristics> = ({item}) => {
    const bem = useBem('Info');

    return (
        <ul>
            {item.characteristics.map((characteristic, index) => (
                <li
                    className={bem.element('')}
                    key={index}
                >
                    {characteristic}
                </li>
            ))}
        </ul>
    );
};

export default Characteristics;
