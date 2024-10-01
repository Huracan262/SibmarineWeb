import React from 'react';

import {Link} from '@steroidsjs/core/ui/nav';
import useBem from '@steroidsjs/core/hooks/useBem';

import formatDate from 'utils/formatDate';

import './NewsElement.scss';

interface INewsElement {
    element: any, //todo - Any
    key?: number,
}

const NewsElement = ({element}: INewsElement) => {
    const bem = useBem('NewsElement');

    return (
        <article className={bem.block()}>
            <div className={bem.element('container')}>
                <h3 className={bem.element('title')}>{element.title}</h3>
                <p className={bem.element('description')}>{element.description}</p>

                <div className={bem.element('addition')}>
                    <Link
                        className={bem.element('link')}
                        toRoute={element.url}
                    >
                        Подробнее
                    </Link>

                    <time
                        className={bem.element('date')}
                        dateTime={element.date}
                    >
                        {formatDate(element.date)}
                    </time>
                </div>
            </div>

            <img
                className={bem.element('img')}
                src={element.img.length === 0 ? '/images/news/icon.jpg': element.img[0]}
                alt={element.imgTitle}
            />
        </article>
    );
};

export default NewsElement;
