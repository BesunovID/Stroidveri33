import styleProduct from '../../styles/Catalog.module.scss'
import Image from 'next/image'
import Link from 'next/link';
import { useState } from "react"
import dynamic from 'next/dynamic'
import ProductCard from '../ProductCard';
import { colors } from '../consts/catalogList'

const DynamicModal = dynamic(() => import('../Modal'));

export default function CatalogCard({ product }) {
    return(
        <Cart product={product}>
            <Content product={product} />
        </Cart>
    )
}

const Cart = ({ children, product }) => {
    
    const [isOpen, setOpen] = useState(false);

    return(
        <>
            <button
                className={styleProduct.cart}
                onClick={() => {setOpen(true)}}
            >
                {children}
            </button>
            
            <DynamicModal isOpen={isOpen} setOpen={setOpen}>
                <ProductCard product={product} colors={colors} />
                <Link href={`/catalog/${product.category}/${product.id}`}>
                    <button className={styleProduct.onPage} onClick={() => setOpen(false)}>Перейти на страницу товара</button>
                </Link>
            </DynamicModal>
        </>
    )
}
 
const Content = ({ product }) => {
    return(
        <>
            <div className={styleProduct.cart_image}>
                <Image 
                    src={product.image} 
                    alt={product.name} 
                    layout='fill'
                    objectFit='contain'
                />
            </div>
            <h3 className={styleProduct.cart_name}>
                {product.name}
            </h3>
        </>
    )
} 