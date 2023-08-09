import style from '../../styles/Layout.module.scss'
import logo from '../../public/vercel.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
        <div className={style.navbar}>
            <div className={style.logoImg}>
                <Link href='/'>
                    <a><Image src={logo} alt='Стройдвери 33' /></a>
                </Link>
            </div>
            <div className={style.navLinks}>
                <ul>
                    <li>
                        <Link href='/catalog'>Каталог</Link>
                    </li>
                    <li>
                        <Link href='/contacts'>Контакты</Link>
                    </li>
                    <li>
                        <Link href='/delivery'>Доставка</Link>
                    </li>
                    <li>
                        <Link href='/about'>О компании</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}