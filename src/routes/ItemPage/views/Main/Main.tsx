import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import Availability from 'enums/Availability';

import './Main.scss';
import Button from '../../../../ui/Button';

interface IMain {
    item: any, // TODO - any
}

const Main = ({item}: IMain) => {
    const bem = useBem('Main');

    return (
        <section className={bem.block()}>
            <h1 className='visually-hidden'>Рация Ермак 360</h1>

            <img
                className={bem.element('slider')}
                src={item.img[0].img}
                alt={item.title}
            />

            <div className={bem.element('main')}>
                <div className={bem.element('title-container')}>
                    <strong className={bem.element('title')}>Рация Ермак 360</strong>

                    <small className={bem.element('product-code')}>
                        Артикул: {}
                        <span>131415</span>
                    </small>
                </div>

                <img
                    className={bem.element('manufacturer-logo')}
                    src={item.img[0].img}
                    alt={item.title}
                />

                <div className={bem.element('addition-container')}>
                    <span className={bem.element('price')}>
                        1200
                        <span>₽</span>
                    </span>

                    <Button>Приобрести</Button>
                </div>

                <small className={bem.element('availability')}>{Availability.Availability}</small>

                <div className={bem.element('short-lists')}>
                    <div className={bem.element('specifications')}>
                        <h3 className={bem.element('specifications-title')}>Технические характеристики</h3>

                        <ul className={bem.element('specifications-list')}>
                            <li className={bem.element('specifications-item')}>
                                Пример
                            </li>
                            <li className={bem.element('specifications-item')}>
                                Пример
                            </li>
                            <li className={bem.element('specifications-item')}>
                                Пример
                            </li>
                        </ul>
                    </div>

                    <div className={bem.element('advantages')}>
                        <h3 className={bem.element('advantages-title')}>Преимущества</h3>

                        <ul className={bem.element('advantages-list')}>
                            <li className={bem.element('advantages-item')}>
                                Пример
                            </li>
                            <li className={bem.element('advantages-item')}>
                                Пример
                            </li>
                            <li className={bem.element('advantages-item')}>
                                Пример
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Main;
