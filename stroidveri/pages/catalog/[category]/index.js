import style from "../../../styles/Catalog.module.scss";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import CatalogCard from "../../../components/CatalogCard";
import Info from "../../../components/info";

export default function Category( {products, header} ) {
    return(
        <>
            <Head>
                <title>{header}</title>
                <meta name="description" content="Деревянные двери оптом для строительных объктов. Индивидуальное изготовление на заказ с доставкой по РФ." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Info />
            <div className={style.upper}>
                <Link href={`/catalog`}>
                    <button className={style.backBut}>
                        <Image 
                            src="/left-arrow.svg" 
                            alt="Назад" 
                            layout="fill" 
                        />
                    </button>
                </Link>
                <div className={style.catNow}>
                    <h2>{header.split(' ')[0]}</h2>
                </div>
            </div>
            <div className={style.products}>
                    {products.lenght !== 0 ? (
                        products.map((product) => (
                            <CatalogCard  product={product} key={product.id}/>
                        ))
                    ) : (
                        <div>Товары не найдены ...</div>
                    )}
                </div>
        </>
    ) 
}

export async function getStaticProps(context) {
    const content = await fetch(`/api/categories/${context.params.category}`)
        .then((res) => res.json());

    const products = content.products;
    const header = content.categoryHeader;

    return{
        props: {
            products,
            header
        },
    };
}

export async function getStaticPaths() {
    const res = await fetch('/api/categories');
    const cats = await res.json();

    const paths = cats.map((cat) => ({
        params: 
            {
                category: cat.name,
            },  
    }));

    return{ 
        paths, 
        fallback: false,
    }
}
