import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';
import {Link} from '@steroidsjs/core/ui/nav';

import certificates from 'data/certificates/certificates';
import formatDate from 'utils/formatDate';

import './Documentation.scss';

const Documentation = ({activeCategories}) => {
    const bem = useBem('Documentation');

    const list = activeCategories.length > 0
        ? certificates.filter(sert => activeCategories.some(ac => ac === sert.category) )
        : certificates;

    return (
        <section className={bem.block()}>
            <h2 className='visually-hidden'>Сертификаты</h2>

            <ul className={bem.element('list')}>
                {list.map((sert, index) => (
                    <li
                        className={bem.element('item')}
                        key={index}
                    >
                        <Link
                            className={bem.element('link')}
                            toRoute={sert.url}
                        >
                            <div className={bem.element('container')}>
                                <h3 className={bem.element('title')}>
                                    {sert.title}
                                </h3>

                                <small className={bem.element('category')}>
                                    {sert.category}
                                </small>

                                <small className={bem.element('date')}>
                                    {formatDate(sert.date)}
                                </small>
                            </div>

                            <img
                                className={bem.element('img')}
                                src={sert.img}
                                alt={sert.title}
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Documentation;
