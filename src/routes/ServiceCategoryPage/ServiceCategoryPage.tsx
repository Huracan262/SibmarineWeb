import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './ServiceCategoryPage.scss';
import Wrapper from '../../shared/Wrapper';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IServiceCategoryPage {

}

const ServiceCategoryPage: React.FC<IServiceCategoryPage> = ({...props}) => {
    const bem = useBem('ServiceCategoryPage');

    return (
        <main className={bem.block()}>
            <Wrapper>
                <div></div>
            </Wrapper>
        </main>
    );
};

export default ServiceCategoryPage;
