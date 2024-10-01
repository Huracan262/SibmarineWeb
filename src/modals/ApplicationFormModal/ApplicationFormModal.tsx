import React from 'react';

import Modal, {IModalProps} from '@steroidsjs/core/ui/modal/Modal/Modal';
import {useBem} from '@steroidsjs/core/hooks';

import ApplicationForm from './views/ApplicationForm';
import './ApplicationFormModal.scss';

export const APPLICATION_FORM_MODAL_ID = 2;

const ApplicationFormModal = (props: IModalProps) => {
    const bem = useBem('Application-form-modal');

    return (
        <Modal
            className={bem.block()}
            {...props}
            component={ApplicationForm}
        />
    );
};

export default ApplicationFormModal;
