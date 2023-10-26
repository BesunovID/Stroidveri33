import style from '../../styles/LazyElement.module.scss'
import { useEffect, useState, useRef } from "react"
import {CSSTransition} from 'react-transition-group'

export const LazyElement = ({ children }) => {
    const [isIntersecting, setIntersecting] = useState(false);

    const boxRef = useRef(null);

    const options = {
        rootMargin: '0px',
        threshold: 0.6,
    }

    useEffect(() => {
        const post = boxRef.current;

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIntersecting(true);
                    observer.unobserve(entry.target)
                }
            })
        }, options);

        observer.observe(post);

        return () => observer.unobserve(post);
    }, [])

    return(
        <div ref={boxRef}>
            {
                !isIntersecting ? 
                <Placeholder /> : 
                <Element>
                    {children}
                </Element>
            }
        </div>
    )
}

const Element = ({ children }) => {
    const [start, setStart] = useState(false);

    const postRef = useRef(null);

    const elementAnimationDots = {
        enter: style.elementEnter,
        enterActive: style.elementEnterActive,
    };

    useEffect(() => {
        setStart(true);
    }, [])

    return(
        <CSSTransition 
            in={start}
            nodeRef={postRef}
            classNames={elementAnimationDots}
            timeout={1600}
            mountOnEnter
        > 
            <div ref={postRef}>
                {children}
            </div>
        </CSSTransition>
    )
}

const Placeholder = ({}) => {
    return( 
        <div className={style.placeHolder}>
        </div>
    )
};