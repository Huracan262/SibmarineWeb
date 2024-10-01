import React from 'react';

import Marquee from 'react-fast-marquee';

import useBem from '@steroidsjs/core/hooks/useBem';

import PARTNERS_LIST from 'data/PARTNERS_LIST';
import Title from 'ui/Title';
import Wrapper from 'shared/Wrapper';

import './Partners.scss';

const Partners: React.FC = () => {
    const bem = useBem('Partners');

    return (
        <section className={bem.block()}>
            <Wrapper>
                <Title>Партнеры</Title>

                <ul className={bem.element('list')}>
                    <Marquee
                        speed={30}
                        gradient
                        gradientColor="#162639"
                        style={{overflow: 'clip'}}
                    >
                        {PARTNERS_LIST.map((item, index) => (
                            <li
                                className={bem.element('item')}
                                key={index}
                            >
                                <img
                                    className={bem.element('img')}
                                    src={item.src}
                                    alt={item.title}
                                />
                            </li>
                        ))}
                    </Marquee>
                </ul>
            </Wrapper>
        </section>
    );
};

export default Partners;
