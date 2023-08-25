import style from './Modal.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import {useEffect, useRef, useState} from 'react'
import {CSSTransition} from 'react-transition-group'
import { ANIMATION_TIME } from './constant'


export default function LayoutModal({ product, isOpen, setOpen }) { 
    const [animation, setAnimation] = useState(false);

    useEffect(() => {
        setAnimation(isOpen);

        const handleEscapeKey = (event) => {
            if (event.key === 'Escape') {
                setOpen(false);
            };
        };

        document.addEventListener('keydown', handleEscapeKey);

        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
        }
    }, [isOpen]);

    return(
        <div className={style.container}>
            <Overlay animation={animation} setOpen={setOpen} />
            <Content animation={animation} product={product} setOpen={setOpen} />
        </div>
    )
}

const Overlay = ({ animation, setOpen }) => {
    const overlayRef = useRef();
    const overlayAnimationDots = {
        enter: style.overlayEnter,
        enterActive: style.overlayEnterActive,
        exit: style.overlayExit,
        exitActive: style.overlayExitActive
    };

    return(
        <CSSTransition 
            in={animation}
            nodeRef={overlayRef}
            classNames={overlayAnimationDots}
            timeout={ANIMATION_TIME}
            mountOnEnter
            unmountOnExit
        > 
            <div className={style.overlay}
                ref={overlayRef}
                onClick={() => setOpen(false)} 
            />
        </CSSTransition>
    )
}


const Content = ({ animation, product, setOpen}) => {
    
    const contentRef = useRef();
    const contentAnimationDots = {
        enter: style.contentEnter,
        enterActive: style.contentEnterActive,
        exit: style.contentExit,
        exitActive: style.contentExitActive
    }
    
    return(
        <CSSTransition
            in={animation}
            nodeRef={contentRef}
            classNames={contentAnimationDots}
            timeout={ANIMATION_TIME}
            mountOnEnter
            unmountOnExit
        >
            <div className={style.content} ref={contentRef}>
                <Image 
                    src={'/vercel.svg'}
                    width={30}
                    height={30}
                    className={style.modalClose}
                    onClick={() => {
                        setOpen(false);
                    }} 
                />
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
                        <button onClick={() => setOpen(false)}>Перейти на страницу товара</button>
                    </Link>
                </div> 
            </div>
        </CSSTransition>
    )
}