import React, {useState} from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import Wrapper from '../../shared/Wrapper';
import {Breadcrumbs} from '@steroidsjs/core/ui/nav';
import Menu from './views/Menu';

import './CertificatesPage.scss';
import Documentation from './views/Documentation';
import Title from '../../ui/Title';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ICertificatesPage {

}

const CertificatesPage: React.FC<ICertificatesPage> = ({...props}) => {
    const [activeCategories, setActiveCategories] = useState([]);

    const bem = useBem('CertificatesPage');

    return (
        <main className={bem.block()}>
            <Wrapper className={bem.element('wrapper')}>
                <Breadcrumbs
                    className={bem.element('breadcrumbs')}
                />

                <Title className={bem.element('title')}>
                    Сертификаты и лицензии
                </Title>

                <div className={bem.element('container')}>
                    <Menu
                        activeCategories={activeCategories}
                        setActiveCategories={setActiveCategories}
                    />

                    <Documentation activeCategories={activeCategories} />
                </div>

            </Wrapper>
        </main>
    );
};

export default CertificatesPage;
