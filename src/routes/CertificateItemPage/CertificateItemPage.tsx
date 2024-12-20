import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';
import {Breadcrumbs} from '@steroidsjs/core/ui/nav';

import Wrapper from 'shared/Wrapper';
import formatDate from 'utils/formatDate';

import Title from '../../ui/Title';
import Theme from '../../enums/Theme';

import './CertificateItemPage.scss';

const CertificateItemPage = (cert: any) => {
    const bem = useBem('CertificateItemPage');

    return (
        <main className={bem.block()}>
            <Wrapper className={bem.element('wrapper')}>
                <Breadcrumbs
                    className={bem.element('breadcrumbs')}
                    showIcon
                />

                <section className={bem.element('container')}>
                    <Title
                        className={bem.element('title')}
                        theme={Theme.light}
                    >
                        {cert.title}
                    </Title>

                    <small className={bem.element('date')}>
                        {formatDate(cert.date)}
                    </small>

                    <small className={bem.element('category')}>
                        {cert.category}
                    </small>

                    <img
                        className={bem.element('img')}
                        src={cert.img}
                        alt={cert.title}
                    />

                    <a
                        className={bem.element('button')}
                        href='/download/certificates/RKO.pdf'
                    >
                        Скачать сертификат
                    </a>
                </section>
            </Wrapper>
        </main>
    );
};

export default CertificateItemPage;
