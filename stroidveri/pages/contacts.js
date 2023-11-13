import Head from "next/head"
import Image from "next/image"
import style from "../styles/Contacts.module.scss"
import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export default function Contacts() {
    const defaultState = {
        center: [56.395841, 41.317580],
        zoom: 12,
    };

    return(
        <>
            <Head>
                <title>Стройдвери | Контакты</title>
                <meta name="description" content="Чтобы выбрать и купить двери для строй объектов, обращайтесь по указанным на нашем сайте контактам или заполните онлайн форму и мы свяжемся с вами." />
                <link rel="icon" href="/favicon.svg" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={style.grid}>
                <div className={style.numbers}>
                    <Image
                        src={'/phone.svg'}
                        alt={'Телефон'}
                        width={50}
                        height={50}
                    />
                    <h2> 
                        <a href="tel:89300310053">8-930-031-00-53</a> 
                        <a href="tel:89045963384">8-904-596-33-84</a>
                    </h2> 
                </div>
                <div className={style.mail}>
                    <Image
                        src={'/mail.svg'}
                        alt={'Почта'}
                        width={50}
                        height={50}
                    />
                    <h2>stroidveri33@mail.ru</h2>
                </div>
                <div className={style.requisites}>
                    <h3>Реквизиты</h3>
                    <p>
                    {requisites.map((e, id) => (
                        <span key={id}> {e} <br /></span>
                    ))}</p>
                </div>
                <div className={style.adress}>
                    <h3>Наш адрес: <br />
                    г. Ковров ул. Набережная, д. 23А, стр. 8</h3>
                    <div className={style.yaMap}>
                        <YMaps>
                            <Map defaultState={defaultState} className={style.map}>
                                <Placemark geometry={defaultState.center} />
                            </Map>
                        </YMaps>
                    </div>
                </div>
            </div>
        </>
    )
}


const requisites = [
    'ООО «СтройДвери»',
    'ИНН: 3305798100',
    'КПП: 330501001',
    'ОГРН: 1173328017312',
    'Юридический адрес: РФ.601900.Владимирская область.г . Ковров.ул. Московская.д.5 офис68',
    'Почтовый адрес: РФ.601900.Владимирская область. г. Ковров.ул. Московская.д.5 офис68',
    'Расчетный счет: 40702810810000007031',
    'БАНК: Владимирское отделение №8611 ПАО Сбербанк',
    'Кор/счет: 3010180000000000602',
    'БИК: 041708602',
    'Генеральный директор: Семибратов Савва Владимирович',
];