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
        <div className={style.grid}>
            <Head>
                <title>Контакты</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={style.numbers}>
                <Image
                    src={'/phone.svg'}
                    alt={'Телефон'}
                    width={50}
                    height={50}
                />
                <p> 
                    <div>8-930-031-00-53</div> 
                    <div>8-904-596-33-84</div>
                </p> 
            </div>
            <div className={style.mail}>
                <Image
                    src={'/mail.svg'}
                    alt={'Почта'}
                    width={50}
                    height={50}
                />
                <p>stroidveri33@mail.ru</p>
            </div>
            <div className={style.requisites}>
                <p>{requisites.map((e) => (
                    <span> {e} <br /></span>
                ))}</p>
            </div>
            <div className={style.adress}>
                <p>Наш адрес: <br />
                г. Ковров ул. Набережная, д. 23А, стр. 8</p>
                <div className={style.yaMap}>
                    <YMaps>
                        <Map defaultState={defaultState} className={style.map}>
                            <Placemark geometry={[56.395841, 41.317580]} />
                        </Map>
                    </YMaps>
                </div>
            </div>
        </div>
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