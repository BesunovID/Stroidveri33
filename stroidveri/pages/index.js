import Head from 'next/head'
import style from '../styles/Home.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { posts } from '../components/consts/aboutPosts'
import CatalogCard from '../components/CatalogCard'
import { catalogList } from '../components/consts/catalogList'

export default function Home({ doors, furnitures }) {
  return (
    <>
      <Head>
        <title>Строительные двери оптом от производителя</title>
        <meta name="description" content="Купить деревянные дверные блоки и двери в сборе оптом для строительных объектов с доставкой по России. Выгодные цены и отличное качество для вашего бизнеса!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={style.promo}>
        <Image
          src='/main-doors.webp'
          alt='Акция'
          width={1290}
          height={604}
          style={{
              'width': '100%',
              'height': 'auto',
              'border-radius': '15px'
          }}
        />
      </div>

      <div className={style.aboutUs}>
        <p>
          {posts.find((post) => post.id === '1').desc}
        </p>
      </div>

      <div className={style.products}>

        <div className={style.category}>
          <div className={style.categoryName}>
            <h3>Двери для строительства</h3>
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
            <h3>Фурнитура для строительных дверей</h3>
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
