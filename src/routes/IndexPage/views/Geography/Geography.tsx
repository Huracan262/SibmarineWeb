import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './Geography.scss';
import Wrapper from '../../../../shared/Wrapper';
import Title from '../../../../ui/Title';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IGeography {

}

const Geography: React.FC<IGeography> = ({...props}) => {
    const bem = useBem('Geography');

    return (
        <div className={bem.block()}>
            <Wrapper>
                <Title>География работ</Title>
            </Wrapper>
        </div>
    );
};

export default Geography;
