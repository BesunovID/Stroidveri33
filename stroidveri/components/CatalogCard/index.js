import styleProduct from '../../styles/Catalog.module.scss'
import Image from 'next/image'
import { useState } from "react"
import Modal from '../Modal';

export default function CatalogCard({ product }) {
    return(
        <Cart>
            <Content product={product} />
        </Cart>
    )
}

const Cart = ({ children }) => {
    
    const [isOpen, setOpen] = useState(false);

    return(
        <>
            <div
                className={`${styleProduct.cart} `}
                onClick={() => {setOpen(true)}}
            >
                {children}
            </div>
            <Modal 
                isOpen={isOpen} 
                setOpen={setOpen} 
                product={children.props.product} />
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