import style from '../../styles/Layout.module.scss'
import logo from '../../public/vercel.svg'
import Image from 'next/image'
import Link from 'next/link'
import HamburgerMenu from './HamburgerMenu'
import { useState, useEffect } from 'react';

export default function Header() {
    const [windowWidth, setWindowWidth] = useState('portable');

    const resizeHandler = () => {
        if ((windowWidth === 'portable') && (window.screen.width <= 700)){
            setWindowWidth('modile');
        } 
        else if ((windowWidth === 'modile') && (window.screen.width > 700)){
            setWindowWidth('portable');
        }
    }

    useEffect(() => {
        window.addEventListener('resize', resizeHandler);
        resizeHandler();
        return () => {
            window.removeEventListener('resize', resizeHandler);
        }

    }, [windowWidth]);

    return (
        <header className={style.header}>
            <nav className={style.nav}>
                {windowWidth === 'portable' ? 
                    (<>
                        <div className={style.logo}>
                            <Link href='/'>
                                <a><Image src={logo} alt='Стройдвери 33' /></a>
                            </Link>
                        </div>
                        <MenuLinks />
                    </>) :
                    (<HamburgerMenu>
                        <MenuLinks />
                    </HamburgerMenu>)
                }
            </nav>
        </header>
    )
}

const MenuLinks = () => {
    return(
        <div className={style.navLinks}>
            <Link href='/catalog'>
                <a className={style.pageLink}>Каталог</a>
            </Link>
            <Link href='/contacts'>
                <a className={style.pageLink}>Контакты</a>
            </Link>
            <Link href='/delivery'>
                <a className={style.pageLink}>Доставка</a>
            </Link>
            <Link href='/about'>
                <a className={style.pageLink}>О компании</a>
            </Link>
        </div>
    )
}