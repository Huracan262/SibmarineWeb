import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import Wrapper from 'shared/Wrapper';
import Title from 'ui/Title';
import Theme from 'enums/Theme';
import getWhiteModifier from 'utils/getWhiteModifier';
import ADVANTAGES_LIST from 'data/ADVANTAGES_LIST';

import './Advantages.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IAdvantages {
    theme: Theme,
}

const Advantages = ({theme}: IAdvantages) => {
    const bem = useBem('Advantages');

    return (
        <section className={getWhiteModifier(bem.block(), theme)}>
            <Wrapper>
                <Title theme={theme}>Преимущества</Title>

                <ul className={bem.element('list')}>
                    {ADVANTAGES_LIST.map((item, index) => (
                        <li
                            className={bem.element('item')}
                            key={index}
                        >
                            <div className={bem.element('icon')}>
                                {item.icon}
                            </div>

                            <h3 className={bem.element('title')}>
                                {item.title}
                            </h3>

                            <img
                                className={bem.element('img')}
                                src={item.src}
                                alt={item.title}
                            />
                        </li>
                    ))}
                </ul>
            </Wrapper>
        </section>
    );
};

export default Advantages;
