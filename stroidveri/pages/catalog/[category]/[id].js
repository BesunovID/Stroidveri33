import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import style from '../../../styles/Product.module.scss'
import ProductCard from "../../../components/ProductCard";
import Info from "../../../components/info";

export default function Product( {content} ) {
    const product = content.product[0];
    const colors = content.colors;
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
    const content = await fetch(`http://localhost:3000/api/products/${context.params.id}`)
        .then((res) => res.json());


    if (!content) {
        return {
            notFound: true,
        }
    }
    return{
        props: {
            content
        },
    };
}

export async function getStaticPaths() {
    const products = await fetch('http://localhost:3000/api/products')
        .then((res) => res.json());

    const paths = products.map((product) => ({
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