import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import Button from 'ui/Button';

import './Main.scss';
import useOpenModal from '../../../../hooks/useOpenModal';
import {APPLICATION_FORM_MODAL_ID} from '../../../../modals/ApplicationFormModal/ApplicationFormModal';

interface IMain {
    item: any, // TODO - any
}

const Main = ({item}: IMain) => {
    const bem = useBem('Main');

    const openModal = useOpenModal(APPLICATION_FORM_MODAL_ID);

    return (
        <section className={bem.block()}>
            <h1 className='visually-hidden'>
                {item.title}
            </h1>

            <img
                className={bem.element('slider')}
                src={item.images}
                alt=''
            />

            <div className={bem.element('main')}>
                <div className={bem.element('title-container')}>
                    <strong className={bem.element('title')}>
                        {item.title}
                    </strong>

                    {!!item.productCode && (
                        <small className={bem.element('product-code')}>
                            {'Артикул: '}
                            {item.productCode}
                        </small>
                    )}
                </div>

                <img
                    className={bem.element('manufacturer-logo')}
                    src={item.manufacturer}
                    alt={item.manufacturer.slice(21, item.manufacturer.length - 4)}
                />

                <div className={bem.element('addition-container')}>
                    <span className={bem.element('price-title')}>
                        Цена:
                    </span>

                    <span className={bem.element('price')}>
                        {item.price ?? 'По запросу'}
                    </span>

                    <Button onClick={openModal}>
                        Приобрести
                    </Button>
                </div>

                <small className={bem.element('availability')}>
                    {item.availability ? 'В наличии' : 'Под заказ'}
                </small>

                <div className={bem.element('short-lists')}>
                    <div className={bem.element('specifications')}>
                        <h3 className={bem.element('specifications-title')}>
                            Технические характеристики
                        </h3>

                        <ul className={bem.element('specifications-list')}>
                            {item.characteristics.slice(0, 5).map((characteristic, index) => (
                                <li
                                    className={bem.element('specifications-item')}
                                    key={index}
                                >
                                    {characteristic}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={bem.element('advantages')}>
                        <h3 className={bem.element('advantages-title')}>Преимущества</h3>

                        <ul className={bem.element('advantages-list')}>
                            {item.advantages.slice(0, 5).map((advantage, index) => (
                                <li
                                    className={bem.element('advantages-item')}
                                    key={index}
                                >
                                    {advantage}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Main;
