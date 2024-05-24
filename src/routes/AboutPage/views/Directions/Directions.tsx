import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './Directions.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IDirections {

}

const Directions: React.FC<IDirections> = ({...props}) => {
    const bem = useBem('Directions');

    return (
        <section className={bem.block()}>
            <div className={styles.wrapper}>
                <Title>Сферы работы</Title>

                <div className={styles.sferaContainer}>
                    <p className={styles.sferaImg}>
                        <img src="" alt=""/>
                    </p>

                    <ul className={styles.sferaList}>
                        <li className={styles.sferaItem}>
                            Сфера №1
                        </li>
                        <li className={styles.sferaItem}>
                            Сфера №2
                        </li>
                        <li className={styles.sferaItem}>
                            Сфера №3
                        </li>
                        <li className={styles.sferaItem}>
                            Сфера №4
                        </li>
                        <li className={styles.sferaItem}>
                            Сфера №5
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Directions;
