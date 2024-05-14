import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import useOpenModal from 'hooks/useOpenModal';

import './AboutPage.scss';

const AboutPage: React.FC = () => {
    const bem = useBem('AboutPage');

    const onClick = useOpenModal();

    return (
        <div className={bem.block()}>
            <button onClick={onClick}>Нажми на меня!</button>
        </div>
    );
};

export default AboutPage;
