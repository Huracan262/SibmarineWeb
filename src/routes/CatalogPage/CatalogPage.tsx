import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';
import Pagination from '@steroidsjs/core/ui/list/Pagination/Pagination';

import './CatalogPage.scss';
import {Breadcrumbs, Link} from '@steroidsjs/core/ui/nav';
import Wrapper from '../../shared/Wrapper';
import Filter from '../CategoryPage/views/Filter';
import ProductCard from '../CategoryPage/views/ProductCard';
import SeoText from './views/SeoText';

const CatalogPage = (category) => {
    const bem = useBem('CatalogPage');

    return (
        <main className={bem.block()}>
            <Wrapper>
                <Breadcrumbs
                    className={bem.element('breadcrumbs')}
                />

                <h1 className={bem.element('title')}>
                    {category.title}
                </h1>

                <div className={bem.element('container')}>
                    <Filter className={bem.element('filters')} />

                    <div className={bem.element('products-container')}>
                        <div className={bem.element('sort')}>
                            filters block
                        </div>

                        <ul className={bem.element('products-list')}>
                            {category.items.slice(0, 9)
                                .map((productCard, index, list) => (
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
