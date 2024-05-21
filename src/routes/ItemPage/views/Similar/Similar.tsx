import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './Similar.scss';

interface ISimilar {
    item: any, // TODO - any
}

const Similar = (items: ISimilar) => {
    const bem = useBem('Similar');

    return (
        <article className={bem.block()}>
            <h2 className={bem.element('title')}>Похожие товары</h2>

            <ul className={bem.element('list')}>
                <li className={bem.element('item')}>
                    <img
                        className={bem.element('item-img')}
                        src=""
                        alt=""
                    />

                    <h3 className={bem.element('item-title')}>
                        Рация Ермак 361
                    </h3>

                    <ul className={bem.element('item-list')}>
                        <li className={bem.element('item-item')}>
                            Диапазон частот: 320-340
                        </li>
                        <li className={bem.element('item-item')}>
                            Заряд батареек: 2 часа
                        </li>
                        <li className={bem.element('item-item')}>
                            Корпус: пластик
                        </li>
                    </ul>

                    <span className={bem.element('item-price')}>
                        3 560₽
                    </span>
                </li>

                <li className={bem.element('item')}>
                    <img
                        className={bem.element('item-img')}
                        src=""
                        alt=""
                    />

                    <h3 className={bem.element('item-title')}>
                        Рация Ермак 362
                    </h3>

                    <ul className={bem.element('item-list')}>
                        <li className={bem.element('item-item')}>
                            Диапазон частот: 320-340
                        </li>
                        <li className={bem.element('item-item')}>
                            Заряд батареек: 2 часа
                        </li>
                        <li className={bem.element('item-item')}>
                            Корпус: пластик
                        </li>
                    </ul>

                    <span className={bem.element('item-price')}>
                        3 560₽
                    </span>
                </li>

                <li className={bem.element('item')}>
                    <img
                        className={bem.element('item-img')}
                        src=""
                        alt=""
                    />

                    <h3 className={bem.element('item-title')}>
                        Рация Ермак 363
                    </h3>

                    <ul className={bem.element('item-list')}>
                        <li className={bem.element('item-item')}>
                            Диапазон частот: 320-340
                        </li>
                        <li className={bem.element('item-item')}>
                            Заряд батареек: 2 часа
                        </li>
                        <li className={bem.element('item-item')}>
                            Корпус: пластик
                        </li>
                    </ul>

                    <span className={bem.element('item-price')}>
                        3 560₽
                    </span>
                </li>

                <li className={bem.element('item')}>
                    <img
                        className={bem.element('item-img')}
                        src=""
                        alt=""
                    />

                    <h3 className={bem.element('item-title')}>
                        Рация Ермак 364
                    </h3>

                    <ul className={bem.element('item-list')}>
                        <li className={bem.element('item-item')}>
                            Диапазон частот: 320-340
                        </li>
                        <li className={bem.element('item-item')}>
                            Заряд батареек: 2 часа
                        </li>
                        <li className={bem.element('item-item')}>
                            Корпус: пластик
                        </li>
                    </ul>

                    <span className={bem.element('item-price')}>
                        3 560₽
                    </span>
                </li>
            </ul>
        </article>
    );
};

export default Similar;
