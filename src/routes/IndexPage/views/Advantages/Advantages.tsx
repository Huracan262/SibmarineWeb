import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './Advantages.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IAdvantages {

}

const Advantages: React.FC<IAdvantages> = ({...props}) => {
    const bem = useBem('Advantages');

    return (
        <div className={bem.block()}>
            {'Advantages'}
        </div>
    );
};

export default Advantages;
