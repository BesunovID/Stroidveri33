import style from '../../styles/Layout.module.scss'
import logo from '../../public/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, forwardRef } from 'react';
import Form from '../Form'
import dynamic from 'next/dynamic'

const DynamicModal = dynamic(() => import('../Modal'));
const DynamicMenu = dynamic(() => import('./HamburgerMenu'));

export default function Header() {
    const [windowWidth, setWindowWidth] = useState('portable');

    useEffect(() => {
        const resizeHandler = () => {
            if ((windowWidth === 'portable') && (window.innerWidth <= 900)){
                setWindowWidth('modile');
            } 
            else if ((windowWidth === 'modile') && (window.innerWidth > 900)){
                setWindowWidth('portable');
            }
        }
        
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
                <div className={style.contactsHeadWrap}>
                    <div className={style.tel}>
                        <span>8-930-031-00-53</span> 
                        <span>8-904-596-33-84</span> 
                    </div>
                    <span className={style.mail}>stroidveri33@mail.ru</span>
                </div>
            </div>) : null}
            <header className={style.header}>
                <nav className={style.nav}>
                    {windowWidth === 'portable' ? 
                        (<>
                            <div className={style.logo}>
                                <Link href='/'>
                                    <a>
                                        <Image 
                                            src={logo} 
                                            layout='fill'
                                            objectFit='contain'
                                            alt='Стройдвери 33' 
                                        />
                                    </a>
                                </Link>
                            </div>
                            <MenuLinks />
                            <div className={style.numbers}>
                                <a href="tel:89300310053">8-930-031-00-53</a> 
                                <a href="tel:89045963384">8-904-596-33-84</a>
                            </div>
                            <ButtonFeedBack />
                        </>) :
                        (<DynamicMenu>
                            <MenuLinks />
                            <ButtonFeedBack />
                        </DynamicMenu>)
                    }
                </nav>
            </header>
        </>
    )
}

export const MenuLinks = ({mobileModalOpen}) => {
    return(
        <div className={style.navLinks}>
            {mobileModalOpen != undefined ? 
                <Link href={'/'} passHref>
                    <PageLink mobileModalOpen={mobileModalOpen}>
                        Главная
                    </PageLink>
                </Link>
            : null}
            {PAGES.map((page, i) => (
                <Link key={i} href={page.href} passHref>
                    <PageLink mobileModalOpen={mobileModalOpen}>
                        {page.name}
                    </PageLink>
                </Link>
            ))}
        </div>
    )
}

const PageLink = forwardRef(function page({ children, mobileModalOpen, href }, ref) {
    return(
        <a 
            href={href}
            className={style.pageLink} 
            onClick={mobileModalOpen != undefined ? (() => mobileModalOpen(false)) : null}
            ref={ref}
        >
            {children}
        </a>
    )
})

export const ButtonFeedBack = () => {
    const [isOpenModal, setOpenModal] = useState(false);
    return(
        <>
            <button className={style.feedBack} onClick={() => setOpenModal(true)}>
                <h2>Связаться с нами</h2>
            </button>
            <DynamicModal isOpen={isOpenModal} setOpen={setOpenModal}>
                <Form setOpenModal={setOpenModal}/>
            </DynamicModal>
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