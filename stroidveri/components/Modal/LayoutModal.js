import style from './Modal.module.scss'
import Image from 'next/image'
import {useEffect, useRef, useState} from 'react'
import {CSSTransition} from 'react-transition-group'
import { ANIMATION_TIME } from './constant'


export default function LayoutModal({ children, isOpen, setOpen }) { 
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
            <div className={style.wrapper}>
                <Overlay animation={animation} setOpen={setOpen} />
                <Content animation={animation} setOpen={setOpen}> 
                    {children}
                </Content>
            </div>
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


const Content = ({ children, animation, setOpen}) => {
    
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
                <div className={style.modalClose}>
                    <Image 
                        src={'/close.svg'}
                        alt='logo'
                        width={50}
                        height={50}
                        className={style.modalClose}
                        onClick={() => {
                            setOpen(false);
                        }} 
                    />
                </div>
                {children}
            </div>
        </CSSTransition>
    )
}