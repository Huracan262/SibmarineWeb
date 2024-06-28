import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';
import {Breadcrumbs} from '@steroidsjs/core/ui/nav';

import RouteId from 'enums/RouteId';
import Wrapper from 'shared/Wrapper';

import './NewsItemPage.scss';
import formatDate from '../../utils/formatDate';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface INewsItemPage {
        title: string,
        description: string,
        img: string[],
        url: RouteId,
        date: string,
}

const NewsItemPage: React.FC<INewsItemPage> = (item) => {
    const bem = useBem('NewsItemPage');

    return (
        <main className={bem.block()}>
            <Wrapper>
                <Breadcrumbs
                    className={bem.element('breadcrumbs')}
                />

                <section className={bem.element('item-block')}>
                    <h1 className={bem.element('title')}>
                        {item.title}
                    </h1>

                    <span className={bem.element('date')}>
                        {formatDate(item.date)}
                    </span>

                    <div className={bem.element('container')}>
                        <p className={bem.element('description')}>
                            {item.description}
                        </p>

                        <img
                            className={bem.element('img')}
                            src={item.img.length === 0 ? '/images/news/icon.jpg' : item.img[0]}
                            alt={item.title}
                        />
                    </div>
                </section>
            </Wrapper>
        </main>
    );
};

export default NewsItemPage;
