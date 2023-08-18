import Link from "next/link";
import style from '../../../styles/Product.module.scss'

export default function Product( {content} ) {
    return(
        <div className="container">
            <Link href={`/catalog`}>
                    <button>Назад</button>
            </Link>
            <div className={style.product}>
                {content.lenght !== 0 ?
                    content.map((product) => (
                        <div className={style.image} key={product.id}>
                            <p>{product.id}</p>
                        </div>
                    ))
                    : <div className="3">Не найдено</div>
                }
            </div>
        </div>
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
            content,
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