import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';
import {Breadcrumbs, Link} from '@steroidsjs/core/ui/nav';

import Wrapper from 'shared/Wrapper';

import './CategoryPage.scss';

interface ICategoryPage {
    category: any, // TODO - any
}

const CategoryPage = (category: any) => {
    const bem = useBem('CategoryPage');

    return (
        <main className={bem.block()}>
            <Wrapper>
                <h1 className='visually-hidden'>
                    {category.title}
                </h1>

                <Breadcrumbs
                    className={bem.element('breadcrumbs')}
                    showIcon
                />

                <ul className={bem.element('list')}>
                    {category.items
                        .slice(0.20)
                        .map((item, index: number) => (
                            <li
                                className={bem.element('item')}
                                key={index}
                            >
                                <Link
                                    className={bem.element('link')}
                                    toRoute={item.url}
                                >
                                    <h2 className={bem.element('item-title')}>
                                        {item.title}
                                    </h2>

                                    <img
                                        className={bem.element('item-img')}
                                        src={item.img}
                                        alt={item.title}
                                    />
                                </Link>
                            </li>
                        ))}
                </ul>
            </Wrapper>
        </main>
    );
};

export default CategoryPage;
