import style from '../../styles/Catalog.module.scss'
import { useState } from "react"
import Modal from '../Modal';

export default function Button({ children }) {
    
    const [isOpen, setOpen] = useState(false);

    return(
        <>
            <button
                className={style.product}
                onClick={() => {setOpen(true)}}
            >
            {children}
            </button>
            <Modal 
                isOpen={isOpen} 
                setOpen={setOpen} 
                product={children.props.product} />
        </>
    )
}