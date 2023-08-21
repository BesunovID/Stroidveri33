import Link from "next/link"
import Head from "next/head"
import style from "../../styles/Catalog.module.scss"
import ProductCard from "../../components/ProductCard/ProductCard"


export default function Catalog( {catalog} ) { 
    return(
        <div className="catalog">
            <Head>
                <title>Каталог</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={style.category}>
                <Link href={`/catalog/doors`}>
                    <a className={style.catLink}>Двери</a>
                </Link>
                <Link href={`/catalog/furnitures`}>
                    <a className={style.catLink}>Фурнитура</a>
                </Link>
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