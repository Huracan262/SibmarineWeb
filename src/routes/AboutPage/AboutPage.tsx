import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import useOpenModal from 'hooks/useOpenModal';

import './AboutPage.scss';

const AboutPage: React.FC = () => {
    const bem = useBem('AboutPage');

    return (
        <div className={bem.block()}>
            <span className={bem.block()}>AboutPage</span>
        </div>
    );
};

export default AboutPage;
