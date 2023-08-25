import Header from './Header'
import Footer from './Footer'
import style from '../../styles/Layout.module.scss'

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main className={style.content}>
                <div className={style.conteiner}>
                    {children}
                </div>
            </main>
            <Footer />
        </>
    )
}