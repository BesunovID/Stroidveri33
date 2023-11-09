import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import style from '../../../styles/Product.module.scss'
import ProductCard from "../../../components/ProductCard";
import Info from "../../../components/info";
import { catalogList, colors } from "../../../components/consts/catalogList";

export default function Product( {content} ) {
    const product = content[0];
    console.log(product)
    const titleCat = (product.category === 'doors') ? 'Строительные двери ' : 'Фурнитура для строительных дверей';
    return(
        <>
            <Head>
                <title>{titleCat} {product.name}</title>
                <meta name="description" content="Купить дверные блоки, двери в сборе и фурнитуру с доставкой по РФ у нас на сайте. Обращайтесь по указанным контактам или свяжитесь онлайн через сайт." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Info />
            <Link href={`/catalog/${product.category}`}>
                <button className={style.backBut}>
                    <Image 
                        src="/left-arrow.svg" 
                        alt="Назад" 
                        layout="fill" 
                    />
                </button>
            </Link>
            <ProductCard product={product} colors={colors} />
        </>
    )
}

export async function getStaticProps(context) {
    const content = catalogList.filter((product) => (
        product.id === context.params.id
    ));

    return{
        props: {
            content
        },
    };
}

export async function getStaticPaths() {
    const paths = catalogList.map((product) => ({
        params:
            {
                category: product.category,
                id: product.id,
            }
    }));

    return{ 
        paths,
        fallback: false,
    }
}