import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';
import Pagination from '@steroidsjs/core/ui/list/Pagination/Pagination';
import {Breadcrumbs} from '@steroidsjs/core/ui/nav';

import Wrapper from 'shared/Wrapper';
import SeoText from './views/SeoText';

import Filter from '../CategoryPage/views/Filter';
import ProductCard from '../CategoryPage/views/ProductCard';

import './CatalogPage.scss';

const CatalogPage = (category) => {
    const bem = useBem('CatalogPage');

    return (
        <main className={bem.block()}>
            <Wrapper>
                <Breadcrumbs
                    className={bem.element('breadcrumbs')}
                    showIcon
                />

                <h1 className={bem.element('title')}>
                    {category.title}
                </h1>

                <div className={bem.element('container')}>
                    <Filter className={bem.element('filters')} />

                    <div className={bem.element('products-container')}>
                        <div className={bem.element('sort')}>
                            <button className={`${bem.element('button')} ${bem.element('button-top')}`}></button>
                            <button className={`${bem.element('button')} ${bem.element('button-bottom')}`}></button>
                        </div>

                        <ul className={bem.element('products-list')}>
                            {category.items.slice(0, 9)
                                .map((productCard, index) => (
                                    <ProductCard
                                        product={productCard}
                                        key={index}
                                    />
                                ))}
                        </ul>

                        <Pagination
                            className={bem.element('pagination')}
                            showEdgeSteps
                            aroundCount={1}
                            list={{
                                total: 2,
                                page: 1,
                                pageSize: 1,
                            }}
                        />

                        <SeoText />
                    </div>
                </div>
            </Wrapper>
        </main>
    );
};

export default CatalogPage;
