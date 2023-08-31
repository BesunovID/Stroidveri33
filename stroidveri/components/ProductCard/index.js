import style from '../../styles/Product.module.scss'
import Image from 'next/image'


export default function ProductCard({ product }) {
    return(
        <div className={style.cart}>
            <h1 className={style.name}>
                {product.name}
            </h1>
            <div className={style.image}>
                <Image 
                    src={product.image} 
                    alt={product.name} 
                    layout='fill'
                />
            </div>
            <div className={style.sizes}>
                <p>Доступные размеры:</p>
                <ul>
                    {product.sizes.map((e, i) => (
                        <li key={i}>
                            {e}
                        </li>
                    ))}
                </ul>
            </div>
            <p className={style.price}>
                Цена: {product.price}
            </p>
            <span className={style.desc}>
                Описание: <br />{product.desc}
            </span>
        </div>
    )
}
