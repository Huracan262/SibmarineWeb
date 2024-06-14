import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './ServiceItemPage.scss';
import Wrapper from '../../shared/Wrapper';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IServiceItemPage {

}

const ServiceItemPage: React.FC<IServiceItemPage> = ({...props}) => {
    const bem = useBem('ServiceItemPage');

    return (
        <main className={bem.block()}>
            <Wrapper>
                <div></div>
            </Wrapper>
        </main>
    );
};

export default ServiceItemPage;
