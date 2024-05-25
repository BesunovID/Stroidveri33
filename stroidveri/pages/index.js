import Head from 'next/head'
import style from '../styles/Home.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import CatalogCard from '../components/CatalogCard'
import { catalogList } from '../components/consts/catalogList'

export default function Home({ doors, furnitures }) {
  return (
    <>
      <Head>
        <title>Строительные двери оптом от производителя</title>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="description" content="Купить деревянные дверные блоки, оргалитовые двери оптом для строительных и временных объектов с доставкой по России. Выгодные цены и отличное качество для вашего бизнеса!" />
        <meta property="og:title" content="Строительные двери оптом от производителя"/>
        <meta property="og:description" content="Купить деревянные двери с доставкой по России. Выгодные цены и отличное качество для вашего бизнеса!"/>
        <meta property="og:image" content="https://stroidveri33.ru/_next/image?url=%2Fmain-doors.webp&w=1920&q=75"/>
        <meta property="og:type" content="profile"/>
        <meta property="og:url" content= "https://stroidveri33.ru/" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <div className={style.promo}>
        <Image
          src='/main-doors.webp'
          alt='Строительные деревянные двери оптом от производителя'
          priority
          width={1290}
          height={604}
          style={{
              'width': '100%',
              'height': 'auto',
              'borderRadius': '15px'
          }}
        />
      </div>

      <div className={style.aboutUs}>
        <h1>Стройдвери33 - ведущая компания, специализирующаяся на изготовлении и продаже
          деревянных строительных оргалитовых дверей для различных типов помещений.</h1>
        <p>
          {mainText}
        </p>
      </div>

      <div className={style.products}>

        <div className={style.category}>
          <div className={style.categoryName}>
            <h2>Двери для строительства</h2>
            <Link href={'/catalog/doors'}>
              <button className={style.toCategory}>Показать все</button>
            </Link>
          </div>
          <div className={style.categoryList}>
            {doors.slice(0, 4).map((e, index) => (
              <CatalogCard product={e} key={index} />
            ))}
          </div>
        </div>

        <div className={style.category}>
          <div className={style.categoryName}>
            <h2>Фурнитура для строительных дверей</h2>
            <Link href={'/catalog/furnitures'}>
              <button className={style.toCategory}>Показать все</button>
            </Link>
          </div>
          <div className={style.categoryList}>
            {furnitures.slice(0, 4).map((e, index) => (
              <CatalogCard product={e} key={index}/>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const doors = catalogList.filter((product) => (
    product.category === 'doors'
  ));

  const furnitures = catalogList.filter((product) => (
    product.category === 'furnitures'
  ));

  return{
      props: {
        doors,
        furnitures
      },
  };
}

const mainText = [
  'Наше производство выпускает деревянные оргалитовые двери более 5 лет и \
  способно выполнить любой оптовый заказ, в соответсвии со спецификацией и строго по ГОСТу. \
  Вся наша продукция производится индивидуально по вашим размерам,\
   а доставка осуществляется по всей центральной России.'
]
