import style from '../../styles/Layout.module.scss'
import { useState, useRef, useEffect } from 'react'
import { useMountMenu } from './useMountMenu'
import {CSSTransition} from 'react-transition-group'

export default function HamburgerMenu({ children }) {
    const [isOpen, setOpen] = useState(false);
    const { mounted } = useMountMenu({isOpen});

    return(
        <div className={style.hamburger}>
            <button className={style.butOpen} onClick={() => setOpen(true)} />
            {mounted && <Menu isOpen={isOpen} setOpen={setOpen}>
                {children}
            </Menu>}
        </div>
    )
}

const Menu = ({ children, isOpen, setOpen }) => {
    const [animation, setAnimation] = useState(false);

    useEffect(() => {
        setAnimation(isOpen);
    }, [isOpen]);

    const menuRef = useRef();
    const menuAnimationDots = {
        enter: style.menuEnter,
        enterActive: style.menuEnterActive,
        exit: style.menuExit,
        exitActive: style.menuExitActive
    };

    return(
        <CSSTransition 
            in={animation}
            nodeRef={menuRef}
            classNames={menuAnimationDots}
            timeout={800}
            mountOnEnter
            unmountOnExit
        > 
            <div className={style.menu} ref={menuRef}>
                <button className={style.butClose} onClick={() => setOpen(false)} />
                {children}
            </div>
        </CSSTransition>
    )
}