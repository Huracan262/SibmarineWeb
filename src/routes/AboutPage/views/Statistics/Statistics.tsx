import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './Statistics.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IStatistics {

}

const Statistics: React.FC<IStatistics> = ({...props}) => {
    const bem = useBem('Statistics');

    return (
        <section className={bem.block()}>
            <div className={styles.wrapper}>
                <div className={styles.rostContainer}>
                    <div className={styles.rostDescription}>
                        <h2 className={styles.rostTitle}>Темпы роста</h2>
                        <p className={styles.rostText}>В последние годы компания активно расширяла свою деятельность, открывая новые филиалы и
                            представительства в других регионах и странах. Также были запущены новые направления бизнеса, что позволило
                            диверсифицировать портфель продуктов и услуг и укрепить позиции на рынке</p>

                        <strong className={styles.rostProcent}>
                            +98%<sup>/год</sup>
                        </strong>
                    </div>

                    <p className={styles.rostImg}>
                        <img src="" alt=""/>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Statistics;
