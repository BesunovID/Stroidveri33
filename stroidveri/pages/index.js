import Head from 'next/head'
import style from '../styles/Home.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { posts } from './api/aboutPosts'
import CatalogCard from '../components/CatalogCard'

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
          src='/vercel.svg'
          alt='Акция'
          layout='fill'
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
            <h3>{doors.categoryHeader}</h3>
            <Link href={'/catalog/doors'}>
              <button className={style.toCategory}>Показать все</button>
            </Link>
          </div>
          <div className={style.categoryList}>
            {doors.products.slice(0, 4).map((e) => (
              <CatalogCard product={e} />
            ))}
          </div>
        </div>
        <div className={style.category}>
          <div className={style.categoryName}>
            <h3>{furnitures.categoryHeader}</h3>
            <Link href={'/catalog/furnitures'}>
              <button className={style.toCategory}>Показать все</button>
            </Link>
          </div>
          <div className={style.categoryList}>
            {furnitures.products.slice(0, 4).map((e) => (
              <CatalogCard product={e} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const doors = await fetch(`http://localhost:3000/api/categories/doors`)
    .then((res) => res.json());

  const furnitures = await fetch(`http://localhost:3000/api/categories/furnitures`)
    .then((res) => res.json());

  return{
      props: {
        doors,
        furnitures
      },
  };
}
