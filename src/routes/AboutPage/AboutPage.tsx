import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import useOpenModal from 'hooks/useOpenModal';

import './AboutPage.scss';
import Wrapper from '../../shared/Wrapper';
import Banner from './views/Banner';
import History from './views/History';
import Values from './views/Values';
import Directions from './views/Directions';
import Statistics from './views/Statistics';
import Team from './views/Team';
import Application from '../../Application';

const AboutPage: React.FC = () => {
    const bem = useBem('AboutPage');

    return (
        <main className={styles.pageAbout}>
            <Wrapper>
                {/*<div className={styles.wrapper}>*/}
                {/*    <Breadcrumb/>*/}
                {/*</div>*/}

                <Banner />

                <History />

                <Values />

                <Directions />

                <Statistics />

                <Team />

                <Application />
            </Wrapper>
        </main>
    );
};

export default AboutPage;
