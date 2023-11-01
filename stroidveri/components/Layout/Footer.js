import style from '../../styles/Layout.module.scss'
import Image from 'next/image'

export default function Footer() {
    return(
      <footer className={style.footer}>
        <a href="/">
          <Image src="/vercel.svg" alt="ООО Стройдвери" width={72} height={46} />
          <span>ООО Стройдвери</span>
        </a>
      </footer>
    )
}