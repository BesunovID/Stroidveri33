import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import style from "../../styles/Catalog.module.scss"
import CatalogCard from "../../components/CatalogCard"
import Info from "../../components/info"
import { catalogList } from "../../components/consts/catalogList";

export default function Catalog( {catalog} ) { 
    return(
        <>
            <Head>
                <title>Каталог строительных дверей и фурнитуры</title>
                <meta name="description" content="Выбрать и купить деревянные строительные двери можно у нас на сайте. Большой выбор дверных блоков и фурнитуры, изготовление на заказ." />
                <link rel="icon" href="/favicon.ico" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
            </Head>
            <Info />
            <div className={style.upper}>
                <div className={style.category}>
                    <Link href={`/catalog/doors`}>
                        <a className={style.catLink}>
                            <div className={style['image-wrapper']}>
                                <Image 
                                    src="/cat-doors.png" 
                                    alt="Строительные двери" 
                                    layout='fill'
                                    objectFit='contain'  
                                />
                            </div>
                            <h2>Двери</h2> 
                        </a>
                    </Link>
                    <Link href={`/catalog/furnitures`}>
                        <a className={style.catLink}>
                            <div className={style['image-wrapper']}>
                                <Image 
                                    src="/cat-furnitura.png" 
                                    alt="Фурнитура для дверей" 
                                    layout='fill'
                                    objectFit='contain' 
                                />
                            </div>
                            <h2>Фурнитура</h2> 
                        </a>
                    </Link>
                </div>
            </div>
            <div className={style.products}>
                {catalog.lenght !== 0 ? (
                    catalog.map((product) => (
                        <CatalogCard product={product} key={product.id} />
                    ))
                ) : (
                    <div>Товары не найдены ...</div>
                )}
            </div>
        </>
    )
}


export async function getStaticProps() {
    const catalog = catalogList;

    return{
        props: {
            catalog,
        },
    };
}