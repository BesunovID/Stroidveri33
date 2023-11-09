import style from '../../styles/Product.module.scss'
import Image from 'next/image'
import CalcPrice from './calcPrice';


export default function ProductCard({ product, colors }) {
    return(
        <div className={style.cart}>
            <h1 className={style.name}>
                {product.name}
            </h1>
            <div className={product.category === 'doors' ? style.image : style['image-full']}>
                <Image 
                    src={product.image} 
                    alt={product.name} 
                    layout='fill'
                    objectFit='contain'
                    //style={{ width: '100%', height: 'auto' }}
                />
            </div>
            {product.category === 'doors' ? 
            <CalcPrice prices={product.prices} colors={colors} />
            : <CalcPrice prices={product.prices} colors='null' />
            }
            <p className={style.desc}>
                <span className={style.descName}>Описание</span>
                {product.desc.split('&').map((el, key) => (
                    <span key={key}>{el}<br/></span>
                ))}
            </p>
        </div>
    )
}