import React, {useState} from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './Info.scss';
import tabs from './data/tabs';
import Description from './views/Description';
import Characteristics from './views/Characteristics';
import Equipment from './views/Equipment';

interface Iinfo {
    item: any, // TODO - any
}

const Info = ({item}: Iinfo) => {
    const bem = useBem('Info');

    const [currentTab, setCurrentTab] = useState(tabs[0]);

    return (
        <section className={bem.block()}>
            <ul className={bem.element('tabs')}>
                {tabs.map((tab: string, index: number) => (
                    <li
                        className={`${bem.element('tab')} ${tab === currentTab ? 'current' : ''}`}
                        onClick={() => setCurrentTab(tab)}
                        key={index}
                    >
                        {tab}
                    </li>
                ))}
            </ul>

            <div className={bem.element('content')}>
                {currentTab === 'Описание' && <Description item={item} />}
                {currentTab === 'Характеристики' && <Characteristics item={item} />}
                {currentTab === 'Комплектация' && <Equipment item={item} />}
            </div>
        </section>
    );
};

export default Info;
