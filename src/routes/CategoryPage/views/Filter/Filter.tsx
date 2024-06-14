import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './Filter.scss';

const Filter = ({className = ''}) => {
    const bem = useBem('Filter');

    return (
        <form className={`${className} ${bem.block()}`}>
            <fieldset className={bem.element('block')}>
                <legend className={bem.element('title')}>Наличие</legend>

                <label className={bem.element('label')}>
                    <input
                        className={bem.element('input')}
                        type="checkbox" />
                    В наличии
                </label>


                <label className={bem.element('label')}>
                    <input
                        className={bem.element('input')}
                        type="checkbox" />
                    Под заказ
                </label>
            </fieldset>

            <fieldset className={bem.element('block')}>
                <legend className={bem.element('title')}>Производитель</legend>

                <label className={bem.element('label')}>
                    <input
                        className={bem.element('input')}
                        type="checkbox" />
                    Китай
                </label>

                <label className={bem.element('label')}>
                    <input
                        className={bem.element('input')}
                        type="checkbox" />
                    Россия
                </label>
            </fieldset>

            <fieldset className={bem.element('block')}>
                <legend className={bem.element('title')}>По цене</legend>
            </fieldset>
        </form>
    );
};

export default Filter;
