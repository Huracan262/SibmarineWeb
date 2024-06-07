import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './ProductCard.scss';
import {Link} from '@steroidsjs/core/ui/nav';

const ProductCard = ({product}) => {
    const bem = useBem('ProductCard');

    return (
        <li
            className={bem.block()}
        >
            <Link
                className={bem.element('link')}
                toRoute=""
            >
                <h2 className={bem.element('title')}>
                    {product.title}
                </h2>

                <table className={bem.element('table')}>
                    <tbody>
                        <tr>
                            <th>Какая-то характеристика</th>
                            <td>Значение характеристики</td>
                        </tr>

                        <tr>
                            <th>Какая-то характеристика</th>
                            <td>Значение характеристики</td>
                        </tr>

                        <tr>
                            <th>Какая-то характеристика</th>
                            <td>Значение характеристики</td>
                        </tr>
                    </tbody>
                </table>

                <strong className={bem.element('price')}>22000</strong>

                <img
                    className={bem.element('img')}
                    src=''
                    alt=''
                />
            </Link>
        </li>
    );
};

export default ProductCard;
