import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import Marquee from 'react-fast-marquee';

import Wrapper from 'shared/Wrapper';
import Title from 'ui/Title';
import CLIENTS_LIST from 'data/CLIENTS_LIST';

import './Clients.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IClients {

}

const Clients: React.FC<IClients> = ({...props}) => {
    const bem = useBem('Clients');

    return (
        <section className={bem.block()}>
            <Wrapper>
                <Title>Наши клиенты</Title>

                <div className={bem.element('container')}>
                    <p className={bem.element('description')}>
                        Клиенты - основа любой компании. Именно благодаря им мы растём,
                        развиваемся и делаем нашу компанию лучше каждый день. Мы гордимся тем,
                        что помогаем нашим клиентам достигать своих целей и решать различные задачи.
                    </p>

                    <ul className={bem.element('list')}>
                        <Marquee
                            direction="right"
                            speed={30}
                            gradient
                            gradientColor="#162639"
                            style={{overflow: 'clip'}}
                        >
                            {CLIENTS_LIST.map((item, index) => (
                                <li
                                    className={bem.element('item')}
                                    key={index}
                                >
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                    />
                                </li>
                            ))}
                        </Marquee>
                    </ul>
                </div>
            </Wrapper>
        </section>
    );
};

export default Clients;
