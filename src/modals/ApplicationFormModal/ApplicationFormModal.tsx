import React from 'react';

import Modal, {IModalProps} from '@steroidsjs/core/ui/modal/Modal/Modal';

import ApplicationForm from './views/ApplicationForm';

export const APPLICATION_FORM_MODAL_ID = 2;

import './ApplicationFormModal.scss';
import {useBem} from '@steroidsjs/core/hooks';

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
