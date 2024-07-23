import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';
import {Breadcrumbs, Link} from '@steroidsjs/core/ui/nav';

import Wrapper from 'shared/Wrapper';
import Title from 'ui/Title';
import portfolio from 'data/portfolio/portfolio';

import './PortfolioPage.scss';
import formatDate from '../../utils/formatDate';
import Theme from '../../enums/Theme';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IPortfolioPage {

}

const PortfolioPage: React.FC<IPortfolioPage> = ({...props}) => {
    const bem = useBem('PortfolioPage');

    return (
        <main className={bem.block()}>
            <Wrapper>
                <Breadcrumbs
                    className={bem.element('breadcrumbs')}
                    showIcon
                />

                <Title
                    className={bem.element('main-title')}
                    theme={Theme.light}
                >
                    Наши работы
                </Title>

                <ul className={bem.element('list')}>
                    {portfolio.map((prod, index) => (
                        <li
                            className={bem.element('item')}
                            key={index}
                        >
                            <Link
                                className={bem.element('link')}
                                toRoute={prod.url}
                            >
                                <div className={bem.element('container')}>
                                    <h3 className={bem.element('title')}>
                                        {prod.title}
                                    </h3>

                                    <p className={bem.element('description')}>
                                        {prod.description}
                                    </p>

                                    <small className={bem.element('date')}>
                                        {formatDate(prod.date)}
                                    </small>
                                </div>

                                <img
                                    className={bem.element('img')}
                                    src={prod.img[0]}
                                    alt={prod.title}
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            </Wrapper>
        </main>
    );
};

export default PortfolioPage;
