import Head from "next/head"
import Image from "next/image"
import { LazyElement } from "../components/LazyElement"
import style from '../styles/Delivery.module.scss'
import delivery1 from '../public/delivery1.png'
import delivery2 from '../public/delivery2.png'

export default function Delivery() {
    return(
        <>
            <Head>
                <title>Стройдвери | Доставка</title>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <meta name="description" content="Доставка строительных дверей по всей России. Купить и оформить доставку дверных блоков можно у нас на сайте и по указанным контактам." />
                <link rel="icon" href="/favicon.ico" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
            </Head>
            <div className={style.delivery}>
                <h1>Доставка продукции по России</h1>
               
                    <div className={style['delivery-image1']}>
                        <Image 
                            src={delivery1}
                            alt={'Доставка в пути'}
                            width={768}
                            height={432}
                            priority
                            style={{
                                'width': '100%',
                                'height': 'auto',
                                'borderRadius': '15px'
                            }}
                        />
                    </div>
               
                <div className={style['delivery-descript']}>
                    {text.map((el, index) => (
                        <>
                            {el.header != '' ? <h2>{el.header}</h2> : null}
                            <p>{el.text}</p> 
                            {index === 2 ? 
                           
                                <div className={style['delivery-image2']}>
                                    <Image 
                                        src={delivery2}
                                        alt={'Разгрузка доставки'}
                                        width={768}
                                        height={432}
                                        priority
                                        style={{
                                            'width': '100%',
                                            'height': 'auto',
                                            'borderRadius': '15px'
                                        }}
                                    />
                                </div>
                             : ''}
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}


const text = [
    {
        'header': '',
        'text': 'Мы предлагаем широкий ассортимент качественных дверей и понимаем, что часто возникает необходимость доставить их в любую точку страны. Мы готовы помочь вам осуществить доставку быстро, надежно и по оптимальным ценам.'
    },
    {
        'header': '',
        'text': 'Почему стоит выбрать нашу доставку? Вот несколько преимуществ:'
    },
    {
        'header': 'Обширная сеть транспортных компаний:',
        'text': 'Мы сотрудничаем с проверенными и надежными транспортными компаниями, которые имеют обширную сеть доставки по всей России. Это позволяет нам доставить ваш заказ в самые отдаленные населенные пункты и регионы.'
    },
    {
        'header': 'Безопасность доставки:',
        'text': 'Мы понимаем, что ваш заказ важен для вас, поэтому мы придаем большое значение безопасности доставки. Наши партнеры по доставке обеспечивают надежную упаковку и аккуратное обращение с грузом, чтобы ваша дверь прибыла в целостности и сохранности.'
    },
    {
        'header': 'Гибкие условия доставки:',
        'text': 'Мы предлагаем различные варианты доставки, чтобы удовлетворить ваши потребности. Вы можете выбрать самую удобную для вас транспортную компанию и способ доставки.'
    },
    {
        'header': 'Профессиональная поддержка:',
        'text': 'Наша команда готова ответить на все ваши вопросы и оказать вам необходимую поддержку на протяжении всего процесса доставки. Мы всегда готовы помочь и обеспечить высокий уровень сервиса.'
    }
]