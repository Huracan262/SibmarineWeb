import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './Values.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IValues {

}

const Values: React.FC<IValues> = ({...props}) => {
    const bem = useBem('Values');

    return (
        <section className={bem.block()}>
            <div className={styles.wrapper}>
                <Title>Наши ценности</Title>

                <ul className={styles.cennostiList}>
                    <li className={styles.cennostiItem}>
                        <h3 className={styles.cennostiTitle}>Ценность</h3>
                    </li>

                    <li className={styles.cennostiItem}>
                        <h3 className={styles.cennostiTitle}>Ценность</h3>
                    </li>

                    <li className={styles.cennostiItem}>
                        <h3 className={styles.cennostiTitle}>Ценность</h3>
                    </li>

                    <li className={styles.cennostiItem}>
                        <h3 className={styles.cennostiTitle}>Ценность</h3>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Values;
