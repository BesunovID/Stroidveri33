import style from "../../../styles/Catalog.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function Category( {content} ) {
    return(
        <div className="container">
            <Link href={`/catalog`}>
                <button>Назад</button>
            </Link>
            <div className={style.products}>
                    {content.lenght !== 0 ? (
                        content.map((product) => (
                            <Link href={`/catalog/${product.category}/${product.id}`} key={product.id}>
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

export async function getStaticProps(context) {
    const content = await fetch(`http://localhost:3000/api/categories/${context.params.category}`)
        .then((res) => res.json());

    return{
        props: {
            content,
        },
    };
}

export async function getStaticPaths() {
    const res = await fetch('http://localhost:3000/api/categories');
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
