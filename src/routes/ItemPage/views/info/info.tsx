import React, {useState} from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './info.scss';
import tabs from './data/tabs';

interface Iinfo {
    item: any, // TODO - any
}

const info = ({item}: Iinfo) => {
    const bem = useBem('info');

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
                <p className={bem.element('description')}>
                    Радиолокационный ответчик "Курс" - устройство ГМССБ отечественного производства, имеющее сертификат РМРС предназначенное для гражданских судов. В случае бедствия РЛО "Курс" позволяет своевременно обнаружить терпящее бедствие судно при проведении поисково-спасательных операций. Прибор сконструирован в полном соответствии с требованиями ГМССБ и соответствующими Резолюциями Международной Морской Организации (IMO). Принцип действия РЛО основан на передаче ответа поисковой РЛС в условленном диапазоне частот 9.2 - 9.5 ГГц.
                    Радиолокационный ответчик может автономно работать до четырех суток в режиме ожидания и до восьми часов в режиме ответа, работая от двух батарей типа ER34615M (LSH-20) со сроком замены раз в пять лет. Конструктивно ответчик выполнен вместе с установочным кронштейном и консолью для установки, ориентирован на безотказную работу в условиях морской воды, в том числе загрязненной нефтепродуктами, а также под воздействием прямых солнечных лучей. Прибор снабжен индикацией режимов работы
                </p>

                <div className={bem.element('container')}>
                    <img
                        className={bem.element('rko-logo')}
                        src=""
                        alt="РКО"
                    />

                    <small className={bem.element('license')}>Сертификат РКО</small>
                </div>
            </div>
        </section>
    );
};

export default info;
