import style from '../../styles/Modal.module.scss'
import Link from 'next/link'
import Image from 'next/image'

export default function Modal({ isOpen, setOpen, product }) { 
    return(
        isOpen && (<div className={isOpen ? `${style.overlay} ${style.show}`: style.overlay}>
            <div className={style.modal}>
                <Image 
                    src={'/vercel.svg'}
                    width={30}
                    height={30}
                    className={style.modalClose}
                    onClick={() => {
                        setOpen(false);
                    }} 
                />
                <ModalCard product = {product}/> 
            </div>
        </div>
        )
    )
}

const ModalCard = ({ product }) => {
    return(
        <div className={style.cart}>
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
            <Link href={`/catalog/${product.category}/${product.id}`}>
                <button>Перейти на страницу товара</button>
            </Link>
        </div> 
    )
}


