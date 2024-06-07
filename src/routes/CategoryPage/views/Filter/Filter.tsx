import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './Filter.scss';

const Filter = ({className = ''}) => {
    const bem = useBem('Filter');

    return (
        <form className={`${className} ${bem.block()}`}>
            <fieldset>
                <legend>Наличие</legend>

                <input type="checkbox"/>
                <label>В наличии</label>

                <input type="checkbox"/>
                <label>Под заказ</label>
            </fieldset>

            <fieldset>
                <legend>Производитель</legend>

                <input type="checkbox"/>
                <label>Китай</label>

                <input type="checkbox"/>
                <label>Россия</label>
            </fieldset>

            <fieldset>
                <legend>По цене</legend>
            </fieldset>
        </form>
    );
};

export default Filter;
