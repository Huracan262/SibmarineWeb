import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './Warranty.scss';
import Wrapper from '../../../../shared/Wrapper';
import Title from '../../../../ui/Title';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IWarranty {

}

const Warranty: React.FC<IWarranty> = ({...props}) => {
    const bem = useBem('Warranty');

    return (
        <div className={bem.block()}>
            <Wrapper>
                <Title>Гарантии</Title>
            </Wrapper>
        </div>
    );
};

export default Warranty;
