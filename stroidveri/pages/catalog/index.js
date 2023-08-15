import Link from "next/link"
import Head from "next/head"
import Image from "next/image"
import style from "../../styles/Catalog.module.scss"

export default function Catalog( {catalog} ) {
    return(
        <div className="1">
            <Head>
                <title>Каталог</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={style.category}>
                <Link href={`/catalog/doors`}>
                    <button>Двери</button>
                </Link>
                <Link href={`/catalog/furnitures`}>
                    <button>Фурнитура</button>
                </Link>
            </div>
            <div className={style.products}>
                {catalog.lenght !== 0 ? (
                    catalog.map((product) => (
                        <Link href={`/catalog/${product.category}/${product.id}`}>
                            <div className={style.cart} key={product.id}>
                                <div className={style.image}>
                                    <Image 
                                        src={product.image} 
                                        alt={product.name} 
                                        width={200}
                                        height={300}
                                    />
                                </div>
                                <p className={style.name}>
                                    {product.name}
                                </p>
                                <span className={style.desc}>
                                    {product.desc}
                                </span>
                                <p className={style.price}>
                                    {product.price}
                                </p>
                            </div>
                        </Link>
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