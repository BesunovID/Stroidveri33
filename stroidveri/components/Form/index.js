import { useState } from 'react'
import style from './Form.module.scss'

export default function Form({ setOpenModal }) {
    const [formData, setFormData] = useState({
        user_name: {
            name: 'Имя',
            value: '',
            min_lenght: 1,
            max_lenght: 20,
            type: 'text',
            valid: false,
            patern: /^[A-ZА-ЯЁ]+$/i,
            invalidSymbol: /\d+/g
        },
        user_phone: {
            name: 'Телефон',
            value: '',
            min_lenght: 8,
            max_lenght: 11,
            type: 'tel',
            valid: false,
            patern: /^(\+?7|8)?9\d{9}$/,
            invalidSymbol: /^[A-ZА-ЯЁ]+$/i
        },
        user_email: {
            name: 'Email',
            value: '',
            min_lenght: 5,
            max_lenght: 40,
            type: 'email',
            valid: false,
            patern: /^[A-ZА-ЯЁ]+$/i,
            invalidSymbol: /#?/g
        },
        user_message: {
            name: 'Сообщение',
            value: '',
            min_lenght: 4,
            max_lenght: 300,
            type: 'text',
            valid: false,
            patern: /^[A-ZА-ЯЁ]+$/i,
            invalidSymbol: /#?/g
        },
    });

    const [errorForm, setErrorForm] = useState(false);

    const handleChange = (e) => {
        const newValue = e.target.value.replace(formData[e.target.name].invalidSymbol, '');
        setFormData({
            ...formData, 
            [e.target.name]: {
                ...formData[e.target.name],
                value: newValue,
                valid: validationField(e.target.name, newValue),
            }
        });
    }

    const validationField = (prop, value) => {
        return value.length > formData[prop].min_lenght;
    }

    const validationForm = (form) => {
        form.preventDefault();

        if (formData.user_name.valid && 
            formData.user_message.valid && (
                formData.user_phone.valid || formData.user_email.valid
            )) {
            sendMess();
        }
        else {
            setErrorForm(true);
            return null;
        } 
    }


    async function sendMess() {
        const token = '6413660573:AAHiyCX3gGq-Y4kn85jGgqmscycXBIPmlLk';
        const url = `https://api.telegram.org/bot${token}/sendMessage`;

        const bodyProps = {
            chat_id: '-4096206403',
            parse_mode: 'HTML',
            text: `<b>${formData.user_name.value}</b> \
                \n\n${formData.user_email.name}:  ${formData.user_email.value} \
                \n\n${formData.user_phone.name}:  ${formData.user_phone.value}  \
                \n\nСообщение:\n<i>${formData.user_message.value}</i>`
        }

        const requestOption = {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(bodyProps),
        }
     
        await fetch(url, requestOption)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            }); 
        
        setOpenModal(false);
    }

    return(
        <>
            <h1>Обратная связь</h1>
            <form className={style.form}>
                {Object.keys(formData).map((data) => (
                    <div key={data} className={data === 'user_message' ?
                                `${style.field} ${style.message}` :
                                style.field}>
                        <label className={style.field_name}>{formData[data].name}:</label>
                        {data === 'user_message' ? (
                            <textarea
                                className={formData[data].valid || formData[data].value === ''?
                                    style.field_input :
                                    `${style.field_input} ${style.field_inval}`}
                                type={formData[data].type}
                                name={data}
                                value={formData[data].value} 
                                onChange={(e) => handleChange(e)}
                                minLength={formData[data].min_lenght}
                                maxLength={formData[data].max_lenght}
                                pattern={formData[data].patern}
                                required
                            />
                        ) : (
                            <input 
                                className={formData[data].valid || formData[data].value === '' ?
                                    style.field_input :
                                    `${style.field_input} ${style.field_inval}`}
                                type={formData[data].type}
                                name={data}
                                value={formData[data].value} 
                                onChange={(e) => handleChange(e)}
                                minLength={formData[data].min_lenght}
                                maxLength={formData[data].max_lenght}
                                pattern={formData[data].patern}
                                required
                            />
                        )}
                        {(!formData[data].valid && errorForm) ? 
                            <p className={style.invalidField}>
                                Заполните поле. От {formData[data].min_lenght + 1} до {formData[data].max_lenght} символов.
                            </p> :
                            null
                        }
                       
                    </div>
                ))}
                <button 
                    className={style.btnSend} 
                    onClick={(e) => validationForm(e)}
                >
                    Отправить
                </button>
            </form>
        </>
    )
}