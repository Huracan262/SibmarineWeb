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
                        <h3 className={bem.element('item-title')}>Ценность</h3>
                    </li>

                    <li className={bem.element('item')}>
                        <h3 className={bem.element('item-title')}>Ценность</h3>
                    </li>

                    <li className={bem.element('item')}>
                        <h3 className={bem.element('item-title')}>Ценность</h3>
                    </li>

                    <li className={bem.element('item')}>
                        <h3 className={bem.element('item-title')}>Ценность</h3>
                    </li>
                </ul>
            </Wrapper>
        </section>
    );
};

export default Values;
