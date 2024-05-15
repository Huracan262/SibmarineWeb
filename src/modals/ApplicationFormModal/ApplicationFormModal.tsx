import React from 'react';

import Modal, {IModalProps} from '@steroidsjs/core/ui/modal/Modal/Modal';

import ApplicationForm from './views/ApplicationForm';

export const APPLICATION_FORM_ID = 2

const ApplicationFormModal = (props: IModalProps) => {
    return (
        <Modal
            {...props}
            component={ApplicationForm}
        />
    );
};

export default ApplicationFormModal;
