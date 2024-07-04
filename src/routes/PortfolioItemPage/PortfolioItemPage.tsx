import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';
import {Breadcrumbs} from '@steroidsjs/core/ui/nav';

import Title from 'ui/Title';
import Wrapper from 'shared/Wrapper';

import './PortfolioItemPage.scss';

interface IPortfolioItemPage {
    title: string,
    description: string,
    date: string,
    img: string[],
}

const PortfolioItemPage: React.FC<IPortfolioItemPage> = (item) => {
    const bem = useBem('PortfolioItemPage');

    return (
        <main className={bem.block()}>
            <Wrapper>
                <Breadcrumbs
                    className={bem.element('breadcrumbs')}
                />

                <Title className={bem.element('main-title')}>
                    {item.title}
                </Title>

                <small>
                    {item.date}
                </small>

                <div className={bem.element('container')}>
                    <img
                        className={bem.element('img')}
                        src={item.img[0]}
                        alt={item.title}
                    />

                    <p className={bem.element('description')}>
                        {item.description}
                    </p>
                </div>
            </Wrapper>
        </main>
    );
};

export default PortfolioItemPage;
