import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './Geography.scss';

import GEOGRAPHY_LIST from 'data/GEOGRAPHY_LIST';
import Wrapper from 'shared/Wrapper';
import Title from 'ui/Title';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IGeography {

}

const Geography: React.FC<IGeography> = ({...props}) => {
    const bem = useBem('Geography');

    return (
        <section className={bem.block()}>
            <Wrapper className={bem.element('wrapper')}>
                <Title>География работ</Title>

                <p className={bem.element('description')}>CибМарин - один из лидеров в производстве и поставке
                    радиоэлектронных средств навигации,
                    связи и автоматизированного управления для флота с 2011 года.
                    География наших работ включает в себя крупнейшие порты страны</p>

                <div className={bem.element('map')}>
                    <img
                        className={bem.element('img')}
                        src='images/geography/map.png'
                        alt="Карта работ по россии"
                    />

                    <ul className={bem.element('list')}>
                        {GEOGRAPHY_LIST.map((item, index) => {
                            return (
                                <li
                                    className={bem.element('item')}
                                    style={{top: `${item.yСoordinate}px`, left:`${item.хСoordinate}px`}}
                                    key={index}
                                >
                                    <div className={bem.element('point')}></div>
                                    <div className={bem.element('point-description')}>{item.description}</div>
                                    <span className={bem.element('city')}>{item.city}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </Wrapper>
        </section>
    );
};

export default Geography;
