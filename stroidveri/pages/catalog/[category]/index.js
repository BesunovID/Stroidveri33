import style from "../../../styles/Catalog.module.scss";
import Link from "next/link";
import ProductCard from "../../../components/ProductCard/ProductCard";

export default function Category( {content} ) {
    return(
        <div className="container">
            <Link href={`/catalog`}>
                <button>Назад</button>
            </Link>
            <div className={style.products}>
                    {content.lenght !== 0 ? (
                        content.map((product) => (
                            <ProductCard  product={product}/>
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
