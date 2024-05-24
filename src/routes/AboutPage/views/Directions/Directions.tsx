import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import Wrapper from 'shared/Wrapper';
import Title from 'ui/Title';

import './Directions.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IDirections {

}

const Directions: React.FC<IDirections> = ({...props}) => {
    const bem = useBem('Directions');

    return (
        <section className={bem.block()}>
            <Wrapper>
                <Title>Сферы работы</Title>

                <div className={bem.element('container')}>
                    <p className={bem.element('picture')}>
                        <img
                            className={bem.element('img')}
                            src=""
                            alt=""
                        />
                    </p>

                    <ul className={bem.element('list')}>
                        <li className={bem.element('item')}>
                            Сфера №1
                        </li>
                        <li className={bem.element('item')}>
                            Сфера №2
                        </li>
                        <li className={bem.element('item')}>
                            Сфера №3
                        </li>
                        <li className={bem.element('item')}>
                            Сфера №4
                        </li>
                        <li className={bem.element('item')}>
                            Сфера №5
                        </li>
                    </ul>
                </div>
            </Wrapper>
        </section>
    );
};

export default Directions;
