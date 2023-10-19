import style from '../../styles/Product.module.scss'
import Image from 'next/image'
import CalcPrice from './calcPrice';


export default function ProductCard({ product, colors }) {
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
                    objectFit='contain'
                    //style={{ width: '100%', height: 'auto' }}
                />
            </div>
            <CalcPrice prices={product.prices} colors={colors} />
            <span className={style.desc}>
                Описание: <br />{product.desc}
            </span>
        </div>
    )
}