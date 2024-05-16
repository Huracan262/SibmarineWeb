import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';
import {Link} from '@steroidsjs/core/ui/nav';

import {PiArrowRightThin} from 'react-icons/pi';

import RoutesId from 'enums/RoutesId';
import getWhiteModifier from 'utils/getWhiteModifier';

import './Title.scss';

interface ITitle {
    children: string,
    link?: RoutesId,
    white?: boolean,
}

const Title: React.FC<ITitle> = ({children, link, white = false}) => {
    const bem = useBem('Title');

    return (
        <Link
            className={bem.block()}
            toRoute={link}
        >
            <h2 className={getWhiteModifier(bem.element('title'), white)}>
                {children}
                <PiArrowRightThin className={getWhiteModifier(bem.element('icon'), white)} />
            </h2>
        </Link>
    );
};

export default Title;
