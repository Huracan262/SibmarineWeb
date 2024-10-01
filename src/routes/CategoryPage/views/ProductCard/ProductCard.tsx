import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';
import {Link} from '@steroidsjs/core/ui/nav';

import './ProductCard.scss';

const ProductCard = ({product}) => {
    const bem = useBem('ProductCard');

    return (
        <li
            className={bem.block()}
        >
            <Link
                className={bem.element('link')}
                toRoute={product.url}
            >
                <h2 className={bem.element('title')}>
                    {product.title}
                </h2>

                <table className={bem.element('table')}>
                    <tbody>
                        {product.characteristics.slice(0, 3).map((characteristic, index) => (
                            <tr key={index}>
                                {/*<th>{characteristic}</th>*/}
                                <td>{characteristic}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <strong className={bem.element('price')}>
                    {product.price || 'По запросу'}
                </strong>

                <img
                    className={bem.element('img')}
                    src={product.images}
                    alt={product.title}
                />
            </Link>
        </li>
    );
};

export default ProductCard;
