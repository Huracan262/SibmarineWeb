import React from 'react';

import {useBem} from '@steroidsjs/core/hooks';
import Modal, {IModalProps} from '@steroidsjs/core/ui/modal/Modal/Modal';

import Map from './views/Map';

import './MapModal.scss';

export const MAP_MODAL_ID = 1;

const MapModal = (props: IModalProps) => {
    const bem = useBem('Map-Modal');

    return (
        <Modal
            className={bem.block()}
            {...props}
            component={Map}
        />
    );
};

export default MapModal;
