import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './History.scss';
import Title from '../../../../ui/Title';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IHistory {

}

const History: React.FC<IHistory> = ({...props}) => {
    const bem = useBem('History');

    return (
        <section className={bem.block()}>
            <div className={styles.wrapper}>
                <Title>История</Title>

                <ol className={styles.historyList}>
                    <Marquee pauseOnHover="true" gradient="gradient" gradientColor="#D3D3D3" speed="30" style={{overflow: 'clip'}}>
                        <li className={styles.historyItem}>
                            <h3 className={styles.historyTitle}>2012</h3>
                            <p>Тут текст информации по дате</p>
                        </li>
                        <li className={styles.historyItem}>
                            <h3 className={styles.historyTitle}>2012</h3>
                            <p>Тут текст информации по дате</p>
                        </li>
                        <li className={styles.historyItem}>
                            <h3 className={styles.historyTitle}>2012</h3>
                            <p>Тут текст информации по дате</p>
                        </li>
                        <li className={styles.historyItem}>
                            <h3 className={styles.historyTitle}>2012</h3>
                            <p>Тут текст информации по дате</p>
                        </li>
                        <li className={styles.historyItem}>
                            <h3 className={styles.historyTitle}>2012</h3>
                            <p>Тут текст информации по дате</p>
                        </li>
                        <li className={styles.historyItem}>
                            <h3 className={styles.historyTitle}>2012</h3>
                            <p>Тут текст информации по дате</p>
                        </li>
                    </Marquee>
                </ol>
            </div>
        </section>
    );
};

export default History;
