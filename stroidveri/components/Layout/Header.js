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
                                    <Image 
                                        src={logo} 
                                        width={90}
                                        height={90}
                                        alt='Стройдвери 33' 
                                    />
                                </Link>
                            </div>
                            <MenuLinks />
                            <div className={style.numbers}>
                                <a href="tel:89300310053">8-930-031-00-53</a> 
                            </div>
                            <ButtonFeedBack />
                            <Raiting />
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
                <Link className={style.pageLink} href={'/'} passHref>
                    <PageLink mobileModalOpen={mobileModalOpen}>
                        Главная
                    </PageLink>
                </Link>
            : null}
            {PAGES.map((page, i) => (
                <Link className={style.pageLink} key={i} href={page.href} passHref prefetch={false}>
                    <PageLink mobileModalOpen={mobileModalOpen}>
                        {page.name}
                    </PageLink>
                </Link>
            ))}
        </div>
    )
}

const PageLink = forwardRef(function page({ children, mobileModalOpen }, ref) {
    return(
        <div 
           // className={style.pageLink} 
            onClick={mobileModalOpen != undefined ? (() => mobileModalOpen(false)) : null}
            ref={ref}
        >
            {children}
        </div>
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

export const Raiting = () => {
    return(
        <div className={style.raiting}>
            <iframe 
                src="https://yandex.ru/sprav/widget/rating-badge/236394758693?type=rating&theme=dark" 
                width="150" 
                height="50" 
                style={{border: '0'}}
            >
            </iframe>
        </div>
    )
}

const PAGES = [
    {
        'href': '/catalog',
        'name': 'Каталог'
    },    
    {
        'href': '/about',
        'name': 'О компании'
    },
    {
        'href': '/delivery',
        'name': 'Доставка'
    },
    {
        'href': '/contacts',
        'name': 'Контакты'
    },

]