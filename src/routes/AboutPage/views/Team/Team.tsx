import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import './Team.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ITeam {

}

const Team: React.FC<ITeam> = ({...props}) => {
    const bem = useBem('Team');

    return (
        <section className={bem.block()}>
            <div className={styles.wrapper}>
                <Title>Наши сотрудники</Title>

                <ul className={styles.teamList}>
                    {MEMBERS_LIST.map(({
                        id,
                        position,
                        name,
                        photoUrl
                    }) => {
                        return (
                            <li className={styles.teamItem} key={id}>
                                <figure className={styles.teamFigure}>
                                    <figcaption className={styles.teamFigcaption}>
                                        <h3 className={styles.teamName}>{name}</h3>
                                        <p className={styles.teamDescription}>{position}</p>
                                    </figcaption>

                                    <img className={styles.teamImg} src={!!photoUrl ? photoUrl : undefined} alt={name}/>
                                </figure>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    );
};

export default Team;
