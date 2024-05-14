import React from 'react';

import Modal, {IModalProps} from '@steroidsjs/core/ui/modal/Modal/Modal';

import Map from './views/Map';

export const MAP_MODAL_ID = 1;

const MapModal = (props: IModalProps) => {
    return (
        <Modal
            {...props}
            component={Map}
        />
    );
};

export default MapModal;
