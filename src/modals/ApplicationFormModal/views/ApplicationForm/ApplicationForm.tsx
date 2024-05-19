import React, {useEffect, useRef, useState} from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';
import emailjs from '@emailjs/browser';

import './ApplicationForm.scss';
import {Form, InputField, TextField} from '@steroidsjs/core/ui/form';
import Button from '../../../../ui/Button';

const EMAIL_SERVICE_ID = 'sibmarine-email-id';
const EMAIL_TEMPLATE_ID = 'template_n4c8iil';
const EMAIL_PUBLIC_KEY = 'g4hhz_Dx7lC27XHkc';

const ApplicationForm: React.FC = ({...props}) => {
    const bem = useBem('ApplicationForm');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => emailjs.init(EMAIL_PUBLIC_KEY), []);

    const handleSubmit = async (phone: string, email: string, message: string) => {
        try {
            setLoading(true);
            await emailjs.send(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, {
                phone,
                email,
                message,
            });
            // alert('email successfully sent check inbox');
            setSuccess(true);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <aside className={bem.block()}>
                <h2>Ваша заявка успешно отправлена!</h2>
            </aside>
        );
    }

    return (
        <aside className={bem.block()}>
            <Form
                className={bem.element('form')}
                formId='FormRequest'
                // useRedux
                loading={loading}
                onSubmit={values => handleSubmit(values.phone, values.email, values.message)}
                fields={[
                    {
                        component: InputField,
                        attribute: 'email',
                        label: 'Email',
                    },
                    {
                        component: InputField,
                        attribute: 'phone',
                        label: __('Телефон'),
                        maskProps: {
                            mask: '+7 (999) 999-99-99',
                        },
                    },
                    {
                        component: TextField,
                        attribute: 'message',
                        label: __('Сообщение'),
                    },
                ]}
                submitLabel={__('Отправить')}
            />
        </aside>
    );
};

export default ApplicationForm;
