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
                            src='/images/about/directions.jpg'
                            alt=""
                        />
                    </p>

                    <ul className={bem.element('list')}>
                        <li className={bem.element('item')}>
                            • Поставки оборудования •
                        </li>
                        <li className={bem.element('item')}>
                            • Оказание сервисных услуг •
                        </li>
                        <li className={bem.element('item')}>
                            • Выполнение ежегодных актов •
                        </li>
                        <li className={bem.element('item')}>
                            • Строительство судов •
                        </li>
                        <li className={bem.element('item')}>
                            • Обучение персонала •
                        </li>
                    </ul>
                </div>
            </Wrapper>
        </section>
    );
};

export default Directions;
