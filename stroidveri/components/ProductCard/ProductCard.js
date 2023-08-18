import style from '../../styles/Catalog.module.scss'
import Image from 'next/image'
import Button from './Button';

export default function ProductCard({ product }) {
    return(
        <Button 
            content = {<Content product={product} />}
        />
    )
}
 
export const Content = ({ product }) => {
    return(
    <>
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
    </>
    )
} 