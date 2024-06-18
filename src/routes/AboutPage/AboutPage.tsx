import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';
import {Breadcrumbs} from '@steroidsjs/core/ui/nav';

import './AboutPage.scss';
import Theme from 'enums/Theme';

import Banner from './views/Banner';
import History from './views/History';
import Values from './views/Values';
import Directions from './views/Directions';
import Statistics from './views/Statistics';
import Team from './views/Team';
import Application from './views/Application';
import Wrapper from '../../shared/Wrapper';

const AboutPage: React.FC = () => {
    const bem = useBem('AboutPage');

    return (
        <main className={bem.block()}>
            <Wrapper>
                <Breadcrumbs className={bem.element('breadcrumbs')} />
            </Wrapper>

            <Banner className={bem.element('banner')} />

            <History />

            <Values />

            <Directions />

            <Statistics theme={Theme.light} />

            <Team theme={Theme.light} />

            <Application theme={Theme.light} />
        </main>
    );
};

export default AboutPage;
