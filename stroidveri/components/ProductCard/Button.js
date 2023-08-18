import style from '../../styles/Catalog.module.scss'
import { useState } from "react"
import Modal from './Modal';

export default function Button({ content }) {
    
    const [isOpen, setOpen] = useState(false);

    return(
        <>
            <button
                className={style.cart}
                onClick={() => {setOpen(true)}}
            >
            {content}
            </button>
            <Modal 
                isOpen = {isOpen}
                setOpen = {setOpen}
                product = {content.props.product}
            />
        </>
    )
}
