import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './Equipment.scss';

interface IEquipment {
    item: any, // TODO - any
}

const Equipment: React.FC<IEquipment> = ({item}) => {
    const bem = useBem('Info');

    return (
        <ul>
            {item.equipment.map((eq, index) => (
                <li
                    className={bem.element('')}
                    key={index}
                >
                    {eq}
                </li>
            ))}
        </ul>
    );
};

export default Equipment;
