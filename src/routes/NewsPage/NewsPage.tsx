import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './NewsPage.scss';
import Wrapper from '../../shared/Wrapper';
import {Breadcrumbs, Link} from '@steroidsjs/core/ui/nav';
import NEWS_LIST from '../../data/NEWS_LIST';
import formatDate from '../../utils/formatDate';
import Title from '../../ui/Title';
import Theme from '../../enums/Theme';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface INewsPage {

}

const NewsPage: React.FC<INewsPage> = () => {
    const bem = useBem('NewsPage');

    return (
        <main className={bem.block()}>
            <Wrapper>
                <Breadcrumbs
                    className={bem.element('breadcrumbs')}
                    showIcon
                />

                <Title
                    className={bem.element('title')}
                    theme={Theme.light}
                >
                    Новости
                </Title>

                <ul className={bem.element('list')}>
                    {NEWS_LIST.map((item, index: number) => (
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

                                <p className={bem.element('description')}>
                                    {item.description}
                                </p>

                                <span className={bem.element('date')}>
                                    {formatDate(item.date)}
                                </span>

                                <img
                                    className={bem.element('item-img')}
                                    src={item.img.length === 0 ? 'images/news/icon.jpg' : item.img[0]}
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

export default NewsPage;
