import style from '../../styles/Layout.module.scss'
import logo from '../../public/vercel.svg'
import Image from 'next/image'
import Link from 'next/link'
import HamburgerMenu from './HamburgerMenu'
import { useState, useEffect } from 'react';
import Form from '../Form'
import Modal from '../Modal'

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

export const MenuLinks = ({mobileModalOpen}) => {
    const [isOpenModal, setOpenModal] = useState(false);
    return(
        <div className={style.navLinks}>
            {PAGES.map((page, i) => (
                <Link key={i} href={page.href}>
                    <a className={style.pageLink} 
                        onClick={mobileModalOpen != undefined ? (() => mobileModalOpen(false)) : null}
                    >
                    {page.name}</a>
                </Link>
            ))}
            <button className='form' onClick={() => setOpenModal(true)} />
            <Modal isOpen={isOpenModal} setOpen={setOpenModal}>
                <Form setOpenModal={setOpenModal}/>
            </Modal>
        </div>
    )
}

const PAGES = [
    {
        'href': '/catalog',
        'name': 'Каталог'
    },
    {
        'href': '/contacts',
        'name': 'Контакты'
    },
    {
        'href': '/delivery',
        'name': 'Доставка'
    },
    {
        'href': '/about',
        'name': 'О компании'
    }
]