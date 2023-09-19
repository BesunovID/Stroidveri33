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
        if ((windowWidth === 'portable') && (window.innerWidth <= 700)){
            setWindowWidth('modile');
        } 
        else if ((windowWidth === 'modile') && (window.innerWidth > 700)){
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
        <>
            {windowWidth === 'portable' ?
            (<div className={style.contactsHead}>
                <p>
                    <div className={style.tel}>
                        <span>8-930-031-00-53</span> 
                        <span>8-904-596-33-84</span> 
                    </div>
                    <span className={style.mail}>stroidveri33@mail.ru</span>
                </p>
            </div>) : null}
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
                            <ButtonFeedBack />
                        </>) :
                        (<HamburgerMenu>
                            <MenuLinks />
                            <ButtonFeedBack />
                        </HamburgerMenu>)
                    }
                </nav>
            </header>
        </>
    )
}

export const MenuLinks = ({mobileModalOpen}) => {
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
        </div>
    )
}

export const ButtonFeedBack = () => {
    const [isOpenModal, setOpenModal] = useState(false);
    return(
        <>
            <button className={style.feedBack} onClick={() => setOpenModal(true)}>
                Отправить заявку
            </button>
            <Modal isOpen={isOpenModal} setOpen={setOpenModal}>
                <Form setOpenModal={setOpenModal}/>
            </Modal>
        </>
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