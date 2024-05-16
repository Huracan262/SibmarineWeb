import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './Advantages.scss';
import Wrapper from '../../../../shared/Wrapper';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IAdvantages {

}

const Advantages: React.FC<IAdvantages> = ({...props}) => {
    const bem = useBem('Advantages');

    return (
        <div className={bem.block()}>
            <Wrapper>
                {'Advantages'}
            </Wrapper>
        </div>
    );
};

export default Advantages;
