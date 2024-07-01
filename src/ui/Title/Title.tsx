import React from 'react';

import {PiArrowRightThin} from 'react-icons/pi';

import useBem from '@steroidsjs/core/hooks/useBem';
import {Link} from '@steroidsjs/core/ui/nav';

import RouteId from 'enums/RouteId';
import Theme from 'enums/Theme';
import getWhiteModifier from 'utils/getWhiteModifier';

import './Title.scss';

interface ITitle {
    children: string,
    className?: string,
    link?: RouteId,
    theme?: Theme,
}

const Title: React.FC<ITitle> = ({children, className, link, theme = Theme.dark}) => {
    const bem = useBem('Title');

    return (
        <Link
            className={`${bem.block()} ${className} ${!!link ? bem.block() + '--link' : ''}`}
            toRoute={link}
        >
            <h2 className={getWhiteModifier(bem.element('title'), theme)}>
                {children}
                <PiArrowRightThin className={getWhiteModifier(bem.element('icon'), theme)} />
            </h2>
        </Link>
    );
};

export default Title;
