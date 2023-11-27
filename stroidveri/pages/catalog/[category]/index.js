import style from "../../../styles/Catalog.module.scss";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import CatalogCard from "../../../components/CatalogCard";
import Info from "../../../components/info";
import {categories, catalogList } from "../../../components/consts/catalogList";

export default function Category( {products, header} ) {
    return(
        <>
            <Head>
                <title>{header}</title>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <meta name="description" content="Деревянные оргалитовые двери оптом для строительных объктов. Индивидуальное изготовление на заказ с доставкой по РФ." />
                <link rel="icon" href="/favicon.ico" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
            </Head>
            <Info />
            <div className={style.upper}>
                <Link href={`/catalog`}>
                    <button className={style.backBut}>
                        <Image 
                            src="/left-arrow.svg" 
                            alt="Назад" 
                            layout="fill" 
                            unoptimized = {false}
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
                            <CatalogCard product={product} key={product.id}/>
                        ))
                    ) : (
                        <div>Товары не найдены ...</div>
                    )}
                </div>
        </>
    ) 
}

export async function getStaticProps(context) {
    const products = catalogList.filter((product) => (
        product.category === context.params.category
    ));

    const categoryHeader = categories.filter((e) => (
        e.name === context.params.category
    ))[0].namePage;

    const header = categoryHeader;

    return{
        props: {
            products,
            header
        },
    };
}

export async function getStaticPaths() {
    const paths = categories.map((cat) => ({
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
