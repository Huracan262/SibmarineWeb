import {useCallback} from 'react';

import {useDispatch} from '@steroidsjs/core/hooks';
import {openModal} from '@steroidsjs/core/actions/modal';

import MapModal, {MAP_MODAL_ID} from 'modals/MapModal/MapModal';

// TODO - Сделать хук универсальным
const useOpenModal = () => {
    const dispatch = useDispatch();

    const onClick = useCallback(() => {
        const payload = {
            title: 'Map',
            modalId: MAP_MODAL_ID,
        };

        dispatch(openModal(MapModal, payload));
    }, [dispatch]);

    return onClick;
};

export default useOpenModal;
