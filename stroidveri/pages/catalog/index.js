import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import style from "../../styles/Catalog.module.scss"
import ProductCard from "../../components/ProductCard/ProductCard"


export default function Catalog( {catalog} ) { 
    return(
        <div className={style.wrapper}>
            <Head>
                <title>Каталог</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={style.upper}>
                <div className={style.category}>
                    <Link href={`/catalog/doors`}>
                        <a className={style.catLink}>
                            <div className={style['image-wrapper']}>
                                <Image src="/vercel.svg" 
                                    alt="Vercel Logo" 
                                    layout="fill" />
                            </div>
                            <p>Двери</p> 
                        </a>
                    </Link>
                    <Link href={`/catalog/furnitures`}>
                        <a className={style.catLink}>
                            <div className={style['image-wrapper']}>
                                <Image src="/vercel.svg" 
                                    alt="Vercel Logo" 
                                    layout="fill" />
                            </div>
                            <p>Фурнитура</p> 
                        </a>
                    </Link>
                </div>
            </div>
            <div className={style.products}>
                {catalog.lenght !== 0 ? (
                    catalog.map((product) => (
                        <ProductCard product={product} key={product.id} />
                    ))
                ) : (
                    <div>Товары не найдены ...</div>
                )}
            </div>
        </div>
    )
}


export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/products');
    const catalog = await res.json();

    if(!catalog) {
        return{
            notFound: true,
        };
    }

    return{
        props: {
            catalog,
        },
    };
}