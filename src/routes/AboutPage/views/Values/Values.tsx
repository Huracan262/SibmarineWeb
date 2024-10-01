import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import Wrapper from 'shared/Wrapper';
import Title from 'ui/Title';

import './Values.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IValues {

}

const Values: React.FC<IValues> = ({...props}) => {
    const bem = useBem('Values');

    return (
        <section className={bem.block()}>
            <Wrapper>
                <Title>Наши ценности</Title>

                {/*TODO - Оптимизировать ul*/}
                <ul className={bem.element('list')}>
                    <li className={bem.element('item')}>
                        <h3 className={bem.element('item-title')}>Качество и Надежность</h3>

                        <img
                            className={bem.element('img')}
                            src='/images/about/1.jpg'
                            alt='Фотография SibMarine'
                        />
                    </li>

                    <li className={bem.element('item')}>
                        <h3 className={bem.element('item-title')}>Инновации и Развитие</h3>

                        <img
                            className={bem.element('img')}
                            src='/images/about/2.jpg'
                            alt='Фотография SibMarine'
                        />
                    </li>

                    <li className={bem.element('item')}>
                        <h3 className={bem.element('item-title')}>Ответственность и Безопасность</h3>

                        <img
                            className={bem.element('img')}
                            src='/images/about/3.jpg'
                            alt='Фотография SibMarine'
                        />
                    </li>

                    <li className={bem.element('item')}>
                        <h3 className={bem.element('item-title')}>Клиентоориентированность</h3>

                        <img
                            className={bem.element('img')}
                            src='/images/about/4.jpg'
                            alt='Фотография SibMarine'
                        />
                    </li>
                </ul>
            </Wrapper>
        </section>
    );
};

export default Values;
