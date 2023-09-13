import { useState } from 'react'
import style from './Form.module.scss'

export default function Form({ setOpenModal }) {
    const [formData, setFormData] = useState({
        user_name: {
            name: 'Имя',
            value: '',
            min_lenght: 2,
            max_lenght: 20,
            type: 'text',
            valid: true,
            patern: ' /^[A-ZА-ЯЁ]+$/i'
        },
        user_email: {
            name: 'Email',
            value: '',
            min_lenght: 6,
            max_lenght: 40,
            type: 'email',
            valid: true,
            patern: ' /^[A-ZА-ЯЁ]+$/i'
        },
        user_phone: {
            name: 'Телефон',
            value: '',
            min_lenght: 9,
            max_lenght: 11,
            type: 'tel',
            valid: true,
            patern: '\d'
        },
        user_message: {
            name: 'Сообщение',
            value: '',
            min_lenght: 5,
            max_lenght: 300,
            type: 'text',
            valid: true,
            patern: ' /^[A-ZА-ЯЁ]+$/i'
        },
    })

    const validation = (prop, value) => {
        return value.length > formData[prop].min_lenght;
    }

    async function sendMess(e) {
        e.preventDefault();

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
            }); 
        
        setOpenModal(false);
    }


    const handleChange = (e) => {
        setFormData({
            ...formData, 
            [e.target.name]: {
                ...formData[e.target.name],
                value: e.target.value,
                valid: validation(e.target.name, e.target.value),
            }
        });
    }

    return(
        <>
            <h1>Обратная связь</h1>
            <form className={style.form}>
                {Object.keys(formData).map((data) => (
                    <div key={data} className={data === 'user_message' ?
                                `${style.field} ${style.message}` :
                                style.field}>
                        <p className={style.field_name}>{formData[data].name}:</p>
                        <input 
                            className={formData[data].valid == true ?
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
                    </div>
                ))}
                <button 
                    className={style.btnSend} 
                    onClick={(e) => sendMess(e)}
                >
                    Отправить
                </button>
            </form>
        </>
    )
}