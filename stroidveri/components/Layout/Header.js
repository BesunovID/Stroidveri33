import style from '../../styles/Layout.module.scss'
import logo from '../../public/vercel.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
        <header className={style.header}>
            <nav className={style.nav}>
                <div className={style.logo}>
                    <Link href='/'>
                        <a><Image src={logo} alt='Стройдвери 33' /></a>
                    </Link>
                </div>
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
            </nav>
        </header>
    )
}