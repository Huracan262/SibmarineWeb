import React from 'react';

import Marquee from 'react-fast-marquee';

import useBem from '@steroidsjs/core/hooks/useBem';

import PARTNERS_LIST from 'data/PARTNERS_LIST';

import './Partners.scss';
import Wrapper from 'shared/Wrapper';

const Partners: React.FC = () => {
    const bem = useBem('Partners');

    return (
        <section className={bem.block()}>
            <Wrapper>
                <h2>Партнеры</h2>

                <ul>
                    <Marquee
                        speed={30}
                        gradient
                        gradientColor="#162639"
                        style={{overflow: 'clip'}}
                    >
                        {PARTNERS_LIST.map(item => (
                            <li key={item.title}>
                                <img
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
