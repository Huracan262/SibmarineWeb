import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';
import {Link} from '@steroidsjs/core/ui/nav';

import './Catalog.scss';
import Wrapper from '../../../../shared/Wrapper';
import Title from '../../../../ui/Title';
import catalogList from '../../../../data/catalog/catalog';
import RouteId from 'enums/RouteId';
import Button from 'ui/Button';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ICatalog {

}

const Catalog: React.FC<ICatalog> = ({...props}) => {
    const bem = useBem('Catalog');

    return (
        <div className={bem.block()}>
            <Wrapper className={bem.element('wrapper')}>
                <Title link={RouteId.CATALOG}>Каталог</Title>

                <ul className={bem.element('list')}>
                    {catalogList.items
                        .slice(0, 4)
                        .map((item, index) => (
                            <li
                                className={bem.element('item')}
                                key={index}
                            >
                                <Link
                                    className={bem.element('link')}
                                    toRoute={item.url}
                                >
                                    <h3 className={bem.element('item-title')}>
                                        {item.title}
                                    </h3>

                                    <img
                                        className={bem.element('item-img')}
                                        src={item.img}
                                        alt={item.title}
                                    />
                                </Link>
                            </li>
                        ))}
                </ul>

                <Button
                    className={bem.element('button')}
                    onClick={}
                >
                    Смотреть все категории
                </Button>
            </Wrapper>
        </div>
    );
};

export default Catalog;
