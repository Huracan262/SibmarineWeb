import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import Title from 'ui/Title';
import MEMBERS_LIST from 'data/MEMBERS_LIST';
import Wrapper from 'shared/Wrapper';
import Theme from 'enums/Theme';
import getWhiteModifier from 'utils/getWhiteModifier';

import AvatarUndefined from '/public/images/team/undefined.png'

import './Team.scss';

interface ITeam {
    theme: Theme
}

const Team = ({theme}: ITeam) => {
    const bem = useBem('Team');

    return (
        <section className={getWhiteModifier(bem.block(), theme)}>
            <Wrapper>
                <Title theme={theme}>Наши сотрудники</Title>

                <ul className={bem.element('list')}>
                    {MEMBERS_LIST.map(({
                        position,
                        name,
                        photoUrl
                    }, index: number) => (
                        <li
                            className={bem.element('item')}
                            key={index}
                        >
                            <figure className={bem.element('container')}>
                                <figcaption className={bem.element('description')}>
                                    <h3 className={bem.element('item-title')}>{name}</h3>
                                    <p className={bem.element('text')}>{position}</p>
                                </figcaption>

                                <img
                                    className={bem.element('img')}
                                    src={!!photoUrl ? photoUrl : AvatarUndefined}
                                    alt={name}/>
                            </figure>
                        </li>
                    ))}
                </ul>
            </Wrapper>
        </section>
    );
};

export default Team;
