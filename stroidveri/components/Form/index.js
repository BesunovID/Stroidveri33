import { useState } from 'react'

export default function Form() {
    const [formData, setFormData] = useState({
        'user_name': '',
        'user_email': '',
        'user_phone': '',
        'user_message': '',
    })
  /*  const [name, setName] = useState();
    const [adress, setAdress] = useState();
    const [phone, setPhone] = useState();
    const [message, setMessage] = useState();
*/
    const sendMess = ({ data }) => {
        const url = 'https://t.me/strdvremailgetterfromsitebot/sendMessage?';

        const postData = JSON.stringify(data);
        
        fetch(url, {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: postData
        });
    }

/*
    const onChange = (e) => {
        setFormData({e.target.name: e.target.value})
    }
*/
    return(
        <>
            <h1>Обратная связь</h1>
            <form>
                <input type="text" 
                    name={user_name}
                    placeholder='Ваше Имя...' 
                    value={formData.user_name} 
                    onChange={setFormData({user_name: value})}
                    required
                />
                <input type="text"
                    name={user_email}
                    placeholder='Ваша почта...' 
                    value={formData.user_email} 
                    onChange={setFormData({user_email: value})}
                    required
                />
                <input type="number" 
                    name={user_phone}
                    placeholder='Номер телефона..' 
                    value={formData.user_phone} 
                    onChange={setFormData({user_phone: value})}
                    required
                />
                <input type="text" 
                    name={user_message}
                    placeholder='Введите ваше сообщение...' 
                    value={formData.user_message} 
                    onChange={setFormData({user_message: value})}
                    required
                />
                <button onClick={() => sendMess(data={formData})}>Отправить</button>
            </form>
        </>
    )
}