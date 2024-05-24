import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import Theme from 'enums/Theme';
import getWhiteModifier from 'utils/getWhiteModifier';
import Wrapper from 'shared/Wrapper';

import './Statistics.scss';

interface IStatistics {
    theme: Theme,
}

const Statistics = ({theme}: IStatistics) => {
    const bem = useBem('Statistics');

    return (
        <section className={getWhiteModifier(bem.block(), theme)}>
            <Wrapper className={bem.element('wrapper')}>
                <div className={bem.element('container')}>
                    <h2 className={bem.element('title')}>Темпы роста</h2>
                    <p className={bem.element('description')}>В последние годы компания активно расширяла свою деятельность, открывая новые филиалы и
                        представительства в других регионах и странах. Также были запущены новые направления бизнеса, что позволило
                        диверсифицировать портфель продуктов и услуг и укрепить позиции на рынке</p>

                    <strong className={bem.element('additional')}>
                        +98%<sup>/год</sup>
                    </strong>
                </div>

                <p className={bem.element('picture')}>
                    <img
                        className={bem.element('img')}
                        src=""
                        alt=""
                    />
                </p>
            </Wrapper>
        </section>
    );
};

export default Statistics;
