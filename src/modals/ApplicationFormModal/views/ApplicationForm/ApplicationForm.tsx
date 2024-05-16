import React from 'react';

import useBem from '@steroidsjs/core/hooks/useBem';

import Button from 'ui/Button';

import './ApplicationForm.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IApplicationForm {

}

const ApplicationForm: React.FC = ({...props}) => {
    const bem = useBem('ApplicationForm');

    return (
        <aside className={bem.block()}>
            <h2>Оставить заявку</h2>

            <form>
                <div>
                    <label htmlFor="name">Ваше имя:</label>
                    <input type="text" name="name" id="name" maxLength={50} required placeholder="Ваше имя" />
                </div>

                <div>
                    <label htmlFor="contacts">Контакты:</label>
                    <input type="text" name="contacts" id="contacts" maxLength={50} required placeholder="email / телефон"/>
                </div>

                <div>
                    <label htmlFor="text">Заявка:</label>
                    <textarea name="text" id="text" rows={10} maxLength={200} required spellCheck="true" placeholder="Введите ваш запрос" />
                </div>

                <Button onClick=''>Отправить</Button>
            </form>

            {/*<BsX className={styles.close} onClick={() => setToggleModal(false)} />*/}
        </aside>
    );
};

export default ApplicationForm;
