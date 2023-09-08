import styleProduct from '../../styles/Catalog.module.scss'
import Image from 'next/image'
import Link from 'next/link';
import { useState } from "react"
import Modal from '../Modal';
import ProductCard from '../ProductCard';
import { colors } from '../../pages/api/catalogList'

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
            <div
                className={`${styleProduct.cart} `}
                onClick={() => {setOpen(true)}}
            >
                {children}
            </div>
            <Modal isOpen={isOpen} setOpen={setOpen}>
                <ProductCard product={product} colors={colors} />
                <Link href={`/catalog/${product.category}/${product.id}`}>
                    <button className={styleProduct.onPage} onClick={() => setOpen(false)}>Перейти на страницу товара</button>
                </Link>
            </Modal>
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
                    width={200}
                    height={300}
                />
            </div>
            <h3 className={styleProduct.cart_name}>
                {product.name}
            </h3>
        </>
    )
} 