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
                            <h3 className={bem.element('item-title')}>2016</h3>
                            <p className={bem.element('text')}>Дата основания компании</p>
                        </li>
                        <li className={bem.element('item')}>
                            <h3 className={bem.element('item-title')}>2020</h3>
                            <p className={bem.element('text')}>Получения признания на: модернизацию, переоборудование, обновление и ремонт судов/плавучих объектов.</p>
                        </li>
                        <li className={bem.element('item')}>
                            <h3 className={bem.element('item-title')}>2020</h3>
                            <p className={bem.element('text')}>Получения признания на: разработку технической документации на ремонт, модернизацию, переоборудование судов/плавучих объектов.</p>
                        </li>
                        <li className={bem.element('item')}>
                            <h3 className={bem.element('item-title')}>2023</h3>
                            <p className={bem.element('text')}>Получения признания на: строительство несамоходных судов и плавучих объектов с классом Российского Классификационного Общества.</p>
                        </li>
                        <li className={bem.element('item')}>
                            <h3 className={bem.element('item-title')}>2024</h3>
                            <p className={bem.element('text')}>Получения признания на: ремонт, монтаж, наладка систем АПС на судах с классом Российского Классификационного Общества.</p>
                        </li>
                        <li className={bem.element('item')}>
                            <h3 className={bem.element('item-title')}>2024</h3>
                            <p className={bem.element('text')}>Получения признания на: изготовление, ремонт, монтаж судового оборудования и систем по согласованной документации Российского Классификационного Общества</p>
                        </li>
                        <li className={bem.element('item')}>
                            <h3 className={bem.element('item-title')}>2024</h3>
                            <p className={bem.element('text')}>Получения признания на: модернизацию, переоборудование, обновление и ремонт судов/плавучих объектов.</p>
                        </li>
                        <li className={bem.element('item')}>
                            <h3 className={bem.element('item-title')}>2024</h3>
                            <p className={bem.element('text')}>Получения признания на: монтаж и наладка элементов судна на судах с классом Российского Классификационного Общества</p>
                        </li>
                    </Marquee>
                </ol>
            </Wrapper>
        </section>
    );
};

export default History;
