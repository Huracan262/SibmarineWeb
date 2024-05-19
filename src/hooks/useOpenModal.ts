import {useCallback} from 'react';

import {useDispatch} from '@steroidsjs/core/hooks';
import {openModal} from '@steroidsjs/core/actions/modal';

import MapModal, {MAP_MODAL_ID} from 'modals/MapModal/MapModal';
import ApplicationFormModal, {APPLICATION_FORM_MODAL_ID} from 'modals/ApplicationFormModal/ApplicationFormModal';

const modals = [
    {
        title: 'Карта',
        modalId: MAP_MODAL_ID,
        component: MapModal,
    }, {
        title: 'Заявка',
        modalId: APPLICATION_FORM_MODAL_ID,
        component: ApplicationFormModal,
    },
];

const useOpenModal = (modalId: number) => {
    const dispatch = useDispatch();

    const onClick = useCallback(() => {
        const modal = modals.find(el => el.modalId === modalId);

        console.log('modal', modal);

        if (modal) {
            const payload = {
                title: modal.title,
                modalId: modal.modalId,
            };

            dispatch(openModal(modal.component, payload));
        }
    }, [dispatch, modalId]);

    return onClick;
};

export default useOpenModal;
