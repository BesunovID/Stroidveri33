import style from '../../styles/Layout.module.scss'
import { useState, useRef } from 'react'
import { useMountMenu } from './useMountMenu'

export default function HamburgerMenu({ children }) {
    const [isOpen, setOpen] = useState(false);
    const { mounted } = useMountMenu({isOpen});

    return(
        <div className={style.hamburger}>
            <button className={style.butOpen} onClick={() => setOpen(true)} />
            {mounted && 
            <Menu isOpen={isOpen} setOpen={setOpen}>
                {children}
            </Menu>}
        </div>
    )
}

const Menu = ({ children, isOpen, setOpen }) => {
    const menuRef = useRef();
    const menuAnimationDots = {
        enter: style.menuEnter,
        enterActive: style.menuEnterActive,
        exit: style.menuExit,
        exitActive: style.menuExitActive
    };

    return(
        <CSSTransition 
            in={isOpen}
            nodeRef={menuRef}
            classNames={menuAnimationDots}
            timeout={800}
            mountOnEnter
            unmountOnExit
        > 
        <div className={style.menu}>
            <button className={style.butClose} onClick={() => setOpen(false)} />
            {children}
        </div>
        </CSSTransition>
    )
}