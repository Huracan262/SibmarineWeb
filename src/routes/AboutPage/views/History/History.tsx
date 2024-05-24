import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import Marquee from 'react-fast-marquee';

import Title from 'ui/Title';
import Wrapper from 'shared/Wrapper';

import './History.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface162639
interface IHistory {

}

const History: React.FC<IHistory> = ({...props}) => {
    const bem = useBem('History');

    return (
        <section className={bem.block()}>
            <Wrapper>
                <Title>История</Title>

                <ol className={bem.element('list')}>
                    <Marquee
                        pauseOnHover={true}
                        gradient
                        gradientColor="#162639"
                        speed={30}
                        style={{overflow: 'clip'}}
                    >
                        <li className={bem.element('item')}>
                            <h3 className={bem.element('item-title')}>2012</h3>
                            <p className={bem.element('text')}>Тут текст информации по дате</p>
                        </li>
                        <li className={bem.element('item')}>
                            <h3 className={bem.element('item-title')}>2012</h3>
                            <p className={bem.element('text')}>Тут текст информации по дате</p>
                        </li>
                        <li className={bem.element('item')}>
                            <h3 className={bem.element('item-title')}>2012</h3>
                            <p className={bem.element('text')}>Тут текст информации по дате</p>
                        </li>
                        <li className={bem.element('item')}>
                            <h3 className={bem.element('item-title')}>2012</h3>
                            <p className={bem.element('text')}>Тут текст информации по дате</p>
                        </li>
                        <li className={bem.element('item')}>
                            <h3 className={bem.element('item-title')}>2012</h3>
                            <p className={bem.element('text')}>Тут текст информации по дате</p>
                        </li>
                        <li className={bem.element('item')}>
                            <h3 className={bem.element('item-title')}>2012</h3>
                            <p className={bem.element('text')}>Тут текст информации по дате</p>
                        </li>
                    </Marquee>
                </ol>
            </Wrapper>
        </section>
    );
};

export default History;
